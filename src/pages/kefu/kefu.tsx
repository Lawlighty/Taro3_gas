import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Map, Image } from "@tarojs/components";
import {
  AtTabs,
  AtTabsPane,
  AtCard,
  AtButton,
  AtList,
  AtListItem
} from "taro-ui";
import "./kefu.less";
import kefuPng from "@/asset/kefu/kefu.png";
import telPng from "@/asset/kefu/tel.png";

export default function KeFu() {
  return (
    <View className="page_bg">
      <View className="top_div">
        <View className="top_item">
          <Image
            src={kefuPng}
            onClick={() => {
              Taro.setClipboardData({
                data: "123462254",
                success: function(res) {
                  Taro.getClipboardData({
                    success: function(res) {
                      console.log(res.data); // data
                    }
                  });
                }
              });
            }}
          />
          <View>QQ: 123462254</View>
          <View style={{ marginTop: "10px" }}> 微信: 123462254</View>
        </View>
        <View className="top_item">
          <Image
            src={telPng}
            onClick={() => {
              Taro.makePhoneCall({
                phoneNumber: "13616859570" //仅为示例，并非真实的电话号码
              });
            }}
          />
          <View>13616859570</View>
        </View>
      </View>
      <View className="questions_title">常见问题</View>
      <AtList>
        <AtListItem
          onClick={() => {
            Taro.navigateTo({
              url:
                "/pages/questiondetail/questiondetail?title=" +
                "配送的问题" +
                "&question=" +
                "< div > Q:怎么回事?</br>A:这么回事</div>"
            });
          }}
          title="配送的问题"
          arrow="right"
        />
        <AtListItem
          onClick={() => {
            Taro.navigateTo({
              url:
                "/pages/questiondetail/questiondetail?title=" +
                "订单的问题" +
                "&question=" +
                "< div > Q:怎么回事?</br>A:这么回事</div>"
            });
          }}
          title="订单的问题"
          arrow="right"
        />
        <AtListItem
          onClick={() => {
            Taro.navigateTo({
              url:
                "/pages/questiondetail/questiondetail?title=" +
                "红包/优惠券的问题" +
                "&question=" +
                "< div > Q:怎么回事?</br>A:这么回事</div>"
            });
          }}
          title="红包/优惠券的问题"
          arrow="right"
        />
        <AtListItem
          onClick={() => {
            Taro.navigateTo({
              url:
                "/pages/questiondetail/questiondetail?title=" +
                "退款问题" +
                "&question=" +
                "< div > Q:怎么回事?</br>A:这么回事</div>"
            });
          }}
          title="退款问题"
          arrow="right"
        />
      </AtList>
    </View>
  );
}
