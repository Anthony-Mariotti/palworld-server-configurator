import { PalworldConfigType } from "./PalworldConfigType";


export default abstract class PalworldConfigItem {
    public readonly type: PalworldConfigType;
    public readonly readonly: boolean;
    public readonly required: boolean;
    public readonly notice?: string | null;

    constructor(type: PalworldConfigType, readonly: boolean, required: boolean, notice?: string | null) {
        this.type = type;
        this.readonly = readonly;
        this.required = required;
        this.notice = notice;
    }

}
