import PalworldConfigItem from './PalworldConfigItem';
import { PalworldConfigType } from './PalworldConfigType';

export default abstract class PalworldConfigItemValue<T> extends PalworldConfigItem {
  protected _value: T;
  public default: T;

  constructor(
    type: PalworldConfigType,
    readonly: boolean,
    required: boolean,
    value: T,
    notice?: string | null
  ) {
    super(type, readonly, required, notice);
    this._value = value;
    this.default = value;
  }

  abstract get value(): T;
  abstract set value(input: T);
}
