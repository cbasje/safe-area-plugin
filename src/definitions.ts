import type { PluginListenerHandle } from '@capacitor/core';

export interface SafeAreaPlugin {
  refresh(): Promise<void>;
  getSafeAreaInsets(): Promise<SafeAreaInsetsResult>;
  addListener(
    eventName: 'safeAreaPluginsInsetChange',
    listener: SafeAreaInsetsChangedCallback,
  ): PluginListenerHandle;
}

export interface SafeAreaInsets {
  [key: string]: number;
  top: number;
  bottom: number;
  right: number;
  left: number;
}

export interface SafeAreaInsetsResult {
  insets: SafeAreaInsets;
}
export type SafeAreaInsetsChangedCallback = (insets: SafeAreaInsets) => void;

export const SafeAreaInsetsChangeEventName = 'safeAreaPluginsInsetChange';
