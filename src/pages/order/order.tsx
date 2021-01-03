import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtCard, AtButton } from "taro-ui";
import "./order.less";
import gasPng from "@/asset/order/gas.png";
import giftPng from "@/asset/order/express.png";

export default function Order() {
  const tabList = [
    { title: "全部" },
    { title: "待评价" },
    { title: "售后/退款" }
  ];
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <View className="tab_div">
      <AtTabs
        className="tab_div_cur"
        current={currentTab}
        tabList={tabList}
        onClick={e => {
          setCurrentTab(e);
        }}
      >
        <AtTabsPane current={currentTab} index={0}>
          <View className="tab_view">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <AtCard
                className="tab_view_item"
                key={index}
                // note="小Tips"
                extra="已完成"
                title="集体村xxx号"
                thumb={gasPng}
              >
                <View className="tab_view_info">
                  <Image src={giftPng} className="tab_view_info_img" />
                  <View>
                    <View>下单时间: 2020-01-03 10:37</View>
                    <View>总价: ￥105</View>
                  </View>
                </View>
                <View className="btn-item">
                  <View className="subitem">
                    <AtButton size="small">再来一单</AtButton>
                  </View>
                  <View className="subitem">
                    <AtButton size="small">评价</AtButton>
                  </View>
                  <View className="subitem">
                    <AtButton size="small">退款</AtButton>
                  </View>
                </View>
              </AtCard>
            ))}
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={1}>
          <View className="tab_view">
            {[1, 2, 3, 4].map((item, index) => (
              <AtCard
                className="tab_view_item"
                key={index}
                // note="小Tips"

                title="集体村xxx号"
                thumb={gasPng}
              >
                <View className="tab_view_info">
                  <Image src={giftPng} className="tab_view_info_img" />
                  <View>
                    <View>下单时间: 2020-01-03 10:37</View>
                    <View>总价: ￥105</View>
                  </View>
                </View>
                <View className="btn-item">
                  <View className="subitem">
                    <AtButton size="small">评价</AtButton>
                  </View>
                </View>
              </AtCard>
            ))}
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={2}>
          <View className="tab_view">
            {[1, 2, 3, 4].map((item, index) => (
              <AtCard
                className="tab_view_item"
                key={index}
                // note="小Tips"
                extra="退款中"
                title="集体村xxx号"
                thumb={gasPng}
              >
                <View className="tab_view_info">
                  <Image src={giftPng} className="tab_view_info_img" />
                  <View>
                    <View>下单时间: 2020-01-03 10:37</View>
                    <View>总价: ￥105</View>
                  </View>
                </View>
                <View className="btn-item">
                  <View className="subitem">
                    <AtButton size="small">再来一单</AtButton>
                  </View>
                  <View className="subitem">
                    <AtButton size="small">退款进度</AtButton>
                  </View>
                </View>
              </AtCard>
            ))}
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
