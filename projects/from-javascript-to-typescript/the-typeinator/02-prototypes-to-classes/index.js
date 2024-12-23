// Put your Robot and Humanoid classes here! ✨
// See ./original.js for their older JavaScript code.

// A JavaScript class is not an object.
// It is a template for JavaScript objects.
// constructor is needed and auto run when object created to initialise things
// Methods specific to the class are also defined within the class
// then when the object is created you have access to those.

class Robot {
	constructor(name, abilities) {
		this.name = name;
		this.abilities = abilities;
		this.power = 100;
	}

	announce() {
		console.log(`Greetings. I am ${this.name}.`);

		for (var i = 0; i < this.abilities.length; i += 1) {
			console.log(`I am able to ${this.abilities[i]}.`);
		}
	}

	charge(amount) {
		if (this.power < 100) {
			this.power = Math.min(this.power + amount, 100);
			console.log(`Recharged power supplies to ${this.power}.`);
		}

		if (this.power === 100) {
			console.log("I am at optimal operational capacity.");
		}
	}

	move(distance) {
		if (this.power < distance) {
			console.log(`I do not have enough power to move ${distance} units.`);
		} else {
			console.log(`Moving ${distance} units.`);
			this.power -= distance;
		}
	}
}

class Humanoid extends Robot {
	constructor(name, abilities, catchphrase) {
		super(name, abilities); // this is needed if you need a custom constructor. Otherwise the default one will include super(...args)
		this.catchphrase = catchphrase;
	}

	announce() {
		super.announce();
		console.log(`> ${this.catchphrase} <`);
	}
}

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
