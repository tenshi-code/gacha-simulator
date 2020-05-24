var elements = {
	history     : document.querySelector('.history__btn'),
	viewHistory : document.querySelector('.view-history'),
	close       : document.querySelector('.close'),
	bgBefore    : document.querySelector('.container::before'),
	bgAfter     : document.querySelector('.container::after')
};

function myFunction() {
	var element = document.getElementById('historyDiv');
  element.classList.add('view-history');
  element.style.display = "grid";
	var close = document.querySelector('.close');
	setTimeout(() => {
		close.style.display = 'block';
	}, 2000);
}

elements.close.addEventListener('click', () => {
	var element = document.getElementById('historyDiv');
	element.classList.remove('view-history');
	// elements.close.parentNode.removeChild(elements.close);
  elements.close.style.display = 'none';
  element.style.display = "none";
});

const bgStart = setTimeout(myTimer, 1);
const tagBeforeAfter = document.createElement('style');
document.head.appendChild(tagBeforeAfter);

function myTimer() {
	bgEnd();
	setTimeout(() => {
		tagBeforeAfter.innerHTML = `.container::after {
            animation: bg-inverse 3s linear;
            z-index: 1;
          }`;

		setTimeout(() => {
			tagBeforeAfter.innerHTML = `.container::after {
            opacity: 1;
            z-index: 1;
          }
          
          .container::before {
            z-index: 1;
        }`;

			setTimeout(() => {
				tagBeforeAfter.innerHTML = `.container::after {
                animation: bg 3s linear;
                z-index: 1;
              }
              
              .container::before {
                z-index: 1;
                  animation: bg-inverse 3s linear;
              }`;

				setTimeout(() => {
					tagBeforeAfter.innerHTML = `.container::before {
                  z-index: 1;
              }`;

					setTimeout(() => {
						tagBeforeAfter.innerHTML = `  .container::before {
                  animation: bg 3s linear;
                  z-index: 1;
              }`;
						setTimeout(() => {
							tagBeforeAfter.innerHTML = `  .container::before {
                z-index: -1;
              }`;
						}, 3000);
					}, 10000);
				}, 3000);
			}, 10000);
		}, 3000);
	}, 10000);
}

const bgEnd = () => {
  clearInterval(myInterval);
	var myInterval = setInterval(myTimer, 39000);
};

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

// QUICKLY IMPLEMENT THE RESULTS FOR TESTING

var element = [];
var element2 = [];

var resultView = document.querySelector('.results');
var historyView = document.getElementById('historyDiv');

