namespace Builder {
  interface Builder {
    buildPartA(): void;
    buildPartB(): void;
    buildPartC(): void;
  }

  class Product {
    private _parts: string[] = [];

    public addPart(part: string) {
      this._parts.push(part);
    }

    public get parts(): string[] {
      return this._parts;
    }
  }

  class ConcreteBuilder1 implements Builder {
    private _product: Product = new Product();

    public get product(): Product {
      return this._product;
    }

    public buildPartA(): void {
      this._product.addPart("A");
    }

    public buildPartB(): void {
      this._product.addPart("B");
    }

    public buildPartC(): void {
      this._product.addPart("C");
    }
  }

  class Director {
    public createProductWithOnlyAPart(b: Builder) {
      b.buildPartA();
    }

    public createProductWithAllParts(b: Builder) {
      b.buildPartA();
      b.buildPartB();
      b.buildPartC();
    }
  }

  class Application {
    public makeProduct(): Product {
      const director = new Director();
      const builder = new ConcreteBuilder1();

      director.createProductWithOnlyAPart(builder);

      return builder.product;
    }
  }

  const app = new Application();
  const product = app.makeProduct();
}