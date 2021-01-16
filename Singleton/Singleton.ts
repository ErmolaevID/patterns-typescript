namespace Singleton {
  class Singleton {
    private static _instance: Singleton;

    private constructor() {
      // singleton constructor
    }

    public static get instanse() {
      if (!Singleton._instance) {
        Singleton._instance = new Singleton();
      }
      return Singleton._instance;
    }

    public actions() {
      console.log("Some actions");
    }
  }

  class Application {
    public run() {
      const s = Singleton.instanse;
      s.actions();
    }
  }

  const app = new Application();
  app.run();
}