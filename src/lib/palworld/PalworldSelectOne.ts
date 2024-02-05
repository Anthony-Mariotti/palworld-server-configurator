import PalworldConfigItemValue from "./PalworldConfigItemValue";
import { PalworldConfigType } from "./PalworldConfigType";
import type { PalworldSelectOption } from "./PalworldSelectOption";


export default class PalworldSelectOne extends PalworldConfigItemValue<PalworldSelectOption> {
    readonly options: Array<PalworldSelectOption>;

    constructor(
        readonly: boolean,
        value: PalworldSelectOption,
        options: Array<PalworldSelectOption>,
        notice?: string | null) {
        super(PalworldConfigType.SelectOne, readonly, true, value, notice);
        this.options = options;
    }

    public set value(selected: PalworldSelectOption) {
        this._value = selected;
    }

    public get value() {
        return this._value;
    }
}
