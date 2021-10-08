import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SafeAreaPlugin)
public class SafeAreaPlugin: CAPPlugin {
    private let KEY_INSET = "insets";
	private let EVENT_ON_INSETS_CHANGED = "safeAreaPluginsInsetChange";
    private let safeAreaInsets = SafeAreaInsets()

    @objc func refresh(_ call: CAPPluginCall) {
        doNotify()
        call.resolve()
    }

    @objc func getSafeAreaInsets(_ call: CAPPluginCall) {
        call.resolve([
            KEY_INSET: safeAreaInsets.toJSON()
        ])
    }
    
    func doNotify () {
        //
    }
}
