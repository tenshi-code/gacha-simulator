const close = document.querySelector('.close');
const element = document.getElementById('historyDiv');

const historyBtn = () => {
	element.classList.add('view-history');
	element.style.display = 'grid';
	setTimeout(() => {
		close.style.display = 'block';
		document.addEventListener("keydown", removeHistory);
	}, 2000);
};

close.addEventListener('click', () => {
	element.classList.remove('view-history');
	close.style.display = 'none';
	element.style.display = 'none';
});

const removeHistory = e => {
	if (e.key === "Escape") {
		element.classList.remove('view-history');
		elements.close.style.display = 'none';
		element.style.display = 'none';
		document.removeEventListener("keydown", removeHistory);
	}
};

const animation = document.createElement('style');
document.head.appendChild(animation);

const myTimer = () => {
	setTimeout(myTimer, 30000);
	setTimeout(() => {
		animation.innerHTML = `.container::after {
            animation: bg-inverse 3s forwards steps(60);
            z-index: 1;
          }`;

		setTimeout(() => {
			animation.innerHTML = `.container::after {
                animation: bg 3s forwards steps(60);
                z-index: 1;
              }
              
              .container::before {
                z-index: 1;
                  animation: bg-inverse 3s forwards steps(60);
              }`;

			setTimeout(() => {
				animation.innerHTML = `  .container::before {
                  animation: bg 3s forwards steps(60);
                  z-index: 1;
              }`;
			}, 10000);
		}, 10000);
	}, 10000);
};

