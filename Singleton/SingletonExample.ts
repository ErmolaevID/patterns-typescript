namespace SingletonExample {
  class Database {
    private static _instance: Database;

    private constructor() {
      // singleton constructor
    }

    public static get instance() {
      if (!Database._instance) {
        Database._instance = new Database();
      }
      return Database._instance;
    }

    public query() {
      // some logic
    }
  }

  class Application {
    public run() {
      const s = Database.instance;
      s.query();
    }
  }

  const app = new Application();
  app.run();
}
