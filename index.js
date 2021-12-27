console.log("starting MAIN script...");

//have diferent size and proportions based on lenght of array
//columns behavior for 2, 3, 4, 5
//table behavior for numbers 6, 7, 8, 9, 10

//create li element
//inside a link tag or button
//create div status card
//create status indo div
//h4

const menuData = {
	menu: [
		{
			active: true,
			icons: ["group"],
			name: "NORMAL",
		},
		{
			active: true,
			icons: ["pregnant_woman", "accessible", "hearing"],
			name: "PREFERENCIAL",
		},
		{
			active: true,
			icons: ["elderly", "elderly_woman", "add"],
			name: "+80 ANOS",
		},
		{
			active: true,
			icons: ["directions_run"],
			name: "EXPRESSA",
		},
	],
};

console.log(menuData.menu.length);

let serviceLenght = menuData.menu.length;

const cardsList = document.getElementsByClassName("cards")[0];
console.log(cardsList);

function createCard(i, lenght, l, icon, n) {
	const card = document.createElement("div");
	card.className = "cards_item";
	const link = document.createElement("a");
	link.href = l;
	const statusCard = document.createElement("div");
	statusCard.className = "status-card";

	const iconbox = document.createElement("div");
	iconbox.className = "status-card_icon";
	const icone = document.createElement("i");
	icone.className = "material-icons";
	icone.innerText = icon;

	const info = document.createElement("div");
	info.className = "status-card_info";
	const name = document.createElement("h4");
	name.innerText = n;

	info.append(name);
	iconbox.append(icone);
	statusCard.appendChild(iconbox);
	statusCard.appendChild(info);
	link.appendChild(statusCard);
	card.appendChild(link);

	return card;
}

function generateList(x) {
	let l = "";
	let ico = "";
	let n = "";
	for (let i = 1; i <= x; i++) {
		switch (i) {
			case 1:
				l = "servicos/nservicos.html";
				ico = "group";
				n = "NORMAL";
				cardsList.appendChild(createCard(i, x, l, ico, n));
				break;
			case 2:
				l = "servicos/pservicos.html";
				ico = "pregnant_woman";
				n = "PREFERENCIAL";
				cardsList.appendChild(createCard(i, x, l, ico, n));
				break;
			case 3:
				l = "servicos/80servicos.html";
				ico = "elderly";
				n = "+80 ANOS";
				cardsList.appendChild(createCard(i, x, l, ico, n));
				break;
			case 4:
				l = "servicos/expservicos.html";
				ico = "directions_run";
				n = "EXPRESSA";
				cardsList.appendChild(createCard(i, x, l, ico, n));
				break;
		}
	}
}

generateList(serviceLenght);