setTimeout(myTimer);

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName('custom-select');
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName('select')[0];
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement('DIV');
	a.setAttribute('class', 'select-selected');
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement('DIV');
	b.setAttribute('class', 'select-items select-hide');
	for (j = 1; j < selElmnt.length; j++) {
		/* For each option in the original select element,
    create a new DIV that will act as an option item: */
		c = document.createElement('DIV');
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener('click', function(e) {
			/* When an item is clicked, update the original select box,
        and the selected item: */
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName('select')[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName('same-as-selected');
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute('class');
					}
					this.setAttribute('class', 'same-as-selected');
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener('click', function(e) {
		/* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle('select-hide');
		this.classList.toggle('select-arrow-active');
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
  except the current select box: */
	var x,
		y,
		i,
		arrNo = [];
	x = document.getElementsByClassName('select-items');
	y = document.getElementsByClassName('select-selected');
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove('select-arrow-active');
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add('select-hide');
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);

document.querySelector('.select-selected').addEventListener('click', () => {
	if (document.querySelector('.select-selected').innerHTML == 'USD') {
		document.getElementById('currencyLabel').innerHTML = `Value of crystals in real currency: ${currencySpent} USD`;
	} else if (document.querySelector('.select-selected').innerHTML == 'EUR') {
		document.getElementById('currencyLabel').innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.9).toFixed(2)} EUR`;
	} else if (document.querySelector('.select-selected').innerHTML == 'GBP') {
		document.getElementById('currencyLabel').innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.81).toFixed(2)} GBP`;
	} else if (document.querySelector('.select-selected').innerHTML == 'AUD') {
		document.getElementById('currencyLabel').innerHTML = `Value of crystals in real currency: ${(currencySpent * 1.5).toFixed(2)} AUD`;
	}
});

const itemNames = [
	'R-Card Bundle (S)',
	'Small Speaker',
	'Primary Proficiency Chip',
	'Proficiency Bonus Card - 3 Days',
	'Proficiency Bonus Card - 1 Day',
	'EXP Bonus Card - 3 Days',
	'EXP Bonus Card - 1 Day',
	'Random Iori Voice',
	'Random Rom Voice',
	'Random Ivan Voice',
	'Random Joanna Voice',
	'Random Ning Action (B-level)',
	'Random Iori Action (B-level)',
	'Random Joanna Action (B-level)',
	'Random Rom Action (B-level)',
	'Random Ivan Action (B-level)',
	'[Ivan Emoji] Glare',
	'[Iori Emoji] Angry',
	'[Joanna Graffiti] Victory Graffiti',
	'[Ivan Graffiti] Silencer',
	'Entrance Effect Pink',
	'Etrance Effect Blue',
	'Alpha Coin',
	'R-Card Bundle (M)',
	'Advanced Proficiency Chip',
	'Proficiency Bonus Card - 7 Days',
	'EXP Bonus Card - 7 Days',
	'Painting: Attack, Firefox',
	'Painting - Battle of Food Street',
	'Painting - Operation Sakura',
	'Painting, Halloween Revelry',
	'Painting - Alpha City Impressions',
	'Painting - Sunset Boulevard',
	'[Joanna Graffiti] Raise Hand',
	'[Ivan Graffiti] Campus Snack',
	'[Ning Graffiti] Firefox Gingerbread',
	'[Graffiti] Ning in the Sky',
	'[Ning Graffiti] Small Fox',
	'[Iori Graffiti] Dream Butterfly',
	'[Joanna Graffiti] Honor Guard',
	'[Ning Graffiti] Lady Teacher',
	'[Rom Graffiti] Kendo Club',
	'[Mila Graffiti] Awesome Entrance',
	'[Iori Graffiti] Ikebana',
	'[Rom Graffiti] Winter Agent',
	'[Iori Graffiti] Skylark Q',
	'[Ivan Graffiti] Ivan Portrait',
	"[Ivan Graffiti] I Can't Do This",
	'[Iori Graffiti] Homework',
	'[Graffiti] Go to School',
	"[Ning Graffiti] I'm Beat",
	'[Ning Graffiti] Devilish Student',
	'[Graffiti] Pixel Iori',
	'[Graffiti] Gymnast Star',
	"[Graffiti] You're Done",
	'[Rom Graffiti] Bounty',
	"[Iori Graffiti] Skylark's Pride",
	'[Ivan Emoji] Beat You Up',
	'[Ivan Emoji] Gym Teacher',
	'[Ivan Emoji] Puzzled',
	'[Ivan Emoji] Hopeless',
	'[Mila Emoji] Provoke',
	'[Rom Emoji] You Missed',
	'[Iori Emoji] Sweet',
	'[Iori Emoji] Hurry Up',
	'[Iori Emoji] Listening',
	'[Ning Emoji] Happy New Year',
	'[Ning Emoji] Make a Fool of Yourself',
	'[Ning Emoji] Hotblooded Student',
	'[Ning Emoji] Reading',
	'[Ning Emoji] Celebrate',
	'[Rom Emoji] Snowfight',
	'[Rom Emoji] Santa Claus',
	'[Rom Emoji] Scare Someone',
	'[Rom Emoji] Famous Detective',
	'[Rom Emoji] Self-Isolation',
	'[Mila Emoji] "Mila, #1 in the World"',
	'[Joanna Emoji] Injection',
	'[Joanna Emoji] Cheerleader',
	'[Joanna Emoji] Thanks',
	'[Headwear] Ivan, Brown Bear',
	'[Set] Iori: Party Cat',
	'[Headwear] Mila - Magic Christmas',
	'[Headwear] Iori - Christmas Hat',
	'[Headwear] Ning - Cozy Bearcat',
	'[Headwear] Ning - Shiba Pup',
	'[Headwear] Ning, Chick-chick',
	'[Headwear] Rom, Scary Pumpkin',
	'Flamethrower Skin: Solo Blaze',
	'Skateboard Skin: Mountain Disco',
	'Skateboard Skin: Super Gamer',
	'Deformed Car Skin: Nightstalker',
	'Deformed Car Skin: Spitfire',
	'Ivan Skin: Boiling Point',
	'Iori Skin: Crane Hime',
	'Iori Skin: Phantom Viper',
	'R-Card Bundle (L)',
	'[Headwear] Ning: Bunny Magic',
	'[Set] Joanna, Little Angel',
	'[Set] Joanna, Little Devil',
	'[Headwear] Joanna - Macaron',
	'Skateboard Skin: Gingerbread Shuttle',
	'Homing Missile Skin: Lion Dance',
	'Ion Cannon Skin: Blaze, S1 Premium',
	'Exploder Bot Launcher Skin: Fierry Chariot',
	'Doomlight Skin: Christmas Patrol',
	'Doomlight Skin: Red Prism',
	'Caramel Skin: Marvelous Snowman',
	'Caramel Skin: Col. Teddy',
	'Hotsteel Skin: Molten Core',
	'Hotsteel Skin: Scorched Earth',
	'Hotsteel Skin: Magma',
	'Firefox Skin: Solar Eclipse',
	'Firefox Skin: Firepower',
	'Firestar Skin: Rock Avalanche',
	'Gabriel Skin: Midnight Feast',
	'Gabriel Skin: Horus',
	'Andromeda Skin: Singeing Arrow',
	'Andromeda Skin: Jade Pavo',
	'Arthur Skin: Jungle Op',
	'Arthur Skin: Desert Ark',
	'Arthur Skin: Crimson Vigil',
	'Skylark Skin: Hades Night',
	'Skylark Skin: Silent Sky',
	'Skylark Skin: Night Bat',
	'Caramel Skin: Chubby Panda',
	'Firestar Skin: Iron Purgatory',
	'Ivan "Iron Curtain" Brawler',
	'Rom Whirlwind Agent',
	'Rom Gentleman of Baker Street',
	'Rom Dawn Sentinel',
	'Joanna Summer Racer',
	'Joanna Hot Dance Cheerleading',
	'Joanna Healthcare',
	'Ning Spring Garden',
	'Ning Blanche Manor Maid',
	'Ning Zeal Grade',
	"Ning St. Emily Girls' School",
	'Mila Little Reindeer',
	'Iori Phoenix Rising',
	'Iori Skier',
	'Iori Hazama Clan: Nightingale',
	'Skylark Crysting Eye Papilo',
	'Arthur Centurion Augusta',
	'Hotsteel Lord of Icy Abyss',
	'Andromeda Valkyrie Hilde'
];
const itemPercent = [
	5.004,
	7.004,
	16.004,
	16.254,
	18.004,
	18.587,
	20.67,
	24.559,
	26.226,
	27.893,
	30.671,
	32.893,
	34.004,
	36.226,
	38.448,
	40.67,
	42.17,
	43.67,
	45.17,
	46.67,
	48.17,
	49.67,
	57.674,
	62.674,
	65.674,
	65.757,
	66.007,
	66.757,
	67.507,
	68.257,
	69.007,
	69.757,
	70.507,
	70.882,
	71.257,
	71.632,
	72.007,
	72.382,
	72.757,
	73.132,
	73.507,
	73.882,
	74.257,
	74.632,
	75.007,
	75.382,
	75.757,
	76.132,
	76.507,
	76.882,
	77.257,
	77.632,
	78.007,
	78.382,
	78.757,
	79.132,
	79.507,
	79.898,
	80.289,
	80.68,
	81.071,
	81.462,
	81.853,
	82.244,
	82.635,
	83.026,
	83.417,
	83.808,
	84.199,
	84.59,
	84.981,
	85.372,
	85.763,
	86.154,
	86.545,
	86.936,
	87.327,
	87.718,
	88.109,
	88.5,
	88.75,
	89,
	89.25,
	89.5,
	89.75,
	90,
	90.25,
	90.5,
	90.8,
	91.1,
	91.4,
	91.7,
	92,
	93,
	94,
	95,
	95.407,
	95.58,
	95.753,
	95.926,
	96.009,
	96.243,
	96.387,
	96.531,
	96.675,
	96.7,
	96.725,
	96.75,
	96.775,
	96.8,
	96.825,
	96.85,
	96.875,
	96.9,
	96.925,
	96.95,
	96.975,
	97,
	97.025,
	97.05,
	97.075,
	97.1,
	97.125,
	97.15,
	97.175,
	98.15,
	99.125,
	99.15,
	99.175,
	99.2,
	99.225,
	99.25,
	99.275,
	99.3,
	99.325,
	99.35,
	99.375,
	99.4,
	99.425,
	99.45,
	99.475,
	99.5,
	99.542,
	99.584,
	99.626,
	100
];

const resID = document.getElementById('show-result-id');
const loadingID = document.getElementById('loading-id');
const gacha = document.getElementById('gacha-item-id');
const anyKey = document.querySelector('.any-key');
const statsSpent = document.querySelector('.statistics__spent');
const currencyLabel = document.getElementById('currencyLabel');
const labelSelected = document.querySelector('.select-selected');
const container = document.querySelector('.container');
let spentCount = 0;
let currencySpent = 0;

const displayOneRes = () => {
	resID.classList.add('show-result');
	loadingID.classList.add('loading');
	loadingID.removeAttribute('style');
	loadingID.setAttribute('src', '/gacha-simulator/img/loading.png');
    anyKey.setAttribute('style', 'display: none');
    container.setAttribute('style', 'filter: blur(10px);background-color: rgba(0, 0, 0, 0.3);');
	setTimeout(() => {
		document.querySelector('.any-key').setAttribute('style', 'display: block');
		const result = Math.random() * 100;
		const arrProcess = (el, i) => {
			return result <= el ? itemNames[i] : null;
		};
		const arrRes = itemPercent.map(arrProcess);
		const checkTrue = (arr) => {
			return arr !== null;
		};
		const check = arrRes.findIndex(checkTrue);
		const backToHome = () => {
			gacha.innerHTML = '';
			gacha.classList.remove('gacha-item');
			anyKey.setAttribute('style', 'display: none');
            resID.classList.remove('show-result');
            container.removeAttribute('style');
			document.removeEventListener('keypress', backToHome);
			document.removeEventListener('click', backToHome);
		};
		const displayItem = () => {
			loadingID.setAttribute('style', 'display: none');
            gacha.classList.add('gacha-item');
			const markup = `
			<img src="/gacha-simulator/img/gacha/${check}.png" alt="Gacha item" class="gacha-item__result" title="${itemNames[
				check
			]}">
			`;
			gacha.insertAdjacentHTML('afterbegin', markup);
			document.querySelector('.gacha-item__result').setAttribute('style', 'grid-area: 1 / 1 / -1 / -1');
			document.addEventListener('keypress', backToHome);
			document.addEventListener('click', backToHome);
			spentCount += 100;
			currencySpent = (0.0166666666666667 * spentCount).toFixed(2);
			statsSpent.innerHTML = `Crystals spent: <img src="/gacha-simulator/img/381-3816508_gold-bar-png-transparent-background-gold-bar-vector.png"/> ${spentCount}`;
			if (labelSelected.innerHTML == 'USD') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${currencySpent} USD`;
			} else if (labelSelected.innerHTML == 'EUR') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.9).toFixed(2)} EUR`;
			} else if (labelSelected.innerHTML == 'GBP') {
					currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.81).toFixed(2)} GBP`;
			} else if (labelSelected.innerHTML == 'AUD') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 1.5).toFixed(2)} AUD`;
			}
			element.insertAdjacentHTML('afterbegin', markup);
		};
		displayItem();
	}, 500);
};

