import { PalworldConfigType, PalworldString } from '$lib/palworld';
import { describe, expect, it } from 'vitest';

describe('PalworldString', () => {
  it('should be of type text input', () => {
    const text = new PalworldString(false, 10, 'test');

    expect(text.type).toBe(PalworldConfigType.TextInput);
  });

  it('should return value passed in constructor', () => {
    const value = 'test';
    const text = new PalworldString(false, 10, value);

    expect(text.value).toBe(value);
  });

  it('should value that was updated', () => {
    const updatedValue = 'new';
    const text = new PalworldString(false, 10, 'test');
    text.value = updatedValue;

    expect(text.value).toBe(updatedValue);
  });

  it('should not have value passed in constructor when updated', () => {
    const original = 'test';
    const text = new PalworldString(false, 10, original);
    text.value = 'new';

    expect(text.value).not.toBe(original);
  });

  it('should not change value when readonly', () => {
    const original = 'test';
    const text = new PalworldString(true, 10, original);
    text.value = 'new';

    expect(text.value).toStrictEqual(original);
  });

  it('should not set value greater than max value', () => {
    const max = 5;
    const text = new PalworldString(false, max, 'test');
    text.value = 'testing';

    expect(text.value).length.lessThan(max);
    expect(text.value).length.lessThan(text.max);
  });

  it('should return exact notice supplied in constructor', () => {
    const notice = 'test notice';
    const text = new PalworldString(false, 10, 'test', notice);

    expect(text.notice).not.toBeUndefined();
    expect(text.notice).not.toBeNull();
    expect(text.notice).toBe(notice);
  });

  it('should have set default value from constructor', () => {
    const defaultValue = 'test';
    const text = new PalworldString(false, 10, defaultValue);

    expect(text.default).toBe(defaultValue);
  });

  it('should have original default after value change', () => {
    const original = 'test';
    const modified = 'new';

    const text = new PalworldString(false, 10, original);
    text.value = modified;

    expect(text.default).toBe(original);
    expect(text.value).toBe(modified);
  });
});
