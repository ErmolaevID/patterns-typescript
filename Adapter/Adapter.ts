namespace Adapter {
  class Target {
    public work() {
      return "Work";
    }
  }

  class Adaptee {
    public differentWork() {
      return "Different work";
    }
  }

  class Adapter extends Target {
    private _adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
      super();
      this._adaptee = adaptee;
    }

    public work() {
      const adapteeWork = this._adaptee.differentWork();
      return `${adapteeWork} but I can work with it via Adapter`;
    }
  }

  class Application {
    public run() {
      const target = new Target();
      target.work();
      const adaptee = new Adaptee();
      const adapteeViaAdapter = new Adapter(adaptee);
      adapteeViaAdapter.work();
    }
  }
}
