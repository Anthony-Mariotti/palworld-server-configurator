import PalworldConfigItemValue from './PalworldConfigItemValue';
import { PalworldConfigType } from './PalworldConfigType';

export default class PalworldInteger extends PalworldConfigItemValue<number> {
  readonly min: number;
  readonly max: number;

  constructor(readonly: boolean, min: number, max: number, value: number, notice?: string) {
    super(PalworldConfigType.Number, readonly, true, value, notice);
    this.min = min;
    this.max = max;
  }

  public set value(input: number) {
    if (this.readonly) return;
    if (input < this.min) return;
    if (input > this.max) return;
    this._value = input;
  }

  public get value(): number {
    return this._value;
  }
}
