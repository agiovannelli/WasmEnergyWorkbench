/* tslint:disable */
/* eslint-disable */
/**
*/
export function bubbleSortTest(): void;
/**
*/
export function arrayAdditionTest(): void;
/**
*/
export function hashTest(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly bubbleSortTest: () => void;
  readonly arrayAdditionTest: () => void;
  readonly hashTest: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
