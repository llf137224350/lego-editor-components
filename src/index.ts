import { App } from 'vue';
import LText from '@/components/LText';
import LImage from '@/components/LImage';
import LShape from '@/components/LShape';
const components = [LText, LImage,LShape];
// 插件入口
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 特定导出
export {
  LText,
  LImage,
  LShape,
  install
};
export * from './defaultProps';
// 默认导出
export default {install};
