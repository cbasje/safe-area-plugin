import { registerPlugin } from '@capacitor/core';

import { SafeAreaPlugin } from './definitions';

const SafeAreaPlugin = registerPlugin<SafeAreaPlugin>('SafeAreaPlugin', {
  web: () => import('./web').then(m => new m.SafeAreaPluginWeb()),
});

export * from './definitions';
export { SafeAreaPlugin };
