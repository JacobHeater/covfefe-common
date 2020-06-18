export class AppContext {
  constructor(appName: string) {
    if (!appName) throw new Error(`Argument 'appName' must have a value.`);

    this._appName = appName;
  }

  private _appName: string;

  public get baseDir(): string {
    return `${__dirname.replace(/\/covfefe-common.*/i, '')}/${this._appName}/bin`;
  }
}
