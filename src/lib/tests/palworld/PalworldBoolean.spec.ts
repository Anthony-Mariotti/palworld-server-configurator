import { PalworldBoolean, PalworldConfigType } from '$lib/palworld';
import { describe, expect, it } from 'vitest';

describe('PalworldBoolean', () => {
  it('should be of type boolean', () => {
    const bool = new PalworldBoolean(false, false);

    expect(bool.type).toBe(PalworldConfigType.Boolean);
  });

  it('should return true when value passed in contructor is true', () => {
    const bool = new PalworldBoolean(false, true);

    expect(bool.value).true;
  });

  it('should return false after value was changed to false', () => {
    const bool = new PalworldBoolean(false, true);
    bool.value = false;

    expect(bool.value).false;
  });

  it('should return exact notice supplied in constructor', () => {
    const notice = 'test notice';
    const bool = new PalworldBoolean(false, false, notice);

    expect(bool.notice).not.toBeUndefined();
    expect(bool.notice).not.toBeNull();
    expect(bool.notice).toBe(notice);
  });

  it('should have set default value from constructor', () => {
    const defaultValue = true;
    const decimal = new PalworldBoolean(false, defaultValue);

    expect(decimal.default).true;
  });

  it('should have original default after value change', () => {
    const original = false;
    const bool = new PalworldBoolean(false, original);
    bool.value = !original;

    expect(bool.default).toBe(original);
  });
});
