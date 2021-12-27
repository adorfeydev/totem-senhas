console.log("starting SERVICES script...");

//have diferent size and proportions based on lenght of array
//columns behavior for 2, 3, 4, 5
//table behavior for numbers 6, 7, 8, 9, 10

//create li element
//inside a link tag or button
//create div status card
//create status indo div
//h4

const cardsList = document.getElementsByClassName("cards")[0];
console.log(cardsList);

const serviceLenght = 10;

function createCard(i, lenght) {
	const card = document.createElement("div");
	card.className = "cards_item";
	const statusCard = document.createElement("div");
	statusCard.className = "status-card";
	const info = document.createElement("div");
	info.className = "status-card__info";
	let name = document.createElement("h4");
	name.innerText = "SERVIÇO " + i;
	info.append(name);
	statusCard.appendChild(info);
	card.appendChild(statusCard);

	return card;
}

function generateList(x) {
	for (let i = 1; i <= x; i++) {
		cardsList.appendChild(createCard(i, x));
	}
}

generateList(serviceLenght);
