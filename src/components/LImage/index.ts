import { App } from 'vue';
import LImage from '@/components/LImage/LImage.vue';

LImage.install = (app: App) => {
  app.component(LImage.name, LImage);
};
export default LImage;
