'use strict'
//operatoty//
/*
* mnożenie
/ dzielenie
+ dodawanie 
- odejmowanie 
% dzielenie modulo (reszta z dzielenia) 
++ inkrementacja (zwiększanie) 
-- dekrementacja (zmniejszanie)
*/

/* Operatyry Przypisania*/

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik= liczba1 % liczba2;
console.log(wynik);

var licz = 2;//licz= licz + 3;
licz += 3;
console.log(licz);

/* Operatory porównania-służy do porównania argumętów*/
/*
== równe
!= różne
=== równa wartość i taki sam typ danych
!== różne i inny typ danych
> większe od
< mniejsze od
>= większe bądź równe
od <= mniejsze bądź równe od
*/
var liczba1 = "13", liczba2 = 13;

if (liczba1 == liczba2) {
	console.log("równe")
}

/* Operatory logiczne: and, or, not*/

var liczba1 = 13, liczba2 = 5;

if ((liczba2 > 3) && (liczba2 < 10) ) {
	console.log("tak")
} 

/* Operator warunkowy skrócona wersja if*/

(2>5) ? console.log("tak") : console.log("nie");

if(7>5) {
	console.log("tak")
}else {
	console.log("nie");
}



