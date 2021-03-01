import { App } from 'vue';
import LShape from '@/components/LShape/LShape.vue';

LShape.install = (app: App) => {
  app.component(LShape.name, LShape);
};
export default LShape;
