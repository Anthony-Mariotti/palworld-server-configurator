import PalworldConfigItemValue from './PalworldConfigItemValue';
import { PalworldConfigType } from './PalworldConfigType';

export default class PalworldUrl extends PalworldConfigItemValue<string> {
  readonly max: number;

  constructor(readonly: boolean, value: string, notice?: string) {
    super(PalworldConfigType.Url, readonly, false, value, notice);
    this.max = Number.MAX_SAFE_INTEGER;
  }

  public set value(input: string) {
    this._value = input;
  }

  public get value(): string {
    return this._value;
  }
}
