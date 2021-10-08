import { registerPlugin } from '@capacitor/core';

import type { SafeAreaPluginPlugin } from './definitions';

const SafeAreaPlugin = registerPlugin<SafeAreaPluginPlugin>('SafeAreaPlugin', {
  web: () => import('./web').then(m => new m.SafeAreaPluginWeb()),
});

export * from './definitions';
export { SafeAreaPlugin };
