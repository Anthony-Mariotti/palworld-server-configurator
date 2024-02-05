import PalworldConfigItemValue from './PalworldConfigItemValue';
import { PalworldConfigType } from './PalworldConfigType';

export default class PalworldString extends PalworldConfigItemValue<string> {
  readonly max: number;

  constructor(readonly: boolean, max: number, value: string, notice?: string) {
    super(PalworldConfigType.TextInput, readonly, true, value, notice);
    this.max = max;
  }

  public set value(input: string) {
    this._value = input;
  }

  public get value(): string {
    return this._value;
  }
}