const displayTenRes = () => {
	const results = [];
	const loopRes0 = [];
	const loopRes1 = [];
	const loopRes2 = [];
	const loopRes3 = [];
	const loopRes4 = [];
	const loopRes5 = [];
	const loopRes6 = [];
	const loopRes7 = [];
	const loopRes8 = [];
	const loopRes9 = [];
	let i;

	resID.classList.add('show-result');
	loadingID.classList.add('loading');
	loadingID.removeAttribute('style');
	loadingID.setAttribute('src', '/gacha-simulator/img/loading.png');
    anyKey.setAttribute('style', 'display: none');
    container.setAttribute('style', 'filter: blur(10px);background-color: rgba(0, 0, 0, 0.3);');
	setTimeout(() => {
		document.querySelector('.any-key').setAttribute('style', 'display: block');
		for (i = 0; i < 10; i++) {
			results.push(Math.random() * 100);
		}

		for (i = 0; i < itemPercent.length; i++) {
			itemPercent[i] >= results[0] && loopRes0.length < 2 ? loopRes0.push(itemNames[i], i) : null;
			itemPercent[i] >= results[1] && loopRes1.length < 2 ? loopRes1.push(itemNames[i], i) : null;
			itemPercent[i] >= results[2] && loopRes2.length < 2 ? loopRes2.push(itemNames[i], i) : null;
			itemPercent[i] >= results[3] && loopRes3.length < 2 ? loopRes3.push(itemNames[i], i) : null;
			itemPercent[i] >= results[4] && loopRes4.length < 2 ? loopRes4.push(itemNames[i], i) : null;
			itemPercent[i] >= results[5] && loopRes5.length < 2 ? loopRes5.push(itemNames[i], i) : null;
			itemPercent[i] >= results[6] && loopRes6.length < 2 ? loopRes6.push(itemNames[i], i) : null;
			itemPercent[i] >= results[7] && loopRes7.length < 2 ? loopRes7.push(itemNames[i], i) : null;
			itemPercent[i] >= results[8] && loopRes8.length < 2 ? loopRes8.push(itemNames[i], i) : null;
			itemPercent[i] >= results[9] && loopRes9.length < 2 ? loopRes9.push(itemNames[i], i) : null;
		}

		const backToHome = () => {
			gacha.innerHTML = '';
			gacha.classList.remove('gacha-item');
			anyKey.setAttribute('style', 'display: none');
            resID.classList.remove('show-result');
            container.removeAttribute('style');
			document.removeEventListener('keypress', backToHome);
			document.removeEventListener('click', backToHome);
		};
		const displayItem = () => {
			loadingID.setAttribute('style', 'display: none');
			gacha.classList.add('gacha-item');
			const markup = `
		<img src="/gacha-simulator/img/gacha/${loopRes0[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes0[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes1[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes1[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes2[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes2[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes3[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes3[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes4[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes4[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes5[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes5[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes6[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes6[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes7[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes7[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes8[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes8[0]}">
		<img src="/gacha-simulator/img/gacha/${loopRes9[1]}.png" alt="Gacha item" class="gacha-item__result" title="${loopRes9[0]}">
		`;
			gacha.insertAdjacentHTML('afterbegin', markup);
			document.addEventListener('keypress', backToHome);
			document.addEventListener('click', backToHome);
			spentCount += 900;
			currencySpent = (0.0166666666666667 * spentCount).toFixed(2);
			statsSpent.innerHTML = `Crystals spent: <img src="/gacha-simulator/img/381-3816508_gold-bar-png-transparent-background-gold-bar-vector.png"/> ${spentCount}`;
			if (labelSelected.innerHTML == 'USD') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${currencySpent} USD`;
			} else if (labelSelected.innerHTML == 'EUR') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.9).toFixed(2)} EUR`;
			} else if (labelSelected.innerHTML == 'GBP') {
					currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 0.81).toFixed(2)} GBP`;
			} else if (labelSelected.innerHTML == 'AUD') {
				currencyLabel.innerHTML = `Value of crystals in real currency: ${(currencySpent * 1.5).toFixed(2)} AUD`;
			}
			element.insertAdjacentHTML('afterbegin', markup);
		};
		displayItem();
	}, 1500);
};
