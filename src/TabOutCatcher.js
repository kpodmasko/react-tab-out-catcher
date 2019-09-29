import { Component, createRef, cloneElement } from "react";
import "tab-out-catcher/src/tab-out-catcher";

const { catchTheTab } = window;

class TabOutCatcher extends Component {
  constructor(props) {
    super(props);
    this.container = createRef();
  }

  componentDidMount() {
    catchTheTab(this.container.current);
  }

  render() {
    const { children } = this.props;

    if (children.length) {
      throw new Error("You must pass one child to TabOutCatcher");
    }

    return cloneElement(children, { ref: this.container });
  }
}

export default TabOutCatcher;
