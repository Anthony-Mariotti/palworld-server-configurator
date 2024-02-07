import type {
  PalworldBoolean,
  PalworldConfigItemValue,
  PalworldDecimal,
  PalworldInteger,
  PalworldIpAddress,
  PalworldOptionalString,
  PalworldPort,
  PalworldSelectOne,
  PalworldString,
  PalworldUrl
} from '$lib/palworld';
import Reset from './configitem-reset.svelte';
import Decimal from './configitem-decimal.svelte';
import Boolean from './configitem-boolean.svelte';
import IpAddress from './configitem-ipaddress.svelte';
import Number from './configitem-number.svelte';
import OptionalString from './configitem-optional-string.svelte';
import Port from './configitem-port.svelte';
import SelectOne from './configitem-selectone.svelte';
import String from './configitem-string.svelte';
import Url from './configitem-url.svelte';

type Props = {
  key: string;
};

type ResetProps = Props & {
  item: PalworldConfigItemValue<any>;
};

type DecimalProps = Props & {
  item: PalworldDecimal;
};

type StringProps = Props & {
  item: PalworldString;
};

type OptionalStringProps = Props & {
  item: PalworldOptionalString;
};

type NumberProps = Props & {
  item: PalworldInteger;
};

type SelectOneProps = Props & {
  item: PalworldSelectOne;
};

type BooleanProps = Props & {
  item: PalworldBoolean;
};

type IpAddressProps = Props & {
  item: PalworldIpAddress;
};

type PortProps = Props & {
  item: PalworldPort;
};

type UrlProps = Props & {
  item: PalworldUrl;
};

export {
  type Props,
  //
  Reset,
  Decimal,
  Boolean,
  IpAddress,
  Number,
  OptionalString,
  Port,
  SelectOne,
  String,
  Url,
  type Props as ConfigItemProps,
  type ResetProps,
  type DecimalProps,
  type StringProps,
  type OptionalStringProps,
  type NumberProps,
  type SelectOneProps,
  type BooleanProps,
  type IpAddressProps,
  type PortProps,
  type UrlProps,
  //
  Reset as ConfigItemReset
};
