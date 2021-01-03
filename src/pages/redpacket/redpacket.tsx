import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Map, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtCard, AtButton } from "taro-ui";
import "./redpacket.less";
import redpacketPng from "@/asset/redpacket/redpacket.png";

export default function Redpacket() {
  return (
    <View className="page_bg">
      <View className="padding_t_20">
        {[1, 2, 3, 4].map((item, index) => (
          <AtCard
            key={index}
            className="tab_view_item"
            note="有效期至 2021.02.15"
            extra="￥5"
            title="新人红包"
            thumb={redpacketPng}
          ></AtCard>
        ))}
      </View>
    </View>
  );
}
