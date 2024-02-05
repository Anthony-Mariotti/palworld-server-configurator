import PalworldConfigItemValue from "./PalworldConfigItemValue";
import { PalworldConfigType } from "./PalworldConfigType";


export default class PalworldPort extends PalworldConfigItemValue<number> {
    readonly min: number;
    readonly max: number;

    constructor(readonly: boolean, value: number, notice?: string) {
        super(PalworldConfigType.Port, readonly, true, value, notice);
        this.min = 1;
        this.max = 65535;
    }

    public set value(input: number) {
        this._value = input;
    }

    public get value(): number {
        return this._value;
    }
}
