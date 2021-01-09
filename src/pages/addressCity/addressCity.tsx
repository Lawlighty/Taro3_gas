import Taro from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtIndexes } from "taro-ui";
import addTargetPng from "@/asset/address/address.png";
import "./addressCity.less";

export default function AddressCity() {
  const list = [
    {
      title: "A",
      key: "A",
      items: [
        {
          name: "阿坝"
          // 此处可加其他业务字段
        },
        {
          name: "阿拉善"
        }
      ]
    },
    {
      title: "B",
      key: "B",
      items: [
        {
          name: "北京"
        },
        {
          name: "保定"
        }
      ]
    },
    {
      title: "S",
      key: "S",
      items: [
        {
          name: "绍兴"
        }
      ]
    }
  ];
  return (
    <View>
      <View
        className="head"
        onClick={() => {
          Taro.navigateTo({ url: "/pages/addressChose/addressChose" });
        }}
      >
        <Image className="addTargetPng" src={addTargetPng} />
        <Text className="city">绍兴</Text>
        <Text className="info">当前定位城市</Text>
      </View>
      <View>
        <AtIndexes
          list={list}
          onClick={(item: object, e: any) => {
            console.log("item", item);
            Taro.navigateTo({ url: "/pages/addressChose/addressChose" });
          }}
        ></AtIndexes>
      </View>
    </View>
  );
}
