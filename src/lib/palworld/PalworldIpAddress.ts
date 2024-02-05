import PalworldConfigItemValue from './PalworldConfigItemValue';
import { PalworldConfigType } from './PalworldConfigType';

export default class PalworldIpAddress extends PalworldConfigItemValue<string> {
  constructor(readonly: boolean, value?: string | null, notice?: string) {
    super(PalworldConfigType.IpAddress, readonly, false, value ?? '', notice);
  }

  public set value(input: string) {
    this._value = input;
  }

  public get value(): string {
    return this._value;
  }
}
