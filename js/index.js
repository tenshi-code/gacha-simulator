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
});

/*const bg = function async () => {
    var slidingTagLiAfterStyle = document.createElement("style");
    setTimeout(() => {
slidingTagLiAfterStyle.innerHTML =
 `.container::after {
    animation: bg 2s linear;
  }`;
document.head.appendChild(slidingTagLiAfterStyle);
setTimeout(() => {
slidingTagLiAfterStyle.innerHTML =
`.container::after {
opacity 0;
}`;
document.head.appendChild(slidingTagLiAfterStyle);
}, 2000)}, 2000)
}

bg();*/

/*const bg = () => {
    const tagBeforeAfter = document.createElement("style");
    setInterval(() => {
        setTimeout(() => {
            tagBeforeAfter.innerHTML =
             `.container::after {
                animation: bg-inverse 3s linear;
                z-index: 1;
              }`;
            document.head.appendChild(tagBeforeAfter);
    }, 10000);
        setTimeout(() => {
            tagBeforeAfter.innerHTML =
            `.container::after {
            opacity: 1;
            z-index: 1;
          }`;
        document.head.appendChild(tagBeforeAfter);
    }, 12999);
    
    setTimeout(() => {
        tagBeforeAfter.innerHTML =
        `.container::after {
            animation: bg 3s linear;
            z-index: 1;
          }
          
          .container::before {
              animation: bg-inverse 3s linear;
              z-index: 1;
          }`;
    document.head.appendChild(tagBeforeAfter);
    }, 22999);
    
    setTimeout(() => {
        tagBeforeAfter.innerHTML =
        `.container::after {
            opacity: 0;
          }
          
          .container::before {
              animation: bg-inverse 3s linear;
              z-index: 1;
          }`;
    document.head.appendChild(tagBeforeAfter);
    }, 25998);
    
    setTimeout(() => {
        tagBeforeAfter.innerHTML =
        `  .container::before {
              animation: bg 3s linear;
              z-index: 1;
          }`;
    document.head.appendChild(tagBeforeAfter);
    }, 35998);
    
    setTimeout(() => {
        tagBeforeAfter.innerHTML =
        `  .container::before {
            opacity: 0;
              z-index: -1;
          }`;
    document.head.appendChild(tagBeforeAfter);
    }, 38997);
    }, 1);
};

bg();*/

/*const bg = () => {
	const tagBeforeAfter = document.createElement('style');
	setInterval(() => {
		setTimeout(() => {
			tagBeforeAfter.innerHTML = `.container::after {
                animation: bg-inverse 3s linear;
                z-index: 1;
              }`;
			document.head.appendChild(tagBeforeAfter);

			setTimeout(() => {
				tagBeforeAfter.innerHTML = `.container::after {
                opacity: 1;
                z-index: 1;
              }`;
				document.head.appendChild(tagBeforeAfter);

				setTimeout(() => {
					tagBeforeAfter.innerHTML = `.container::after {
                    animation: bg 3s linear;
                    z-index: 1;
                  }
                  
                  .container::before {
                      animation: bg-inverse 3s linear;
                      z-index: 1;
                  }`;
					document.head.appendChild(tagBeforeAfter);

					setTimeout(() => {
						tagBeforeAfter.innerHTML = `.container::after {
                    opacity: 0;
                  }
                  
                  .container::before {
                      animation: bg-inverse 3s linear;
                      z-index: 1;
                  }`;
						document.head.appendChild(tagBeforeAfter);

						setTimeout(() => {
							tagBeforeAfter.innerHTML = `  .container::before {
                      animation: bg 3s linear;
                      z-index: 1;
                  }`;
							document.head.appendChild(tagBeforeAfter);

							setTimeout(() => {
								tagBeforeAfter.innerHTML = `  .container::before {
                    opacity: 0;
                      z-index: -1;
                  }`;
								document.head.appendChild(tagBeforeAfter);
							}, 2999);
						}, 10000);
					}, 2999);
				}, 10000);
			}, 2999);
		}, 1);
	}, 29000);
};

bg();*/

