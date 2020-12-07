interface Product {
	doWork(): void;
}

abstract class Creator {
	abstract factoryMethod(): Product;

	public someWork(): void {
	  const p = this.factoryMethod();
	  // ...
	}
}

class ConcreteCreator1 extends Creator {
  public factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod() {
    return new ConcreteProduct2();
  }
}

class ConcreteProduct1 implements Product {
  public doWork() {
    // ...
  }
}

class ConcreteProduct2 implements Product {
  public doWork() {
    // ...
  }
}

class Application {
	private _creator: Creator;

	constructor(creator: Creator) {
	  this._creator = creator;
	}

	public run() {
	  this._creator.someWork();
	}
}

new Application(new ConcreteCreator1()).run();
