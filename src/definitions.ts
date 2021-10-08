export interface SafeAreaPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
