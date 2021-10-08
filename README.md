# safe-area-plugin

A plugin that get the safe area insets for Android and iOS

## Install

```bash
npm install safe-area-plugin
npx cap sync
```

## API

<docgen-index>

* [`refresh()`](#refresh)
* [`getSafeAreaInsets()`](#getsafeareainsets)
* [`addListener(...)`](#addlistener)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### refresh()

```typescript
refresh() => any
```

**Returns:** <code>any</code>

--------------------


### getSafeAreaInsets()

```typescript
getSafeAreaInsets() => any
```

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'safeAreaPluginsInsetChange', listener: SafeAreaInsetsChangedCallback) => PluginListenerHandle
```

| Param           | Type                                                                           |
| --------------- | ------------------------------------------------------------------------------ |
| **`eventName`** | <code>"safeAreaPluginsInsetChange"</code>                                      |
| **`listener`**  | <code>(insets: <a href="#safeareainsets">SafeAreaInsets</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### SafeAreaInsetsResult

| Prop         | Type                                                      |
| ------------ | --------------------------------------------------------- |
| **`insets`** | <code><a href="#safeareainsets">SafeAreaInsets</a></code> |


#### SafeAreaInsets

| Prop         | Type                |
| ------------ | ------------------- |
| **`top`**    | <code>number</code> |
| **`bottom`** | <code>number</code> |
| **`right`**  | <code>number</code> |
| **`left`**   | <code>number</code> |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
