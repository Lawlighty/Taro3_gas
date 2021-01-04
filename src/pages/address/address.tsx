import React, { useState, useEffect } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./address.less";
import { AtIcon, AtTag, AtButton } from "taro-ui";
import gasPng from "@/asset/order/gas.png";
import bgPng from "@/asset/about/about_bg.png";

export default function Address() {
  return (
    <View>
      <View className="address_items">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <View className="address_item" key={index}>
            <View className="left_item">
              <View className="left">
                <Text>浙江省绍兴市越城区 世贸...</Text>

                <AtTag
                  size="small"
                  className={
                    index % 3 === 0
                      ? "tag_g"
                      : index % 2 === 0
                      ? "tag_b"
                      : "tag_y"
                  }
                  active
                >
                  {index % 3 === 0 ? "学校" : index % 2 === 0 ? "公司" : "家"}
                </AtTag>
              </View>
              <View className="left_item_bottom">
                <Text>X先生</Text>
                <Text> 1361658585</Text>
              </View>
            </View>
            <View>
              <AtIcon value="edit" size="20" color="#999" />
            </View>
          </View>
        ))}
      </View>
      <View className="add">
        <AtButton type="primary" full>
          <AtIcon
            value="add-circle"
            size="24"
            color="#FFF"
            className="add_icon"
          ></AtIcon>
          添加地址
        </AtButton>
      </View>
    </View>
  );
}
