enum FurnitureType {
	"MODERN",
	"VICTORIAN"
}

interface FurnitureFactory {
	createChair(): Chair;
	createCoffeeTable(): CoffeeTable;
}

interface Chair {
	sit(): void;
}

interface CoffeeTable {
	useForCoffee(): void;
}

class ModernFurnitureFactory implements FurnitureFactory {
	public createChair(): Chair {
		return new ModernChair();
	}	

	public createCoffeeTable(): CoffeeTable {
		return new ModernCoffeeTable();
	}
}

class ModernChair implements Chair {
	public sit(): void {
		// ...
	}
}

class ModernCoffeeTable implements CoffeeTable {
	public useForCoffee() {
		// ...
	}
}

class VictorianFurnitureFactory implements FurnitureFactory {
	public createChair(): Chair {
		return new VictorianChair();
	}

	public createCoffeeTable(): CoffeeTable {
		return new VictorianCoffeeTable();
	}
}

class VictorianChair implements Chair {
	public sit(): void {
		// ...
	}
}

class VictorianCoffeeTable implements CoffeeTable {
	public useForCoffee() {
		// ...
	}
}

class Application {
	private _factory: FurnitureFactory;

	constructor(furtinureType: FurnitureType) {
		switch (furtinureType) {
			case FurnitureType.MODERN:
				this._factory = new ModernFurnitureFactory();
				break;
			case FurnitureType.VICTORIAN:
				this._factory = new VictorianFurnitureFactory();
				break;
			default:
				throw new Error("This factory does not exist");		
		}
	}

	public run() {
		const chair = this._factory.createChair();
		chair.sit();
		const coffeeTable = this._factory.createCoffeeTable();
		coffeeTable.useForCoffee();
	}
}

const app = new Application(FurnitureType.MODERN);
app.run();
