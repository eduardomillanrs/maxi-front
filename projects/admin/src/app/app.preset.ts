import Aura from '@primeng/themes/aura';
import { definePreset, palette } from '@primeng/themes';

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: palette('#3C82F6'),
  },
});
