import { PalworldConfiguration } from '$lib/palworld';
import { describe, expect, it } from 'vitest';

describe('PalworldConfiguration', () => {
  it('should output value', () => {
    const config = new PalworldConfiguration();
    expect(config.output()).not.empty;
  });
});
