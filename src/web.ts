import { WebPlugin } from '@capacitor/core';

import type { SafeAreaPluginPlugin } from './definitions';

export class SafeAreaPluginWeb extends WebPlugin implements SafeAreaPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
