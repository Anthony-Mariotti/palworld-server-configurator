import { PalworldConfigType, PalworldInteger } from '$lib/palworld';
import { describe, expect, it } from 'vitest';

describe('PalworldInteger', () => {
  it('should be of type number', () => {
    const integer = new PalworldInteger(false, 0, 2, 1);

    expect(integer.type).toBe(PalworldConfigType.Number);
  });

  it('should return value that was passed in constructor', () => {
    const value = 1;
    const integer = new PalworldInteger(false, 0, 2, value);

    expect(integer.value).toBe(value);
  });

  it('should return value that was updated', () => {
    const value = 2;
    const integer = new PalworldInteger(false, 0, 3, 1);
    integer.value = value;

    expect(integer.value).toBe(value);
  });

  it('should not have value passed in constructor when updated', () => {
    const value = 1;
    const integer = new PalworldInteger(false, 0, 2, value);
    integer.value = 2;

    expect(integer.value).not.toBe(value);
  });

  it('should not change value when readonly', () => {
    const original = 2;
    const integer = new PalworldInteger(true, 0, 2, original);
    integer.value = 1;

    expect(integer.value).toBe(original);
  });

  it('should not set value less than min value', () => {
    const min = 2;
    const integer = new PalworldInteger(false, 2, 4, 3);
    integer.value = 1;

    expect(integer.value).not.toBeLessThan(min);
    expect(integer.value).not.toBeLessThan(integer.min);
  });

  it('should not set value greater than max value', () => {
    const max = 2;
    const integer = new PalworldInteger(false, 0, max, 1);
    integer.value = 3;

    expect(integer.value).not.toBeGreaterThan(max);
    expect(integer.value).not.toBeGreaterThan(integer.max);
  });

  it('should return exact notice supplied in constructor', () => {
    const notice = 'test notice';
    const integer = new PalworldInteger(false, 0, 2, 1, notice);

    expect(integer.notice).not.toBeUndefined();
    expect(integer.notice).not.toBeNull();
    expect(integer.notice).toBe(notice);
  });

  it('should have set default value from constructor', () => {
    const defaultValue = 1;
    const integer = new PalworldInteger(false, 0, 2, defaultValue);

    expect(integer.default).toBe(defaultValue);
  });

  it('should have original default after value change', () => {
    const original = 1;
    const modified = 2;

    const integer = new PalworldInteger(false, 0, 2, original);
    integer.value = modified;

    expect(integer.default).toBe(original);
    expect(integer.value).toBe(modified);
  });
});
