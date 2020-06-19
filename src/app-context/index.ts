import * as path from 'path';

export class AppContext {
  constructor(appName: string) {
    if (!appName) throw new Error(`Argument 'appName' must have a value.`);

    this._appName = appName;
  }

  private _appName: string;

  public get baseDir(): string {
    const appRootContext = path.join(this._appName, 'bin');
    let finalPath = __dirname.replace(/\/covfefe-common.*/i, '');

    if (!finalPath.includes(appRootContext)) {
      finalPath = path.join(finalPath, appRootContext);
    }

    return finalPath;
  }
}
