import Taro from "@tarojs/taro";
import React from "react";
import { View, Text } from "@tarojs/components";
import { AtList, AtListItem, AtAvatar } from "taro-ui";
import aboutPng from "@/asset/mine/aboutus.png";
import kefuPng from "@/asset/mine/kefu.png";
import feedPng from "@/asset/mine/feedback.png";
import "./mine.less";

export default function Mine() {
  return (
    <View>
      <View className="my_header">
        <AtAvatar
          circle
          size="large"
          image="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"
        ></AtAvatar>
        <Text className="title">超哥哥的快乐生活</Text>
      </View>
      <AtList>
        <AtListItem
          onClick={() => {
            Taro.navigateTo({ url: "/pages/redpacket/redpacket" });
          }}
          title="我的红包"
          arrow="right"
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        />
        <AtListItem
          title="我的账单"
          arrow="right"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        />
        <AtListItem
          title="我的地址"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
      </AtList>
      <AtList>
        <AtListItem
          onClick={() => {
            Taro.navigateTo({ url: "/pages/kefu/kefu" });
          }}
          title="联系客服"
          arrow="right"
          note="问答、意见反馈、拓展合作"
          thumb={kefuPng}
        />
        {/* <AtListItem
          title="意见反馈"
          note="描述信息"
          arrow="right"
          thumb={feedPng}
        /> */}
        <AtListItem
          onClick={() => {
            Taro.navigateTo({ url: "/pages/aboutus/aboutus" });
          }}
          title="关于小气"
          arrow="right"
          thumb={aboutPng}
        />
      </AtList>
    </View>
  );
}
