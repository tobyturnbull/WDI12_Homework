// var mercury = 0.2408467
// var venus = 0.61519726
// var mars = 1.8808158
// var jupiter = 11.862615
// var saturn = 29.447498
// var uranus = 84.016846
// var neptune = 164.79132

// var calcAge = function (age, planet) {
// 	var x = (31536000 * age)
// 		return
// 	var y = (x * planet)
// 		return
// }
// console.log (calcAge(33,mars))

var SpaceAge = {
	ageOnEarth: function ( seconds ) {
		console.log( seconds );
		return seconds / 31557600
	}
}

ageOnOtherPlanet: function ( seconds, planetName ) {
	var yearsOnEarth = this.ageOnEarth( seconds );
	console.log( yearsOnEarth );

	var yearRatio = SpaceAge.orbitalPeriods[ planetName ];
	console.log ( yearRatio );

	var ageOnPlanet = yearsOnEarth / yearRatio;
	return ageOnPlanet;
	}
}