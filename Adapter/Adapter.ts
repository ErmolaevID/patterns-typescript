namespace Adapter {
  class RoundHole {
    private readonly _radius: number;

    constructor(radius: number) {
      this._radius = radius;
    }

    public get radius() {
      return this._radius;
    }

    public fits(peg: RoundPeg) {
      return this.radius >= peg.radius;
    }
  }

  class RoundPeg {
    private readonly _radius: number;

    constructor(radius: number) {
      this._radius = radius;
    }

    public get radius() {
      return this._radius;
    }
  }

  class SquarePeg {
    private readonly _side: number;

    constructor(side: number) {
      this._side = side;
    }
    public get side() {
      return this._side;
    }
  }

  class SquarePegAdapter extends RoundPeg {
    private readonly _peg: SquarePeg;

    constructor(peg: SquarePeg) {
      super(peg.side);
      this._peg = peg;
    }

    public get radius() {
      return this._peg.side * Math.sqrt(2) / 2;
    }
  }

  class Application {
    public run() {
      const hole = new RoundHole(10);
      const rpeg = new RoundPeg(5);
      const sreg = new SquarePegAdapter(new SquarePeg(6));

      hole.fits(sreg);
    }
  }

  const app = new Application();
  app.run();
}
