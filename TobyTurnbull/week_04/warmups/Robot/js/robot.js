var robot = Robot.create();
robot.name;
robot.reset();

var Robot = {
	
	generateCharacters: function (length) {
		var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		var characters = " ";
		
		for (var i = Things.length - 1; i >= 0; i--) {
			Things[i]
		};
		var randomNumber = Math.floor( Math.random() * 26 );

		console.log( charset[randomNumber] );
	},


	generateNumbers: function () {},

	create: function () {},
};