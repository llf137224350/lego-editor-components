<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >{{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent, } from 'vue';
import useComponentCommon from '../../hooks/useComponentCommon';
import { textDefaultProps, transformToComponentProps, textStylePropNames } from '@/defaultProps';
// 得到组件props定义的属性
const defaultProps = transformToComponentProps(textDefaultProps);
const extraProps = {
  tag: {
    type: String,
    default: 'div'
  },
  ...defaultProps
};
export default defineComponent({
  name: 'LText',
  props: {
    ...extraProps
  },
  setup(props) {
    // 从传入的属性中过滤出样式属性
    return {
      ...useComponentCommon(props, textStylePropNames)
    };
  }
});
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}

button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}

.l-text-component {
  position: relative !important;
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
