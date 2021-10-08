import Foundation
import Capacitor

class SafeAreaInsets {
    var top: Int?
    var bottom: Int?
    var right: Int?
    var left: Int?

	init() {
		clear();
	}

    public func getTop() -> Int { return top ?? 0 }

    public func setTop(value: Int) -> Int {
        if (value != 0) { top = value }
        
        return top ?? 0
	}

	public func getBottom() -> Int {
		return bottom ?? 0
	}

	public func setBottom(value: Int) -> Int {
        if (value != 0) { bottom = value }

		return bottom ?? 0
	}

	public func getRight() -> Int {
		return right ?? 0
	}

	public func setRight(value: Int) -> Int {
        if (value != 0) { right = value }

		return right ?? 0
	}

	public func getLeft() -> Int {
		return left ?? 0
	}

	public func setLeft(value: Int) -> Int {
        if (value != 0) { left = value }

		return left ?? 0
	}

	public func clear() {
        setTop(value: 0);
        setBottom(value: 0);
        setRight(value: 0);
        setLeft(value: 0);
	}

	public func toJSON() -> JSObject {
        let json = [
            "top": top ?? 0,
            "bottom": bottom ?? 0,
            "right": right ?? 0,
            "left": left ?? 0
        ]

		return json;
	}
}
