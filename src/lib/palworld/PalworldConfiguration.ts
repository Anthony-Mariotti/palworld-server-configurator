import PalworldBoolean from "./PalworldBoolean";
import PalworldConfigItem from "./PalworldConfigItem";
import PalworldConfigItemValue from "./PalworldConfigItemValue";
import PalworldDecimal from "./PalworldDecimal";
import PalworldInteger from "./PalworldInteger";
import PalworldIpAddress from "./PalworldIpAddress";
import PalworldOptionalString from "./PalworldOptionalString";
import PalworldPort from "./PalworldPort";
import PalworldSelectOne from "./PalworldSelectOne";
import PalworldString from "./PalworldString";
import PalworldUrl from "./PalworldUrl";
import { PalworldConfigType } from "./PalworldConfigType";
import type { PalworldSelectOption } from "./PalworldSelectOption";

export default class PalworldConfiguration {
    Difficulty: PalworldSelectOne
    DayTimeSpeedRate: PalworldDecimal;
    NightTimeSpeedRate: PalworldDecimal;
    ExpRate: PalworldDecimal;
    PalCaptureRate: PalworldDecimal;
    PalSpawnNumRate: PalworldDecimal;
    PalDamageRateAttack: PalworldDecimal;
    PalDamageRateDefense: PalworldDecimal;
    PlayerDamageRateAttack: PalworldDecimal;
    PlayerDamageRateDefense: PalworldDecimal;
    PlayerStomachDecreaceRate: PalworldDecimal;
    PlayerStaminaDecreaceRate: PalworldDecimal;
    PlayerAutoHPRegeneRate: PalworldDecimal;
    PlayerAutoHpRegeneRateInSleep: PalworldDecimal;
    PalStomachDecreaceRate: PalworldDecimal;
    PalStaminaDecreaceRate: PalworldDecimal;
    PalAutoHPRegeneRate: PalworldDecimal;
    PalAutoHpRegeneRateInSleep: PalworldDecimal;
    BuildObjectDamageRate: PalworldDecimal;
    BuildObjectDeteriorationDamageRate: PalworldDecimal;
    CollectionDropRate: PalworldDecimal;
    CollectionObjectHpRate: PalworldDecimal;
    CollectionObjectRespawnSpeedRate: PalworldDecimal;
    EnemyDropItemRate: PalworldDecimal;
    DeathPenalty: PalworldSelectOne;
    bEnablePlayerToPlayerDamage: PalworldBoolean;
    bEnableFriendlyFire: PalworldBoolean;
    bEnableInvaderEnemy: PalworldBoolean;
    bActiveUNKO: PalworldBoolean;
    bEnableAimAssistPad: PalworldBoolean;
    bEnableAimAssistKeyboard: PalworldBoolean;
    DropItemMaxNum: PalworldInteger;
    DropItemMaxNum_UNKO: PalworldInteger;
    BaseCampMaxNum: PalworldInteger;
    BaseCampWorkerMaxNum: PalworldInteger;
    DropItemAliveMaxHours: PalworldDecimal;
    bAutoResetGuildNoOnlinePlayers: PalworldBoolean;
    AutoResetGuildTimeNoOnlinePlayers: PalworldDecimal;
    GuildPlayerMaxNum: PalworldInteger;
    PalEggDefaultHatchingTime: PalworldDecimal;
    WorkSpeedRate: PalworldDecimal;
    bIsMultiplay: PalworldBoolean;
    bIsPvP: PalworldBoolean;
    bCanPickupOtherGuildDeathPenaltyDrop: PalworldBoolean;
    bEnableNonLoginPenalty: PalworldBoolean;
    bEnableFastTravel: PalworldBoolean;
    bIsStartLocationSelectByMap: PalworldBoolean;
    bExistPlayerAfterLogout: PalworldBoolean;
    bEnableDefenseOtherGuildPlayer: PalworldBoolean;
    CoopPlayerMaxNum: PalworldInteger;
    ServerPlayerMaxNum: PalworldInteger;
    ServerName: PalworldString;
    ServerDescription: PalworldOptionalString;
    AdminPassword: PalworldString;
    ServerPassword: PalworldOptionalString;
    PublicPort: PalworldPort;
    PublicIP: PalworldIpAddress;
    RCONEnabled: PalworldBoolean;
    RCONPort: PalworldPort;
    Region: PalworldOptionalString;
    bUseAuth: PalworldBoolean;
    BanListURL: PalworldString;

