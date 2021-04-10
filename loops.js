// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
const call = "Hoera!"
for (let i = 0; i < 3; i++) {
    console.log(call);
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
const yell = "loop";
const finishingYell = "klaar!";
let i = 0;
for (i = 0; i < 5; i++) {
    if (i < 4) {

        console.log(yell);
    } else

        console.log(finishingYell)

};


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================
const equal = " is even";
const odd = " is oneven";
let p = 0; //i is already declared

for (p = 0; p <= 15; p++) {
    if (p % 2 === 0) {
        console.log(p + equal);
    } else console.log(p + odd);
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================

//1e manier
let q = 0;
const oneGreaterThan = "> ";
const twoGreaterThan = ">> ";

for (q = 1; q <= 9; q++) {
        if (q >= 6) {
        console.log(twoGreaterThan + q);
    } if (q >=3 && q < 6) {
        console.log(oneGreaterThan + q);
    } if (q < 3) {
        console.log(q);
    }
}


//2e manier: for loop opgeteld
for (q = 1; q < 10; q++) {
    if (q > 3) {
        process.stdout.write(">");
    }
    if (q > 6) {
        process.stdout.write(">");
    }
    process.stdout.write("" + q + "\n");
}


//3e manier: switch met getallen
for (q = 1; q <= 9; q++) {
    switch (q) {
        case 1: case 2: case 3:
            console.log(q)
            break;
        case 4: case 5: case 6:
            console.log(oneGreaterThan + q)
            break;
        case 7: case 8: case 9:
            console.log(twoGreaterThan + q)
            break;
        default:
            console.log("out of range")
    }
}