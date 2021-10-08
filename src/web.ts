import { WebPlugin, registerPlugin } from '@capacitor/core';

import type { SafeAreaInsets, SafeAreaInsetsResult } from './definitions';
import { SafeAreaInsetsChangeEventName, SafeAreaPlugin } from './definitions';

export class SafeAreaPluginWeb extends WebPlugin implements SafeAreaPlugin {
  /**
   * Call this whenever you want the EventOnInsetsChanged to be fired manually.
   */
  async refresh(): Promise<void> {
    const dummy: SafeAreaInsets = {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    };

    this.notifyListeners(SafeAreaInsetsChangeEventName, {
      insets: dummy,
    });
  }

  /**
   * Gets the current SafeAreaInsets.
   */
  getSafeAreaInsets(): Promise<SafeAreaInsetsResult> {
    const dummy: SafeAreaInsets = {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    };

    return new Promise<SafeAreaInsetsResult>(resolve => {
      resolve({ insets: dummy });
    });
  }
}

const SafeAreaPlugin = registerPlugin<SafeAreaPlugin>('SafeAreaPlugin', {
  web: () => import('./web').then(m => new m.SafeAreaPluginWeb()),
});

export { SafeAreaPlugin };
