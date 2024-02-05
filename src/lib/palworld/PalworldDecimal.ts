import PalworldConfigItemValue from './PalworldConfigItemValue';
import { PalworldConfigType } from './PalworldConfigType';

export default class PalworldDecimal extends PalworldConfigItemValue<number> {
  readonly min: number;
  readonly max: number;
  readonly step: number;

  constructor(
    readonly: boolean,
    value: number,
    min: number,
    max: number,
    step: number,
    notice?: string
  ) {
    super(PalworldConfigType.Decimal, readonly, true, value, notice);
    this.min = min;
    this.max = max;
    this.step = step;
  }

  public set value(input: number) {
    this._value = input;
  }

  public get value(): number {
    return this._value;
  }
}
