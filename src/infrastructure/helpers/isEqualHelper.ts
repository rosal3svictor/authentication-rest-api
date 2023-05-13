import { isEqual as isEqualLodash } from 'lodash';

export function isEqualHelper(valueOne: string[], valueTwo: string[]): boolean {
  return isEqualLodash(valueOne, valueTwo);
}
