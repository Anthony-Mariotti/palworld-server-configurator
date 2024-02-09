import type { BooleanProps } from '$lib/components/configitem';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/svelte';
import { PalworldBoolean } from '$lib/palworld';
import { Boolean as ConfigItemBoolean } from '$lib/components/configitem';

function setup(props: BooleanProps) {
  const user = userEvent.setup();
  const component = render(ConfigItemBoolean, { props });
  const clickPoint = component.getByRole('switch');

  return {
    user,
    clickPoint,
    ...component
  };
}

// Should this be a playwright test?
describe('configitem-boolean', () => {
  it('should change item to true when clicked', async () => {
    const item = new PalworldBoolean(false, false);

    const { user, clickPoint } = setup({
      key: 'test-key',
      item: item
    });

    await user.click(clickPoint);
    expect(item.value).true;
  });

  it('should change item to false when clicked', async () => {
    const item = new PalworldBoolean(false, true);

    const { user, clickPoint } = setup({
      key: 'test-key',
      item: item
    });

    await user.click(clickPoint);
    expect(item.value).false;
  });
});
