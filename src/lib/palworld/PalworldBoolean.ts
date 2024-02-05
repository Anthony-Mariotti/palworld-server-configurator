import PalworldConfigItemValue from "./PalworldConfigItemValue";
import { PalworldConfigType } from "./PalworldConfigType";


export default class PalworldBoolean extends PalworldConfigItemValue<boolean> {
    constructor(
        readonly: boolean,
        value: boolean,
        notice?: string
    ) {
        super(PalworldConfigType.Boolean, readonly, true, value, notice);
    }

    public set value(input: boolean) {
        this._value = input;
    }

    public get value(): boolean {
        return this._value;
    }
}
