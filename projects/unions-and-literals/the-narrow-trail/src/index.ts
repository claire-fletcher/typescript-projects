export function runCommands() {
	// Declare your variables and runtime logic here! ✨

	let availableResource: "food" | "water" | undefined;
	let food: number = 5;
	let water: number = 5;

	for (let day = 1; day <= 7; day += 1) {
		const diceRoll = Math.floor(Math.random() * 6) + 1;

		switch (diceRoll) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			default:
				// If available is set then resupply
				if (availableResource === "food") {
					food += diceRoll;
					availableResource = undefined;
				} else if (availableResource === "water") {
					water += diceRoll;
					availableResource = undefined;
				} else {
					// If nothing is set, check even or odd and set.
					availableResource = diceRoll % 2 === 0 ? "food" : "water";
				}
				break;
		}

		// Use up supplies
		food -= 1;
		water -= 1;

		// check if they are dead
		if (food || water === 0) {
			return false;
		}
	}

	return true;
}

// refactoring for functions so that the day can be done without repeats
