# react-tab-out-catcher

This is a React solution for tab-out-catcher. It is a simple lib to wrap a container (such as form) and prevent jumping out from it by pressing Tab-button

## get started

1. install via npm
2. import TabOutCatcher
3. pass a container to TabOutCatcher as a child. Note: you must pass only one child.

```javascript
...
// 2 menu item
import TabOutCatcher from "react-tab-out-catcher";
...
render() {
	...
	// 3 menu item
	<TabOutCatcher>
		<form className="wrapped-in-a-tab-out-catcher">
             ...
        </form>
	</TabOutCatcher>
	...
}
...
```

## example of tab-out-catcher

###### try it first:

https://codepen.io/xknowledgeless/project/full/XMJLvg

###### if something went wrong:

https://kpodmasko.github.io/tab-out-catcher/
