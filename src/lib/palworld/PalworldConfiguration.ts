import PalworldBoolean from './PalworldBoolean';
import PalworldConfigItem from './PalworldConfigItem';
import PalworldConfigItemValue from './PalworldConfigItemValue';
import PalworldDecimal from './PalworldDecimal';
import PalworldInteger from './PalworldInteger';
import PalworldIpAddress from './PalworldIpAddress';
import PalworldOptionalString from './PalworldOptionalString';
import PalworldPort from './PalworldPort';
import PalworldSelectOne from './PalworldSelectOne';
import PalworldString from './PalworldString';
import PalworldUrl from './PalworldUrl';
import { PalworldConfigType } from './PalworldConfigType';
import type { PalworldSelectOption } from './PalworldSelectOption';
import { writable } from 'svelte/store';

export class PalworldConfiguration {
  Difficulty = new PalworldSelectOne(
    true,
    { label: 'None', value: 'None' },
    [{ label: 'None', value: 'None' }],
    'Pocketpair has not provided options to set this value yet.'
  );

  DayTimeSpeedRate: PalworldDecimal = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  NightTimeSpeedRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  ExpRate = new PalworldDecimal(false, 1.0, 0.1, 20.0, 0.1);

  PalCaptureRate = new PalworldDecimal(false, 1.0, 0.5, 2.0, 0.1);

  PalSpawnNumRate = new PalworldDecimal(
    false,
    1.0,
    0.5,
    3.0,
    0.1,
    'Note: Affects game performance'
  );

  PalDamageRateAttack = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PalDamageRateDefense = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerDamageRateAttack = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerDamageRateDefense = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerStomachDecreaceRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerStaminaDecreaceRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerAutoHPRegeneRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PlayerAutoHpRegeneRateInSleep = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PalStomachDecreaceRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PalStaminaDecreaceRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PalAutoHPRegeneRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  PalAutoHpRegeneRateInSleep = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  BuildObjectDamageRate = new PalworldDecimal(false, 1.0, 0.5, 3.0, 0.1);

  BuildObjectDeteriorationDamageRate = new PalworldDecimal(false, 1.0, 0.0, 10.0, 0.1);

  CollectionDropRate = new PalworldDecimal(false, 1.0, 0.5, 3.0, 0.1);

  CollectionObjectHpRate = new PalworldDecimal(false, 1.0, 0.5, 3.0, 0.1);

  CollectionObjectRespawnSpeedRate = new PalworldDecimal(false, 1.0, 0.3, 5.0, 0.1);

  EnemyDropItemRate = new PalworldDecimal(false, 1.0, 0.3, 5.0, 0.1);

  DeathPenalty = new PalworldSelectOne(false, { label: 'All', value: 'All' }, [
    { label: 'None', value: 'None' },
    { label: 'Items', value: 'Item' },
    { label: 'Items And Equipment', value: 'ItemAndEquipment' },
    { label: 'All', value: 'All' }
  ]);

  bEnablePlayerToPlayerDamage = new PalworldBoolean(false, false);

  bEnableFriendlyFire = new PalworldBoolean(false, false);

  bEnableInvaderEnemy = new PalworldBoolean(false, true);

  bActiveUNKO = new PalworldBoolean(false, false);

  bEnableAimAssistPad = new PalworldBoolean(false, true);

  bEnableAimAssistKeyboard = new PalworldBoolean(false, false);

  DropItemMaxNum = new PalworldInteger(false, 0, 5000, 3000);

  DropItemMaxNum_UNKO = new PalworldInteger(false, 0, 500, 100);

  BaseCampMaxNum = new PalworldInteger(false, 1, 256, 128);

  BaseCampWorkerMaxNum = new PalworldInteger(false, 1, 20, 15);

  DropItemAliveMaxHours = new PalworldDecimal(false, 1.0, 0.5, 24.0, 0.1);

  bAutoResetGuildNoOnlinePlayers = new PalworldBoolean(false, false);

  AutoResetGuildTimeNoOnlinePlayers = new PalworldDecimal(false, 72.0, 1.0, 100.0, 0.1);

  GuildPlayerMaxNum = new PalworldInteger(false, 1, 32, 20);

  PalEggDefaultHatchingTime = new PalworldDecimal(false, 72.0, 0.0, 240.0, 0.1);

  WorkSpeedRate = new PalworldDecimal(false, 1.0, 0.1, 5.0, 0.1);

  bIsMultiplay = new PalworldBoolean(false, false);

  bIsPvP = new PalworldBoolean(false, false);

  bCanPickupOtherGuildDeathPenaltyDrop = new PalworldBoolean(false, false);