function generateResult() {
	var result = Math.random() * 100;
	if (result <= 49.67) {
		element.push('B:');
		var result2 = Math.random() * 49.67;
		if (result2 <= 5.004) {
			element2.push('R-card bundle Small');
		} else if (result2 <= 7.004) {
			element2.push('Small speaker');
		} else if (result2 <= 16.004) {
			element2.push('Primary proficiency chip');
		} else if (result2 <= 16.254) {
			element2.push('3 days proficiency card');
		} else if (result2 <= 18.004) {
			element2.push('1 day proficiency card');
		} else if (result2 <= 18.587) {
			element2.push('3 days exp card');
		} else if (result2 <= 20.67) {
			element2.push('1 day exp card');
		} else if (result2 <= 24.559) {
			element2.push('Random iori voice');
		} else if (result2 <= 26.226) {
			element2.push('Random rom voice');
		} else if (result2 <= 27.893) {
			element2.push('Random ivan voice');
		} else if (result2 <= 30.671) {
			element2.push('Random joanna voice');
		} else if (result2 <= 32.893) {
			element2.push('Random joanna action');
		} else if (result2 <= 34.004) {
			element2.push('Random ning action');
		} else if (result2 <= 36.226) {
			element2.push('Random rom action');
		} else if (result2 <= 38.448) {
			element2.push('Random ivan action');
		} else if (result2 <= 40.67) {
			element2.push('Random iori action');
		} else if (result2 <= 42.17) {
			element2.push('Graffiti glare');
		} else if (result2 <= 43.67) {
			element2.push('Graffiti angry');
		} else if (result2 <= 45.17) {
			element2.push('Graffiti victory');
		} else if (result2 <= 46.67) {
			element2.push('Graffiti silencer');
		} else if (result2 <= 48.17) {
			element2.push('Entrance effect pink');
		} else if (result2 <= 49.67) {
			element2.push('Entrance effect blue');
		}
	} else if (result <= 95) {
		element.push('A:');
		var result3 = Math.random() * 45.33;
		if (result3 <= 8.004) {
			element2.push('Alpha coins');
		} else if (result3 <= 12.004) {
			element2.push('R-card bundle medium');
		} else if (result3 <= 15.004) {
			element2.push('Advanced proficiency chip');
		} else if (result3 <= 15.087) {
			element2.push('7 days proficiency card');
		} else if (result3 <= 15.337) {
			element2.push('7 days exp card');
		} else if (result3 <= 16.087) {
			element2.push('Painting attack firefox');
		} else if (result3 <= 16.837) {
			element2.push('Painting battle of food street');
		} else if (result3 <= 17.587) {
			element2.push('Painting operation sakura');
		} else if (result3 <= 18.337) {
			element2.push('Painting halloween revelry');
		} else if (result3 <= 19.087) {
			element2.push('Painting alpha city impressions');
		} else if (result3 <= 19.837) {
			element2.push('Painting sunset boulevard');
		} else if (result3 <= 20.212) {
			element2.push('Graffiti raise hand');
		} else if (result3 <= 20.587) {
			element2.push('Graffiti campus snack');
		} else if (result3 <= 20.962) {
			element2.push('Graffiti firefox gingerbread');
		} else if (result3 <= 21.337) {
			element2.push('Graffiti ning in the sky');
		} else if (result3 <= 21.712) {
			element2.push('Graffiti small firefox');
		} else if (result3 <= 22.087) {
			element2.push('Graffiti dream butterfly');
		} else if (result3 <= 22.462) {
			element2.push('Graffiti honor guard');
		} else if (result3 <= 22.837) {
			element2.push('Graffiti lady teacher');
		} else if (result3 <= 23.212) {
			element2.push('Graffiti kendo club');
		} else if (result3 <= 23.587) {
			element2.push('Graffiti awesome entrance');
		} else if (result3 <= 23.962) {
			element2.push('Graffiti ikebana');
		} else if (result3 <= 24.337) {
			element2.push('Graffiti bounty');
		} else if (result3 <= 24.712) {
			element2.push('Graffiti devilish student');
		} else if (result3 <= 25.087) {
			element2.push('Graffiti go to school');
		} else if (result3 <= 25.462) {
			element2.push("Graffiti you're done");
		} else if (result3 <= 25.837) {
			element2.push('Graffiti gymnast star');
		} else if (result3 <= 26.212) {
			element2.push('Graffiti homework');
		} else if (result3 <= 26.587) {
			element2.push("Graffiti I can't do this");
		} else if (result3 <= 26.962) {
			element2.push('Graffiti ivan portrait');
		} else if (result3 <= 27.337) {
			element2.push('Graffiti pixel iori');
		} else if (result3 <= 27.712) {
			element2.push('Graffiti winter agent');
		} else if (result3 <= 28.087) {
			element2.push("Graffiti skylark's pride");
		} else if (result3 <= 28.462) {
			element2.push('Graffiti skylark q');
		} else if (result3 <= 28.837) {
			element2.push("Graffiti ning i'm beat");
		} else if (result3 <= 29.228) {
			element2.push('Ivan emoji beat you up');
		} else if (result3 <= 29.619) {
			element2.push('Ivan emoji hopeless');
		} else if (result3 <= 30.01) {
			element2.push('Ivan emoji gym teacher');
		} else if (result3 <= 30.401) {
			element2.push('Iori emoji listening');
		} else if (result3 <= 31.183) {
			element2.push('Ning emoji make a fool of yourself');
		} else if (result3 <= 31.574) {
			element2.push('Ning emoji happy new year');
		} else if (result3 <= 31.965) {
			element2.push('Mila emoji provoke');
		} else if (result3 <= 32.356) {
			element2.push('Ivan emoji puzzled');
		} else if (result3 <= 32.747) {
			element2.push('Rom emoji you missed');
		} else if (result3 <= 33.138) {
			element2.push('Iori emoji sweet');
		} else if (result3 <= 33.529) {
			element2.push('Iori emoji hurry up');
		} else if (result3 <= 33.92) {
			element2.push('Ning emoji hotblooded student');
		} else if (result3 <= 34.311) {
			element2.push('Joanna emoji injection');
		} else if (result3 <= 34.702) {
			element2.push('Joanna emoji cheerleader');
		} else if (result3 <= 35.093) {
			element2.push('Mila emoji #1 in the world');
		} else if (result3 <= 35.484) {
			element2.push('Ning emoji celebrate');
		} else if (result3 <= 35.875) {
			element2.push('Ning emoji reading');
		} else if (result3 <= 36.266) {
			element2.push('Rom emoji famous detective');
		} else if (result3 <= 37.048) {
			element2.push('Rom emoji santa claus');
		} else if (result3 <= 37.439) {
			element2.push('Rom emoji scare someone');
		} else if (result3 <= 37.83) {
			element2.push('Rom emoji self isolation');
		} else if (result3 <= 38.221) {
			element2.push('Rom emoji snowfight');
		} else if (result3 <= 38.612) {
			element2.push('Joanna emoji thanks');
		} else if (result3 <= 38.862) {
			element2.push('Headwear Rom scary pumpkin');
		} else if (result3 <= 39.112) {
			element2.push('Headwear Ning - shiba pup');
		} else if (result3 <= 39.362) {
			element2.push('Headwear Ning cozy bearcat');
		} else if (result3 <= 39.612) {
			element2.push('Headwear Ivan brown bear');
		} else if (result3 <= 39.862) {
			element2.push('Headwear Iori - christmas hat');
		} else if (result3 <= 40.112) {
			element2.push('Headwear Ning - chick-chick');
		} else if (result3 <= 40.362) {
			element2.push('Headwear Mila - magic christmas');
		} else if (result3 <= 40.612) {
			element2.push('Set Iori Party Cat');
		} else if (result3 <= 40.912) {
			element2.push('Skateboard skin: Super gamer');
		} else if (result3 <= 41.212) {
			element2.push('Deformed car skin: Spitfire skin');
		} else if (result3 <= 41.512) {
			element2.push('Flamethrower skin: Solo blaze');
		} else if (result3 <= 41.812) {
			element2.push('Deformed car skin: Nightstalker');
		} else if (result3 <= 42.112) {
			element2.push('Skateboard skin: Mountain diso');
		} else if (result3 <= 43.112) {
			element2.push('Iori skin: Crane hime');
		} else if (result3 <= 44.112) {
			element2.push('Iori skin: Phantom viper');
		} else if (result3 <= 45.112 || results3 > 45.112) {
			element2.push('Ivan skin: Boiling point');
		}
	} else if (result <= 99.5) {
		element.push('S:');
		var result4 = Math.random() * 4.5;
		if (result4 <= 0.407) {
			element2.push('R-card bundle large');
		} else if (result4 <= 0.58) {
			element2.push('Headwear Ning: Bunny Magic');
		} else if (result4 <= 0.753) {
			element2.push('Set Joanna: Little Angel');
		} else if (result4 <= 0.926) {
			element2.push('Set Joanna: Little Devil');
		} else if (result4 <= 1.099) {
			element2.push('Headwear Joanna - Macaron');
		} else if (result4 <= 1.243) {
			element2.push('Skateboard skin: Gingerbread Shuttle');
		} else if (result4 <= 1.387) {
			element2.push('Homing Missile skin: Lion Dance');
		} else if (result4 <= 1.531) {
			element2.push('Ion Cannon skin: Blaze, S1 Premium');
		} else if (result4 <= 1.675) {
			element2.push('Doomlight skin: Christmas Patrol');
		} else if (result4 <= 1.7) {
			element2.push('Doomlight skin: Red Prism');
		} else if (result4 <= 1.725) {
			element2.push('Caramel skin: Marvelous Snowman');
		} else if (result4 <= 1.75) {
			element2.push('Caramel skin: Col. Teddy');
		} else if (result4 <= 1.775) {
			element2.push('Hotsteel skin: Molten Core');
		} else if (result4 <= 1.8) {
			element2.push('Hotsteel skin: Scorched Earth');
		} else if (result4 <= 1.825) {
			element2.push('Hotsteel skin: Magma');
		} else if (result4 <= 1.85) {
			element2.push('Firefox skin: Solar Eclipse');
		} else if (result4 <= 1.875) {
			element2.push('Firefox skin: Firepower');
		} else if (result4 <= 1.9) {
			element2.push('Firestar skin: Rock Avalanche');
		} else if (result4 <= 1.925) {
			element2.push('Gabriel skin: Midnight Feast');
		} else if (result4 <= 1.95) {
			element2.push('Gabriel skin: Horus');
		} else if (result4 <= 1.975) {
			element2.push('Andromeda skin: Singeing Arrow');
		} else if (result4 <= 2) {
			element2.push('Andromeda skin: Jade Pavo');
		} else if (result4 <= 2.025) {
			element2.push('Arthur skin: Jungle Op');
		} else if (result4 <= 2.05) {
			element2.push('Arthur skin: Desert Ark');
		} else if (result4 <= 2.075) {
			element2.push('Arthur skin: Crimson Vigil');
		} else if (result4 <= 2.1) {
			element2.push('Skylark skin: Hades Night');
		} else if (result4 <= 2.125) {
			element2.push('Skylark skin: Silent Sky');
		} else if (result4 <= 2.15) {
			element2.push('Skylark skin: Night Bat');
		} else if (result4 <= 2.175) {
			element2.push('Ivan "Iron Curtain" Brawler');
		} else if (result4 <= 2.2) {
			element2.push('Rom Whirlwind Agent');
		} else if (result4 <= 2.225) {
			element2.push('Rom Gentleman of Baker Street');
		} else if (result4 <= 2.25) {
			element2.push('Rom Dawn Sentinel');
		} else if (result4 <= 2.275) {
			element2.push('Joanna Summer Racer');
		} else if (result4 <= 2.3) {
			element2.push('Joanna Hot Dance cheerleading');
		} else if (result4 <= 2.325) {
			element2.push('Joanna Healthcare');
		} else if (result4 <= 2.35) {
			element2.push('Ning Spring Garden');
		} else if (result4 <= 2.375) {
			element2.push('Ning Blanche Manor Maid');
		} else if (result4 <= 2.4) {
			element2.push('Ning Zeal Grade');
		} else if (result4 <= 2.425) {
			element2.push('Ning St. Emily Girls\' School');
		} else if (result4 <= 2.45) {
			element2.push('Mila Little Reindeer');
		} else if (result4 <= 2.475) {
			element2.push('Iori Phoenix Rising');
		} else if (result4 <= 2.5) {
			element2.push('Iori Hazama Clan: Nightingale');
		} else if (result4 <= 3.475) {
			element2.push('Caramel Chubby Panda');
		} else if (result4 <= 4.45 || results4 > 4.45) {
			element2.push('Firestar Iron Purgatory');
		}
	} else if (result <= 100) {
		element.push('SS:');
		var result5 = Math.random() * 0.5;
		if (result5 <= 0.042) {
			element2.push('Skylark Crysting Eye Papilo');
		} else if (result5 <= 0.084) {
			element2.push('Arthur Centurion Augusta');
		} else if (result5 <= 0.126) {
			element2.push('Hotsteel Lord of Icy Abyss');
		} else if (result5 <= 0.5) {
			element2.push('Andromeda Valkyrie Hilde');
		}
	}
}

const renderResult = (element, element2) => {
	const markup = `
<p>${element} ${element2}</p>
`;
  resultView.insertAdjacentHTML('afterbegin', markup);
  historyView.insertAdjacentHTML('afterbegin', markup);
};

renderResult(element, element2);

function clearHTML() {
  resultView.innerHTML = '';
}

function displayResult() {
  element.length = 0;
  element2.length = 0;
  clearHTML();
  generateResult();
  renderResult(element, element2);
}
