import { shallowMount } from '@vue/test-utils';
import LText from '@/components/LText';
import { textDefaultProps } from '../../src/defaultProps';

describe('LText.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        text: msg
      }
    });
    expect(wrapper.get('div').text()).toBe(msg);
    expect(wrapper.get('div').attributes()).toHaveProperty('style');
  });
});
