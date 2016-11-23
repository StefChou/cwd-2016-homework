function i2c(inch){
	var output=(inch * 2.54);
	console.log(output);
}

function c2i(cent){
	var output=(cent * 0.39);
	console.log(output)
}

function p2k(poun){
	var output=(poun * 0.45359237)
	console.log(output);
}

function k2p(kilo){
	var output=(kilo * 2.2046)
	console.log(output);
}

function m2k(mile){
	var output=(mile * 1.609344);
	console.log(output);
}

function k2m(kms){
	var output=(kms * 0.62137119);
	console.log(output);
}

function l2g(lite){
	var output=(lite * 4.54609188);
	console.log(output);
}

function g2l(galo){
	var output=(galo * 0.219969157);
	console.log(output);
}

function b2m(byte){
	var output=(byte / 2048);
	console.log(output);
}

function m2b(mega){
	var output=(mega * 2048);
	console.log(output);
}

i2c(100);
c2i(254);
p2k(100);
k2p(45);
m2k(100);
k2m(161);
l2g(100);
g2l(454);
b2m(2048);
m2b(1);
