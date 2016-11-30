function vozilo (cigari, cena, vozilo){
	var cena_na_den = cigari / 20 * (cena / 61.5);
	console.log(cena_na_den);
	var denovi = vozilo / cena_na_den;
	console.log("vkupno denovi " + denovi);
	var godini = parseInt(denovi / 365);
	console.log(godini);
	var meseci = parseInt((denovi - godini * 365) / 12);
	console.log(meseci);
	var ostatok = denovi - (godini * 365) - (meseci * 12);
	console.log(ostatok);
}

var cigari = 15;
var cena = 125;
var dacia = 11000;
var skoda = 14000;
var vw = 20000;
var audi = 30000;
var bmw = 50000;
vozilo(cigari, cena, dacia);
vozilo(cigari, cena, skoda);
vozilo(cigari, cena, vw);
vozilo(cigari, cena, audi);
vozilo(cigari, cena, bmw);
