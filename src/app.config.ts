export default {
  pages: [
    "pages/index/index",
    "pages/order/order",
    "pages/mine/mine",
    "pages/redpacket/redpacket",
    "pages/kefu/kefu",
    "pages/questiondetail/questiondetail",
    "pages/aboutus/aboutus"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "自来气",
    enablePullDownRefresh: true //下拉刷新
  },
  // 主题色 #fecb2e 美团黄
  tabBar: {
    color: "#666666",
    selectedColor: "#000000",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/tabs/首页.png",
        selectedIconPath: "./asset/tabs/首页_on.png"
      },
      {
        pagePath: "pages/order/order",
        text: "订单",
        iconPath: "./asset/tabs/订单.png",
        selectedIconPath: "./asset/tabs/订单_on.png"
      },
      {
        pagePath: "pages/mine/mine",
        text: "我的",
        iconPath: "./asset/tabs/mine.png",
        selectedIconPath: "./asset/tabs/我的_on.png"
      }
      // {
      //   pagePath: "pages/index/index",
      //   text: "首页",
      //   iconPath: "@/asset/tabs/首页.png",
      //   selectedIconPath: "@/asset/tabs/首页_on.png"
      // },
      // {
      //   pagePath: "pages/order/order",
      //   text: "订单",
      //   iconPath: "@/asset/tabs/订单.png",
      //   selectedIconPath: "@/asset/tabs/订单_on.png"
      // },
      // {
      //   pagePath: "pages/mine/mine",
      //   text: "我的",
      //   iconPath: "../@/asset/tabs/我的.png",
      //   selectedIconPath: "../@/asset/tabs/我的_on.png"
      // }
    ]
  },
  permission: {
    "scope.userLocation": {
      desc: "自来气想要获取你的地理位置信息"
    }
  }
};
