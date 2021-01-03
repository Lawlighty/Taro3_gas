import { Component } from "react";
import "taro-ui/dist/style/index.scss";
import "./app.less";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  globalData = {
    loginType: false,
    userInfo: {},
    // mapKye 腾讯地图key
    mapKye: "PLSBZ-272HR-LXUWZ-W5Q4K-XXLXE-LWF66"
  };
  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
