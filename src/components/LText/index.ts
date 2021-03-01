import {App} from 'vue';
import LText from '@/components/LText/LText.vue';

LText.install = (app: App) => {
  app.component(LText.name, LText);
};
export default LText;
