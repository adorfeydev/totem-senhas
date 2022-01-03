/* JSON DATA */
async function getConfig() {
	const response = await fetch("config.json");
	return response.json();
}
const configData = await getConfig();
console.log(configData);

async function getMenu() {
	const response = await fetch("menu.json");
	return response.json();
}
const jsonData = await getMenu();

async function getServ() {
	const response = await fetch("servicos.json");
	return response.json();
}
const jsonData2 = await getServ();
//console.log(jsonData2.servicos);

/* CONTROLADORE */
const prioridadeON = configData.prioridade;
const servicosON = configData.servicos;
const momdalON = configData.modal;

function getNumber() {
	var minNumber = 100; // The minimum number you want
	var maxNumber = 500; // The maximum number you want
	var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
	return randomnumber; // Returns false just to tidy everything up
}

function refreshPage() {
	window.location.reload();
}

/* MODAL METHOD */
const modalSenha = document.querySelector("#alertmodal");

function createModal(txtRes) {
	let mcontent = document.createElement("div");
	mcontent.className = "modal-content";
	let mheader = document.createElement("div");
	mheader.className = "modal-header";
	let spanIco = document.createElement("span");
	spanIco.className = "closeA";
	spanIco.innerHTML = "&times;";
	let h2 = document.createElement("h2");
	h2.className = "h2alert";
	h2.innerText = "Aguarde enquanto sua senha é impressa";

	mheader.append(spanIco);
	mheader.append(h2);
	mcontent.appendChild(mheader);

	let mbody = document.createElement("div");
	mbody.className = "modal-body";
	let title = document.createElement("h3");
	title.innerText = "Sua senha gerada é ";
	let h3 = document.createElement("h3");
	h3.id = "alertsenha";
	h3.innerText = txtRes;

	mbody.append(title);
	mbody.append(h3);
	mcontent.appendChild(mbody);

	return mcontent;
}

/* SERVICES METHOD*/
function createServ(pSenha) {
	console.log("starting SERVICES script...");

	const servData = jsonData2.servicos;
	const servLenght = servData.length;
	const prioridadeSenha = pSenha;

	const cardsList = document.querySelector("#cardslistS");

	function createCard2(item) {
		let btn = document.createElement("button");
		btn.className = "btn btnServicos";
		let statusCard = document.createElement("div");
		statusCard.className = "status-card";
		let name = document.createElement("h4");
		name.innerText = item.name;

		statusCard.append(name);
		btn.appendChild(statusCard);

		return btn;
	}

	function generateServ() {
		let activeServ = servData.filter(function (item) {
			return item.active == true;
		});
		console.log(activeServ);

		activeServ.map((item) => {
			let length = activeServ.length;
			console.log(activeServ.length);
			switch (length) {
				case 1:
					cardsList.className = "cards one";
					cardsList.appendChild(createCard2(item));
					break;
				case 2:
					cardsList.className = "cards two";
					cardsList.appendChild(createCard2(item));
					break;
				case 3:
					cardsList.className = "cards three";
					cardsList.appendChild(createCard2(item));
					break;
				case 4:
					cardsList.className = "cards four";
					cardsList.appendChild(createCard2(item));
					break;
				case 5:
					cardsList.className = "cards five";
					cardsList.appendChild(createCard2(item));
					break;
				case 6:
					cardsList.className = "cards six";
					cardsList.appendChild(createCard2(item));
					break;
				case 7:
					cardsList.className = "cards seven";
					cardsList.appendChild(createCard2(item));
					break;
				case 8:
					cardsList.className = "cards eight";
					cardsList.appendChild(createCard2(item));
					break;
				case 9:
					cardsList.className = "cards nine";
					cardsList.appendChild(createCard2(item));
					break;
				case 10:
					cardsList.className = "cards ten";
					cardsList.appendChild(createCard2(item));
					break;
				default:
					cardsList.className = "cards";
					cardsList.appendChild(createCard2(item));
					break;
			}
		});
	}
	generateServ(servLenght);

	/* SENHA BUTTON */
	let btnServ = document.getElementsByClassName("btnServicos");
	console.log(btnServ);
	// When the user clicks the button, open the modal
	for (let i = 0; i < btnServ.length; i++) {
		btnServ[i].addEventListener("click", () => {
			if (momdalON == 1) {
				console.log("CLICKADO C MODAL");
				let rnum = getNumber();
				// Get the button that opens the modal
				modalSenha.style.display = "block";
				let txtRes;
				if (prioridadeON == 1) {
					txtRes = prioridadeSenha.concat(" ", rnum);
				} else {
					txtRes = "Senha " + rnum;
				}
				modalSenha.append(createModal(txtRes));
				// Get the <span> element that closes the modal
				let spanA = document.getElementsByClassName("closeA")[0];
				// When the user clicks on <span> (x), close the modal
				localStorage.setItem("senhasHistory", JSON.stringify(txtRes));
				spanA.onclick = function () {
					modalSenha.style.display = "none";
					refreshPage();
				};
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function (event) {
					if (event.target == modalSenha) {
						modalSenha.style.display = "none";
						refreshPage();
					}
				};
			} else {
				console.log("CLICKADO SEM MODAL");
				let rnum = getNumber();
				let txtRes;
				if (prioridadeON == 1) {
					txtRes = prioridadeSenha.concat(" ", rnum);
				} else {
					txtRes = "Senha " + rnum;
				}
				localStorage.setItem("senhasHistory", JSON.stringify(txtRes));
				refreshPage();
			}
		});
	}
}

