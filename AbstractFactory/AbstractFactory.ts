namespace AbstractFactory {
  interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
  }

  interface ProductA {
    doWork(): void;
  }

  interface ProductB {
    doAnotherWork(): void;
  }

  class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): ProductA {
      return new ConcreteProductA1();
    }

    public createProductB(): ProductB {
      return new ConcreteProductB1();
    }
  }

  class ConcreteProductA1 implements ProductA {
    public doWork() {
      // ...
    }
  }

  class ConcreteProductB1 implements ProductB {
    public doAnotherWork() {
      // ...
    }
  }

  class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): ProductA {
      return new ConcreteProductA2();
    }

    createProductB(): ProductB {
      return new ConcreteProductB2();
    }
  }

  class ConcreteProductA2 implements ProductA {
    public doWork() {
      // ...
    }
  }

  class ConcreteProductB2 implements ProductB {
    public doAnotherWork() {
      // ...
    }
  }

  class Application {
    private _factory: AbstractFactory;

    constructor(config: number) {
      switch (config) {
        case 1:
          this._factory = new ConcreteFactory1();
          break;
        case 2:
          this._factory = new ConcreteFactory2();
          break;
        default:
          throw new Error("This factory does not exist");
      }
    }

    public run() {
      const a = this._factory.createProductA();
      a.doWork();
      const b = this._factory.createProductB();
      b.doAnotherWork();
    }
  }

  const app = new Application(2);
  app.run();
}