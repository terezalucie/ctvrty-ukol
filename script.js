// Největší ze tří čísel


// POSTUP 1:

/* const nadpis = document.querySelector("h1")

const max3 = (number1, number2, number3) => {

    if(number1 > number2 && number1 > number3){
    } else if(number2 > number1 && number2 > number3){
        return number2
    } else if(number3 > number1 && number3 > number2){
        return number3
    } else if((number1 === number2) && (number1, number2) > number3){
        return number1
    } else if((number1 === number3) && (number1, number3) > number2){
        return number1
    } else if((number2 === number3) && (number2, number3) > number1){
        return number2
    } else {
        return number1
    }
}
const porovnaniCisel = max3(cislo1, cislo2, cislo3)
nadpis.innerHTML = `Největší číslo je ${porovnaniCisel} ` 

 */



// POSTUP 2:

const nadpis = document.querySelector("h1")

const max3ANO = (number1, number2, number3) => {
    if(number1 > number2 && number1 > number3){
        return nadpis.textContent = `Největší číslo je ${number1}.`
    } else if(number2 > number1 && number2 > number3){
        return nadpis.textContent =  `Největší číslo je ${number2}.`
    } else if(number3 > number1 && number3 > number2){
        return nadpis.textContent =  `Největší číslo je ${number3}.`
    } else if((number1 === number2) && (number1, number2) > number3){
        return  nadpis.textContent = `Čísla (${number1}, ${number2}) si jsou rovna.`
    } else if((number1 === number3) && (number1, number3) > number2){
        return nadpis.textContent = `Čísla (${number1}, ${number3}) si jsou rovna.`
    } else if((number2 === number3) && (number2, number3) > number1){
        return nadpis.textContent = `Čísla (${number2}, ${number3}) si jsou rovna.`
    } else {
        return nadpis.textContent = `Čísla (${number1}, ${number2}, ${number3}) si jsou rovna.`
    }
}

const max3NE = (number1, number2, number3) => {
    if(number1 > number2 && number1 > number3){
        return number1
    } else if(number2 > number1 && number2 > number3){
        return number2
    } else if(number3 > number1 && number3 > number2){
        return number3
    } else if((number1 === number2) && (number1, number2) > number3){
        return number1
    } else if((number1 === number3) && (number1, number3) > number2){
        return number1
    } else if((number2 === number3) && (number2, number3) > number1){
        return number2
    } else {
        return number1
    }
}

const cislo1 = Number(prompt("Zadejte první číslo pro porovnání:").trim())
const cislo2 = Number(prompt("Zadejte druhé číslo pro porovnání:").trim())
const cislo3 = Number(prompt("Zadejte třetí číslo pro porovnání:").trim())
const otazka = prompt("Přejete si upozornit na shodu v porovnávaných číslech?", "ano / ne").trim()

if(otazka === "ano"){
    document.innerHTML = max3ANO(cislo1, cislo2, cislo3)
} else if(otazka === "ne"){
    const porovnaniCisel = max3NE(cislo1, cislo2, cislo3)
    nadpis.innerHTML = `Největší číslo je ${porovnaniCisel}.`
} else {
    nadpis.innerHTML = `Chyba! Zkuste to znova.`
}


/* ŘEŠENÍ:

1. Nejprve jsem vytvořila funkci se třemi vstupními údaji. (number1, number2, number3)
2. Do podmínek jsem musela vypsat všechny možnosti toho, kdy se vstupní čísla rovnají/nerovnají anebo jsou větší/menší.
3. Do return jsem použila element h1 a změnila mu text, podle dané podmínky.
4. Vytvořila jsem prompty, které jsou vstupy pro funkci.
5. Zavolala jsem funkci a vložila jí do stránky.

Potom jsem se funkci rozhodla zjednodušit a vznikly mi dvě funkce, které jsme se rozhodla propojit do POSTUPU 2. Návštěvník stránky se tak může rozhodnout, jestli chce využít podmínku navíc.

 */