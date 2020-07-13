import { IDisposable } from './idisposable';
import { logger, fmtErr } from './logging/winston';

/**
 * Uses the given resource and calls the .dispose()
 * method on the resource after the routine is complete.
 *
 * @param resource The IDisposable resource.
 * @param routine The handler that uses the resource.
 */
export async function using<TIn extends IDisposable, TOut>(
  resource: TIn,
  routine: (resource: TIn) => Promise<TOut>,
): Promise<[TOut, Error]> {
  try {
    const out = await routine(resource);
    await resource.dispose();

    return [out, null];
  } catch (e) {
    logger.error(fmtErr(e));

    try {
      await resource.dispose();

      return [void 0, e];
    } catch (e) {
      logger.error(fmtErr(e));

      return [void 0, e];
    }
  }
}
