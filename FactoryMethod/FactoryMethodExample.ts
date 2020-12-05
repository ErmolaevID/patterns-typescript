enum OSList {
  "MacOS",
  "Linux",
  "Windows"
}

interface Button {
  render(): void;
  onClick(): void;
}

class WindowsButton implements Button {
  public render() {
    // ...
  }

  public onClick() {
    // ...
  }
}

class MacOSButton implements Button {
  public render() {
    // ...
  }

  public onClick() {
    // ...
  }
}

class LinuxButton implements Button {
  public render() {
    // ...
  }

  public onClick() {
    // ...
  }
}

abstract class Dialog {
  public render() {
    const btn = this.createButton();
    btn.onClick();
    btn.render();
  }

  abstract createButton(): Button;
}

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}

class MacOSDialog extends Dialog {
  public createButton(): Button {
    return new MacOSButton();
  }
}

class LinuxDialog extends Dialog {
  public createButton(): Button {
    return new LinuxButton();
  }
}

class App {
  private _dialog: Dialog;

  constructor(config: OSList) {
    switch (config) {
      case OSList.MacOS:
        this._dialog = new MacOSDialog();
        break;
      case OSList.Linux:
        this._dialog = new LinuxDialog();
        break;
      case OSList.Windows:
        this._dialog = new WindowsDialog();
        break;
      default:
        throw new Error("This operating system is not supported");
    }
  }

  public Run() {
    this._dialog.render();
    this._dialog.createButton();
  }
}

const app = new App(OSList.MacOS);
app.Run();