/*var bg = timer => {
    const tagBeforeAfter = document.createElement('style');

	setInterval(() => {
		setTimeout(() => {
			tagBeforeAfter.innerHTML = `.container::after {
                animation: bg-inverse 3s linear;
                z-index: 1;
              }`;
			document.head.appendChild(tagBeforeAfter);

			setTimeout(() => {
				tagBeforeAfter.innerHTML = `.container::after {
                opacity: 1;
                z-index: 1;
              }`;
				document.head.appendChild(tagBeforeAfter);

				setTimeout(() => {
					tagBeforeAfter.innerHTML = `.container::after {
                    animation: bg 3s linear;
                    z-index: 1;
                  }
                  
                  .container::before {
                      animation: bg-inverse 3s linear;
                      z-index: 1;
                  }`;
					document.head.appendChild(tagBeforeAfter);

					setTimeout(() => {
						tagBeforeAfter.innerHTML = `.container::after {
                    opacity: 0;
                  }
                  
                  .container::before {
                      animation: bg-inverse 3s linear;
                      z-index: 1;
                  }`;
						document.head.appendChild(tagBeforeAfter);

						setTimeout(() => {
							tagBeforeAfter.innerHTML = `  .container::before {
                      animation: bg 3s linear;
                      z-index: 1;
                  }`;
							document.head.appendChild(tagBeforeAfter);

							setTimeout(() => {
								tagBeforeAfter.innerHTML = `  .container::before {
                    opacity: 0;
                      z-index: -1;
                  }`;
                                document.head.appendChild(tagBeforeAfter);
							}, 3000);
						}, 10000);
					}, 3000);
				}, 10000);
			}, 3000);
        }, 1);
    }, timer);
};

let timer = time => {
    if (time == true) {
        bg(1);
    } else if (time == false) {
        bg(39000);
    }
}

timer(true);

timer(false);*/

/*var bg = () => {
    setInterval(timer, 1);
}

var timer = () => {
    const tagBeforeAfter = document.createElement('style');
    setTimeout(() => {
        tagBeforeAfter.innerHTML = `.container::after {
            animation: bg-inverse 3s linear;
            z-index: 1;
          }`;
        document.head.appendChild(tagBeforeAfter);

        setTimeout(() => {
            tagBeforeAfter.innerHTML = `.container::after {
            opacity: 1;
            z-index: 1;
          }`;
            document.head.appendChild(tagBeforeAfter);

            setTimeout(() => {
                tagBeforeAfter.innerHTML = `.container::after {
                animation: bg 3s linear;
                z-index: 1;
              }
              
              .container::before {
                  animation: bg-inverse 3s linear;
                  z-index: 1;
              }`;
                document.head.appendChild(tagBeforeAfter);

                setTimeout(() => {
                    tagBeforeAfter.innerHTML = `.container::after {
                opacity: 0;
              }
              
              .container::before {
                  animation: bg-inverse 3s linear;
                  z-index: 1;
              }`;
                    document.head.appendChild(tagBeforeAfter);

                    setTimeout(() => {
                        tagBeforeAfter.innerHTML = `  .container::before {
                  animation: bg 3s linear;
                  z-index: 1;
              }`;
                        document.head.appendChild(tagBeforeAfter);

                        setTimeout(() => {
                            tagBeforeAfter.innerHTML = `  .container::before {
                opacity: 0;
                  z-index: -1;
              }`;
                            document.head.appendChild(tagBeforeAfter);
                        }, 3000);
                    }, 10000);
                }, 3000);
            }, 10000);
        }, 3000);
    }, 1);
}

bg();

function myStopFunction() {
    clearInterval(bg);
  }

  myStopFunction();*/

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
    setInterval(myTimer, 39000);
}

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// QUICKLY IMPLEMENT THE RESULTS FOR TESTING

var element = [];
var element2 = [];

var resultView = document.querySelector('.results');

