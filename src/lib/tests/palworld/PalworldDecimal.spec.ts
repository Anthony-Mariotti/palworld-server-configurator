import { PalworldConfigType, PalworldDecimal } from '$lib/palworld';
import { describe, expect, it } from 'vitest';

describe('PalworldDecimal', () => {
  it('should be of type number', () => {
    const decimal = new PalworldDecimal(false, 1.0, 0.1, 2.0, 0.1);

    expect(decimal.type).toBe(PalworldConfigType.Decimal);
  });

  it('should return value that was passed in constructor', () => {
    const value = 0.1;
    const decimal = new PalworldDecimal(false, value, 0.1, 2.0, 0.1);

    expect(decimal.value).toBe(value);
  });

  it('should return value that was updated', () => {
    const value = 1.5;
    const decimal = new PalworldDecimal(false, 1.0, 0.1, 2.0, 0.1);
    decimal.value = value;

    expect(decimal.value).toBe(value);
  });

  it('should not return original value passed in constructor', () => {
    const value = 1.0;
    const decimal = new PalworldDecimal(false, value, 0.1, 2.0, 0.1);
    decimal.value = 1.5;

    expect(decimal.value).not.toBe(value);
  });

  it('should not change value when readonly', () => {
    const value = 1.0;
    const decimal = new PalworldDecimal(true, value, 0.1, 2.0, 0.1);
    decimal.value = 1.5;

    expect(decimal.value).toBe(value);
  });

  it('should not set value less than min value', () => {
    const value = 0.5;
    const decimal = new PalworldDecimal(false, 1.0, 1.0, 2.0, 0.1);
    decimal.value = value;

    expect(decimal.value).not.toBe(value);
  });

  it('should not set value greater than max value', () => {
    const value = 3;
    const decimal = new PalworldDecimal(false, 1.0, 0.1, 2.0, 0.1);
    decimal.value = value;

    expect(decimal.value).not.toBe(value);
  });

  it('should return exact notice supplied in constructor', () => {
    const notice = 'test notice';
    const decimal = new PalworldDecimal(false, 1.0, 0.1, 2.0, 0.1, notice);

    expect(decimal.notice).not.toBeUndefined();
    expect(decimal.notice).not.toBeNull();
    expect(decimal.notice).toBe(notice);
  });

  it('should have set default value from constructor', () => {
    const defaultValue = 1.0;
    const decimal = new PalworldDecimal(false, defaultValue, 0.1, 2.0, 0.1);

    expect(decimal.default).toBe(defaultValue);
  });

  it('should have original default after value change', () => {
    const original = 1.0;
    const decimal = new PalworldDecimal(false, original, 0.1, 2.0, 0.1);
    decimal.value = 1.5;

    expect(decimal.default).toBe(original);
  });
});