    constructor() {
        this.Difficulty = new PalworldSelectOne(true, { label: "None", value: "None"}, [{ label: "None", value: "None"}], "Difficulty is unable to be set at this time.");
        this.DayTimeSpeedRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.NightTimeSpeedRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.ExpRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalCaptureRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalSpawnNumRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalDamageRateAttack = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalDamageRateDefense = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerDamageRateAttack = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerDamageRateDefense = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerStomachDecreaceRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerStaminaDecreaceRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerAutoHPRegeneRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PlayerAutoHpRegeneRateInSleep = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalStomachDecreaceRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalStaminaDecreaceRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalAutoHPRegeneRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.PalAutoHpRegeneRateInSleep = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.BuildObjectDamageRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.BuildObjectDeteriorationDamageRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.CollectionDropRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.CollectionObjectHpRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.CollectionObjectRespawnSpeedRate = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.EnemyDropItemRate  = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.DeathPenalty = new PalworldSelectOne(false, { label: "All", value: "All" }, [
        { label: "None", value: "None" },
        { label: "Items", value: "Item" },
        { label: "Items And Equipment", value: "ItemAndEquipment"},
        { label: "All", value: "All" }
        ]);
        this.bEnablePlayerToPlayerDamage = new PalworldBoolean(false, false);
        this.bEnableFriendlyFire = new PalworldBoolean(false, false);
        this.bEnableInvaderEnemy = new PalworldBoolean(false, true);
        this.bActiveUNKO = new PalworldBoolean(false, false);
        this.bEnableAimAssistPad = new PalworldBoolean(false, true);
        this.bEnableAimAssistKeyboard = new PalworldBoolean(false, false);
        this.DropItemMaxNum = new PalworldInteger(false, 1, 10000, 3000);
        this.DropItemMaxNum_UNKO = new PalworldInteger(false, 1, 200, 100);
        this.BaseCampMaxNum = new PalworldInteger(false, 1, 256, 128);
        this.BaseCampWorkerMaxNum = new PalworldInteger(false, 1, 20, 15);
        this.DropItemAliveMaxHours  = new PalworldDecimal(false, 1.000000, 0.100000, 2.000000, 0.100000);
        this.bAutoResetGuildNoOnlinePlayers = new PalworldBoolean(false, false);
        this.AutoResetGuildTimeNoOnlinePlayers  = new PalworldDecimal(false, 72.000000, 1.000000, 100.000000, 0.100000);
        this.GuildPlayerMaxNum  = new PalworldInteger(false, 1, 32, 20);
        this.PalEggDefaultHatchingTime  = new PalworldDecimal(false, 72.000000, 0.000000, 100.000000, 0.100000);
        this.WorkSpeedRate  = new PalworldDecimal(false, 1.000000, 0.100000, 5.000000, 0.100000);
        this.bIsMultiplay = new PalworldBoolean(false, false);
        this.bIsPvP = new PalworldBoolean(false, false);
        this.bCanPickupOtherGuildDeathPenaltyDrop = new PalworldBoolean(false, false);
        this.bEnableNonLoginPenalty = new PalworldBoolean(false, true);
        this.bEnableFastTravel = new PalworldBoolean(false, true);
        this.bIsStartLocationSelectByMap = new PalworldBoolean(false, true);
        this.bExistPlayerAfterLogout = new PalworldBoolean(false, false);
        this.bEnableDefenseOtherGuildPlayer = new PalworldBoolean(false, false);
        this.CoopPlayerMaxNum = new PalworldInteger(false, 1, 32, 4);
        this.ServerPlayerMaxNum = new PalworldInteger(false, 1, 32, 32);
        this.ServerName = new PalworldString(false, 128, "Default Palworld Server");
        this.ServerDescription = new PalworldOptionalString(false, 300);
        this.AdminPassword = new PalworldString(false, 128, "");
        this.ServerPassword = new PalworldOptionalString(false, 128);
        this.PublicPort = new PalworldPort(false, 8211);
        this.PublicIP = new PalworldIpAddress(false, "");
        this.RCONEnabled = new PalworldBoolean(false, false);
        this.RCONPort = new PalworldPort(false, 25575);
        this.Region = new PalworldOptionalString(false, 128);
        this.bUseAuth = new PalworldBoolean(false, true);
        this.BanListURL = new PalworldUrl(false, "https://api.palworldgame.com/api/banlist.txt");
    };

    public getConfigItems(): Array<[string, PalworldConfigItem]> {
        const entries = Object.entries(this);
        const items: Array<[string, PalworldConfigItem]> = [];

        for (const [key, value] of entries) {
            if (value instanceof PalworldConfigItem) {
                items.push([key, value]);
            }
        }

        return items;
    }

    public output(): string {
        let output = '[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(';

        for (const [key, config] of Object.entries(this)) {
            if (config instanceof PalworldConfigItemValue) {
                switch(config.type) {
                    case PalworldConfigType.TextInput:
                    case PalworldConfigType.IpAddress:
                    case PalworldConfigType.Url:
                        output += `${key}="${config.value}",`
                        break;
                    case PalworldConfigType.Number:
                    case PalworldConfigType.Port:
                        output += `${key}=${Math.floor(config.value)},`;
                        break;
                    case PalworldConfigType.SelectOne:
                        const selected =  config.value as PalworldSelectOption;
                        output += `${key}="${selected.value}",`
                        break;
                    case PalworldConfigType.Decimal:
                        output += `${key}=${config.value.toFixed(6)},`;
                        break;
                    case PalworldConfigType.Boolean:
                        output += `${key}=${config.value ? 'True' : 'False'},`;
                        break;
                }
            }
        }

        if (output.indexOf(',') != -1) {
            output = output.slice(0, -1);
        }

        output += ")";
        return output;
    }
}