var result = (Math.random() + 0.01) * 100;
if (result <= 49.67) {
  element.push('B:');
  var result2 = (Math.random() + 0.01) * 49.67;
  console.log(result2);
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
  //console.log('B:');
} else if (result <= 95) {
  element.push('A:');
  var result3 = (Math.random() + 0.01) * 45.33;
  console.log(result3);
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
    element2.push('Graffiti you\'re done');
  } else if (result3 <= 25.837) {
    element2.push('Graffiti gymnast star');
  } else if (result3 <= 26.212) {
    element2.push('Graffiti homework');
  } else if (result3 <= 26.587) {
    element2.push('Graffiti I can\'t do this');
  } else if (result3 <= 26.962) {
    element2.push('Graffiti ivan portrait');
  } else if (result3 <= 27.337) {
    element2.push('Graffiti pixel iori');
  } else if (result3 <= 27.712) {
    element2.push('Graffiti winter agent');
  } else if (result3 <= 28.087) {
    element2.push('Graffiti skylark\'s pride');
  } else if (result3 <= 28.462) {
    element2.push('Graffiti skylark q');
  } else if (result3 <= 28.837) {
    element2.push('Graffiti ning i\'m beat');
  } else if (result3 <= 29.228) {
    element2.push('Graffiti beat you up');
  } else if (result3 <= 29.619) {
    element2.push('Graffiti hopeless');
  } else if (result3 <= 30.01) {
    element2.push('Graffiti gym teacher');
  } else if (result3 <= 30.401) {
    element2.push('Graffiti listening');
  } else if (result3 <= 31.183) {
    element2.push('Graffiti make a fool of yourself');
  } else if (result3 <= 31.574) {
    element2.push('Graffiti ning happy new year');
  } else if (result3 <= 31.965) {
    element2.push('Graffiti provoke');
  } else if (result3 <= 32.356) {
    element2.push('Graffiti puzzled');
  } else if (result3 <= 32.747) {
    element2.push('Graffiti rom you missed');
  } else if (result3 <= 33.138) {
    element2.push('Graffiti sweet');
  } else if (result3 <= 33.529) {
    element2.push('Graffiti hurry up');
  } else if (result3 <= 33.92) {
    element2.push('Graffiti hotblooded student');
  } else if (result3 <= 34.311) {
    element2.push('Graffiti injection');
  } else if (result3 <= 34.702) {
    element2.push('Graffiti cheerleader');
  } else if (result3 <= 35.093) {
    element2.push('Graffiti mila #1 in the world');
  } else if (result3 <= 35.484) {
    element2.push('Graffiti ning celebrate');
  } else if (result3 <= 35.875) {
    element2.push('Graffiti reading');
  } else if (result3 <= 36.266) {
    element2.push('Graffiti famous detective');
  } else if (result3 <= 37.048) {
    element2.push('Graffiti santa claus');
  } else if (result3 <= 37.439) {
    element2.push('Graffiti scare someone');
  } else if (result3 <= 37.83) {
    element2.push('Graffiti self isolation');
  } else if (result3 <= 38.221) {
    element2.push('Graffiti snowfight');
  } else if (result3 <= 38.612) {
    element2.push('Graffiti thanks');
  } else if (result3 <= 39.003) {
    element2.push('Graffiti self isolation');
  } else if (result3 <= 39.394) {
    element2.push('rom scary pumpkin');
  } else if (result3 <= 39.785) {
    element2.push('ning shiba pup');
  } else if (result3 <= 40.035) {
    element2.push('ning cozy bearcat');
  } else if (result3 <= 40.285) {
    element2.push('ivan brown bear');
  } else if (result3 <= 40.535) {
    element2.push('iori christmas hat');
  } else if (result3 <= 40.785) {
    element2.push('headwear ning chick chick');
  } else if (result3 <= 41.035) {
    element2.push('headwear mila magic christmas');
  } else if (result3 <= 41.285) {
    element2.push('iori cat set');
  } else if (result3 <= 41.585) {
    element2.push('super gamer skin');
  } else if (result3 <= 41.885) {
    element2.push('spitfire skin');
  } else if (result3 <= 42.185) {
    element2.push('solo blaze skin');
  } else if (result3 <= 42.485) {
    element2.push('nightstalker skin');
  } else if (result3 <= 42.785) {
    element2.push('mointain diso skin');
  } else if (result3 <= 43.785) {
    element2.push('iori crane hime skin');
  } else if (result3 <= 44.785) {
    element2.push('iori phantom viper skin');
  } else if (result3 <= 45.785) {
    element2.push('ivan skin');
  }
  //console.log('A:');
} else if (result <= 99.5) {
  element.push('S:');
  var result4 = (Math.random() + 0.01) * 4.5;
  console.log(result4);
  if (result4 <= 0.407) {
    element2.push('R-card bundle large');
  } else if (result4 <= 0.58) {
    element2.push('Hat');
  } else if (result4 <= 0.753) {
    element2.push('Angel Wings');
  } else if (result4 <= 0.926) {
    element2.push('Devil wings');
  } else if (result4 <= 1.099) {
    element2.push('Hat');
  } else if (result4 <= 1.243) {
    element2.push('Some weapon skin');
  } else if (result4 <= 1.387) {
    element2.push('Some weapon skin');
  } else if (result4 <= 1.531) {
    element2.push('Some weapon skin');
  } else if (result4 <= 1.675) {
    element2.push('Some weapon skin');
  } else if (result4 <= 1.7) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.725) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.750) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.775) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.8) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.825) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.850) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.875) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.9) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.925) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.950) {
    element2.push('Some mecha skin');
  } else if (result4 <= 1.975) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.025) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.075) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.1) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.125) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.15) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.175) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.2) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.225) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.25) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.275) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.325) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.35) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.375) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.4) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.425) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.45) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.475) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.5) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.525) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.55) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.575) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.6) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.625) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.65) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.675) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.7) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.725) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.75) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.775) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.8) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.825) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.85) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.875) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.9) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.925) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.95) {
    element2.push('Some mecha skin');
  } else if (result4 <= 2.975) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.025) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.075) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.1) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.125) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.15) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.175) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.2) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.225) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.25) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.275) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.325) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.45) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.475) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.5) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.525) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.55) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.575) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.6) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.625) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.65) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.025) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.075) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.1) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.125) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.15) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.175) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.2) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.225) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.25) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.275) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.325) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.45) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.475) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.5) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.525) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.55) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.575) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.6) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.625) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.65) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.025) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.075) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.1) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.125) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.15) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.175) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.2) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.225) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.25) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.275) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.3) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.325) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.45) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.475) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.5) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.525) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.55) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.575) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.6) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.625) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.65) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.675) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.7) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.725) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.75) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.775) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.8) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.825) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.85) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.875) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.9) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.825) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.85) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.875) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.9) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.925) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.95) {
    element2.push('Some mecha skin');
  } else if (result4 <= 3.975) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.025) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.05) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.075) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.1) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.125) {
    element2.push('Some mecha skin');
  } else if (result4 <= 4.15) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.175) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.2) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.225) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.25) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.275) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.3) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.325) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.35) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.375) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.4) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.425) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.45) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.475) {
    element2.push('Some pilot skin');
  } else if (result4 <= 4.5) {
    element2.push('Some pilot skin');
  }
  //console.log('S:');
} else if (result <= 100) {
  element.push('SS:');
  var result5 = (Math.random() + 0.01) * 0.5;
  console.log(result5);
  if (result5 <= 0.374) {
    element2.push('Andromeda skin');
  } else if (result5 <= 0.416) {
    element2.push('Skylark skin');
  } else if (result5 <= 0.458) {
    element2.push('Arthur skin');
  } else if (result5 <= 0.5) {
    element2.push('Hotsteel skin');
  }
  //console.log('SS:');
}
//console.log(result);

const renderResult = (element, element2) => {
const markup = `
<p>${element} ${element2}</p>
`;
resultView.insertAdjacentHTML('afterbegin', markup);
};

renderResult(element, element2);

// function displayResult() {
//   renderResult(element, element2);
// }