/* MAIN PAGE */
function createMain() {
	console.log("starting MAIN script...");

	const menuData = jsonData.menu;
	const menuLenght = menuData.length;
	//console.log(menuData.length);

	const cardsList = document.querySelector("#cardslistM");
	//console.log(cardsList);

	function createCard(item) {
		let btn = document.createElement("button");
		btn.className = "btn btnMain";
		let statusCard = document.createElement("div");
		statusCard.className = "status-card";
		let name = document.createElement("h4");
		name.innerText = item.name;

		statusCard.append(name);
		btn.appendChild(statusCard);

		return btn;
	}

	function generateMain() {
		let activeMenu = menuData.filter(function (item) {
			return item.active == true;
		});
		console.log(activeMenu);

		activeMenu.map((item) => {
			let length = activeMenu.length;
			console.log(activeMenu.length);
			switch (length) {
				case 1:
					cardsList.className = "cards one";
					cardsList.appendChild(createCard(item));
					break;
				case 2:
					cardsList.className = "cards two";
					cardsList.appendChild(createCard(item));
					break;
				case 3:
					cardsList.className = "cards three";
					cardsList.appendChild(createCard(item));
					break;
				case 4:
					cardsList.className = "cards four";
					cardsList.appendChild(createCard(item));
					break;
				case 5:
					cardsList.className = "cards five";
					cardsList.appendChild(createCard(item));
					break;
				case 6:
					cardsList.className = "cards six";
					cardsList.appendChild(createCard(item));
					break;
				case 7:
					cardsList.className = "cards seven";
					cardsList.appendChild(createCard(item));
					break;
				case 8:
					cardsList.className = "cards eight";
					cardsList.appendChild(createCard(item));
					break;
				case 9:
					cardsList.className = "cards nine";
					cardsList.appendChild(createCard(item));
					break;
				case 10:
					cardsList.className = "cards ten";
					cardsList.appendChild(createCard(item));
					break;
				default:
					cardsList.className = "cards";
					cardsList.appendChild(createCard(item));
					break;
			}
		});
	}
	generateMain(menuLenght);
	/* generateServ(servLenght); */

	function replace() {
		document.getElementById("cardslistM").style.display = "none";
		document.getElementById("cardslistS").style.display = "grid";
	}

	let prioridadeSenha = "";

	let btnMains = document.getElementsByClassName("btnMain");
	for (let i = 0; i < btnMains.length; i++) {
		btnMains[i].addEventListener("click", () => {
			if (servicosON == 1) {
				console.log("CLICKADO C SERVICO");
				prioridadeSenha = btnMains[i].innerText;
				replace();
				createServ(prioridadeSenha);
			} else {
				console.log("CLICKADO SEM SERVICO");
				prioridadeSenha = btnMains[i].innerText;
				if (momdalON == 1) {
					console.log("C MODAL");
					let rnum = getNumber();
					modalSenha.style.display = "block";
					let txtRes;
					if (prioridadeON == 1) {
						txtRes = prioridadeSenha.concat(" ", rnum);
					} else {
						txtRes = "Senha " + rnum;
					}
					modalSenha.append(createModal(txtRes));
					let spanA = document.getElementsByClassName("closeA")[0];
					localStorage.setItem("senhasHistory", JSON.stringify(txtRes));
					spanA.onclick = function () {
						modalSenha.style.display = "none";
						refreshPage();
					};

					window.onclick = function (event) {
						if (event.target == modalSenha) {
							modalSenha.style.display = "none";
							refreshPage();
						}
					};
				} else {
					console.log("S MODAL");
					let rnum = getNumber();
					let txtRes;
					txtRes = prioridadeSenha.concat(" ", rnum);
					localStorage.setItem("senhasHistory", JSON.stringify(txtRes));
					refreshPage();
				}
			}
		});
	}
}

/* FUNCTIONS */
if (prioridadeON == 1) createMain();
else createServ();