  bEnableNonLoginPenalty = new PalworldBoolean(false, true);

  bEnableFastTravel = new PalworldBoolean(false, true);

  bIsStartLocationSelectByMap = new PalworldBoolean(false, true);

  bExistPlayerAfterLogout = new PalworldBoolean(false, false);

  bEnableDefenseOtherGuildPlayer = new PalworldBoolean(false, false);

  CoopPlayerMaxNum = new PalworldInteger(false, 1, 32, 4);

  ServerPlayerMaxNum = new PalworldInteger(false, 1, 32, 32);

  ServerName = new PalworldString(false, 128, 'Default Palworld Server');

  ServerDescription = new PalworldOptionalString(false, 300);

  AdminPassword = new PalworldString(false, 128, '');

  ServerPassword = new PalworldOptionalString(false, 128);

  PublicPort = new PalworldPort(false, 8211);

  PublicIP = new PalworldIpAddress(false, '');

  RCONEnabled = new PalworldBoolean(false, false);

  RCONPort = new PalworldPort(false, 25575);

  Region = new PalworldOptionalString(false, 128);

  bUseAuth = new PalworldBoolean(false, true);

  BanListURL = new PalworldUrl(false, 'https://api.palworldgame.com/api/banlist.txt');

  private portNumberKeys: string[] = ['PublicPort', 'RCONPort'];

  private ipAddressKeys: string[] = ['PublicIP'];

  private urlKeys: string[] = ['BanListURL'];

  private enumKeys: string[] = ['Difficulty', 'DeathPenalty'];

  constructor(current?: Record<string, string>) {
    if (!current) return;
    for (const [key, value] of Object.entries(current)) {
      if (key in this) {
        if (this[key as keyof PalworldConfiguration] instanceof PalworldConfigItem) {
          if (this.ipAddressKeys.includes(key)) {
            // console.log('Ip', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldIpAddress).value = value.slice(
              1,
              -1
            );
            continue;
          }

          if (this.portNumberKeys.includes(key)) {
            // console.log('Port', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldPort).value =
              Number.parseInt(value);
            continue;
          }

          if (this.urlKeys.includes(key)) {
            // console.log('Url', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldUrl).value = value.slice(1, -1);
            continue;
          }

          if (this.enumKeys.includes(key)) {
            // console.log('Enum', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldSelectOne).value = {
              label: key,
              value: value
            };
            // console.log('Manual', (this[key as keyof PalworldConfiguration] as PalworldSelectOne).value);
            continue;
          }

          if (Number.isInteger(Number.parseFloat(value)) && value.indexOf('.') === -1) {
            // console.log('Integer', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldInteger).value =
              Number.parseInt(value);
            continue;
          }

          if (Number.isInteger(Number.parseInt(value))) {
            // console.log('Float', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldConfigItemValue<number>).value =
              Number.parseFloat(value);
            continue;
          }

          if (value.toLocaleLowerCase() === 'true' || value.toLocaleLowerCase() === 'false') {
            // console.log('Boolean', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldBoolean).value =
              value.toLocaleLowerCase() === 'true' ? true : false;
            continue;
          }

          if (value.startsWith('"') && value.endsWith('"')) {
            // console.log('String', { key: key, value: value });
            (this[key as keyof PalworldConfiguration] as PalworldConfigItemValue<string>).value =
              value.slice(1, -1);
            continue;
          }

          // TODO: Failed
          console.warn('Failed', key);
        }
      }
    }
  }

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
        switch (config.type) {
          case PalworldConfigType.TextInput:
          case PalworldConfigType.IpAddress:
          case PalworldConfigType.Url: {
            output += `${key}="${config.value}",`;
            break;
          }
          case PalworldConfigType.Number:
          case PalworldConfigType.Port: {
            output += `${key}=${Math.floor(config.value)},`;
            break;
          }
          case PalworldConfigType.SelectOne: {
            const selected = config.value as PalworldSelectOption;
            output += `${key}=${selected.value},`;
            break;
          }
          case PalworldConfigType.Decimal: {
            output += `${key}=${config.value.toFixed(6)},`;
            break;
          }
          case PalworldConfigType.Boolean: {
            output += `${key}=${config.value ? 'True' : 'False'},`;
            break;
          }
        }
      }
    }

    if (output.indexOf(',') != -1) {
      output = output.slice(0, -1);
    }

    output += ')';
    return output;
  }
}

const store = () => {
  const { subscribe, set, update } = writable(new PalworldConfiguration());

  return {
    subscribe,
    set,
    load: (input: Record<string, string>) => update(() => new PalworldConfiguration(input))
  };
};

export const PalworldStore = store();
