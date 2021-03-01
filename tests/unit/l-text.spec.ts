import { shallowMount } from '@vue/test-utils';
import LText from '@/components/LText';
import { textDefaultProps } from '../../src/defaultProps';

describe('LText.vue', () => {
  const {location} = window;
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: ''
      }
    });
  });
  afterEach(() => {
    window.location = location;
  });

  it('测试基本样式', () => {
    const msg = 'new message';
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        text: msg
      }
    });
    expect(wrapper.text()).toBe(msg);
    expect(wrapper.attributes()).toHaveProperty('style');
    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('测试点击跳转', async () => {
    const msg = 'new message';
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        actionType: 'url',
        url: 'http://localhost',
        isEditing: false,
        text: msg
      }
    });
    await wrapper.trigger('click');
    expect(window.location.href).toBe('http://localhost');
  });

  it('测试点击不跳转', async () => {
    const msg = 'new message';
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        actionType: 'url',
        url: 'http://localhost',
        isEditing: true,
        text: msg
      }
    });
    await wrapper.trigger('click');
    expect(window.location.href).not.toBe('http://localhost');
  });
});

