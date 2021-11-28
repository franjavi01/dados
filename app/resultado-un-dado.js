let array1 = [`<img src="./assets/dado1.png">`,`<img src="./assets/dado2.png">`,`<img src="./assets/dado3.png">`,`<img src="./assets/dado4.png">`,`<img src="./assets/dado5.png">`,`<img src="./assets/dado6.png">`];

let randomItem1 = array1[Math.floor(Math.random()*array1.length)];

let undado = document.getElementById("un-dado");
undado.innerHTML = randomItem1