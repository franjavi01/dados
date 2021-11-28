let array1 = [`<img src="./assets/dado1.png">`,`<img src="./assets/dado2.png">`,`<img src="./assets/dado3.png">`,`<img src="./assets/dado4.png">`,`<img src="./assets/dado5.png">`,`<img src="./assets/dado6.png">`];

let randomItem1 = array1[Math.floor(Math.random()*array1.length)];

let array2 = [`<img src="./assets/dado1.png">`,`<img src="./assets/dado2.png">`,`<img src="./assets/dado3.png">`,`<img src="./assets/dado4.png">`,`<img src="./assets/dado5.png">`,`<img src="./assets/dado6.png">`];

let randomItem2 = array2[Math.floor(Math.random()*array2.length)];

let dosdados = document.getElementById("dos-dados");
dosdados.innerHTML = randomItem1 + "   " + randomItem2


