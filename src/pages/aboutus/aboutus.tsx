import React, { useState, useEffect } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./aboutus.less";
import gasPng from "@/asset/order/gas.png";
import bgPng from "@/asset/about/about_bg.png";

export default function AboutUs() {
  return (
    <View className="main">
      <View className="title">
        <Image src={gasPng} />
        <Text className="name">自来气配送</Text>
      </View>
      <View>
        这是一段文案 这是一段文案,这是一段文案,这是一段文案,这是一段文案
        这是一段文案,这是一段文案,这是一段文案 这是一段文案
        这是一段文案,这是一段文案,这是一段文案 这是一段文案
        这是一段文案,这是一段文案,这是一段文案
      </View>
      <View className="bg">
        <Image src={bgPng} />
      </View>
    </View>
  );
}
