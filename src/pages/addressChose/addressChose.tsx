import Taro from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtSearchBar, AtIcon } from "taro-ui";

import "./addressChose.less";

export default function AddressChose() {
  const [value, setValue] = useState<string>("");
  return (
    <View className="page">
      <View className="header">
        <View
          className="area"
          onClick={() => {
            Taro.navigateTo({ url: "/pages/addressCity/addressCity" });
          }}
        >
          <View className="txt">绍兴</View>
          <AtIcon value="chevron-down" size="18" color="#333"></AtIcon>
        </View>
        <View className="search">
          <AtSearchBar
            value={value}
            placeholder="请输入取件地址"
            // onFocus={() => {
            //   Taro.navigateTo({ url: "/pages/addressAdd/addressAdd" });
            // }}
            onChange={e => {
              setValue(e);
            }}
          />
        </View>
      </View>
      <View className="area_points">
        <View className="items">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <View
              className="item"
              key={index}
              onClick={() => {
                Taro.navigateTo({ url: "/pages/addressAdd/addressAdd" });
              }}
            >
              <View className="title">圭园新村</View>
              <View className="detail">越城区中心南路</View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
