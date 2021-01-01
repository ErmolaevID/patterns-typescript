namespace BuilderExample {
  enum Engines {
    "v8",
    "v10",
    "v12"
  }

  interface Builder {
    setSeats(value: number): void;
    setEngine(value: Engines): void;
    setGPS(): void;
  }

  class Car {
    private _seats = 0;
    private _engine = Engines.v8;
    private _haveGPS = false;

    public get seats(): number {
      return this._seats;
    }

    public set seats(value: number) {
      this._seats = value;
    }

    public get engine(): Engines {
      return this._engine;
    }

    public set engine(value: Engines) {
      this._engine = value;
    }

    public get haveGPS(): boolean {
      return this._haveGPS;
    }

    public set haveGPS(value: boolean) {
      this._haveGPS = value;
    }
  }

  class CarBuilder implements Builder {
    private _car: Car = new Car();

    public get result(): Car {
      return this._car;
    }

    public setSeats(value: number): void {
      if (value <= 0) {
        throw new Error("Argument is invalid");
      }
      this._car.seats = value;
    }

    public setEngine(value: Engines): void {
      this._car.engine = value;
    }

    public setGPS(): void {
      this._car.haveGPS = true;
    }
  }

  class Manual {
    private _configuration: string[] = [];

    public addParameterToConfiguration(parameter: string): void {
      this._configuration.push(parameter);
    }
    
    public get configuration(): string[] {
      return this._configuration;
    }
  }

  class CarManualBuilder implements Builder {
    private _manual: Manual = new Manual();

    public get manual(): string[] {
      return this._manual.configuration;
    }

    public setSeats(value: number): void {
      this._manual.addParameterToConfiguration(`Seats: ${value}`);
    }

    public setEngine(value: Engines): void {
      this._manual.addParameterToConfiguration(`Engine: ${value}`);
    }

    public setGPS(): void {
      this._manual.addParameterToConfiguration("GPS");
    }
  }
  
  class Director {
    public constructSportsCar(builder: Builder) {
      builder.setSeats(2);
      builder.setEngine(Engines.v12);
    }
    
    public constructSedanCar(builder: Builder) {
      builder.setSeats(4);
      builder.setEngine(Engines.v8);
      builder.setGPS();
    }
  }
  
  class Application {
    public makeCar() {
      const director = new Director();
      const carBuilder = new CarBuilder();
      const manualBuilder = new CarManualBuilder();

      director.constructSportsCar(carBuilder);
      const car = carBuilder.result;

      director.constructSportsCar(manualBuilder);
      const manual = manualBuilder.manual;
    }
  }

  const app = new Application();
  app.makeCar();
}