import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Map, Image } from "@tarojs/components";
import {
  AtButton,
  AtCurtain,
  AtNoticebar,
  AtCard,
  AtIcon,
  AtInput,
  AtFloatLayout,
  AtList,
  AtListItem
} from "taro-ui";

import curtainPng from "@/asset/ads/curtain.png";
import addTargetPng from "@/asset/address/address.png";
import userPng from "@/asset/tabs/mine.png";
// import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";
const Index = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [isShowNot, setIsShowNot] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);

  //地址
  const [address, setAddress] = useState<string>("");
  const mapKye = Taro.getApp().mapKye;
  useEffect(() => {
    Taro.getLocation({
      type: "gcj02", //返回可以用于 Taro.openLocation的经纬度
      success: function(res) {
        console.log("getLocation", res);
        const latitude = res.latitude;
        const longitude = res.longitude;
        setLatitude(res.latitude);
        setLongitude(res.longitude);
        //打开微信内置地图
        // Taro.openLocation({
        //   latitude,
        //   longitude,
        //   scale: 18
        // });
      }
    });
  }, []);

  const onCloseOpen = () => {
    setIsOpened(false);
  };
  return (
    <View className="index">
      <AtCurtain isOpened={isOpened} onClose={onCloseOpen}>
        <Image style="width:100%;height:250px" src={curtainPng} />
      </AtCurtain>
      {isShowNot && (
        <AtNoticebar
          icon="volume-plus"
          marquee
          showMore
          close={isShowNot}
          onClose={() => {
            setIsShowNot(false);
          }}
        >
          自来气集体村已覆盖!更多区域尽情期待~
        </AtNoticebar>
      )}
      <View className="my_local_map_div">
        <Map
          className="my_local_map"
          // subkey="PLSBZ-272HR-LXUWZ-W5Q4K-XXLXE-LWF66"
          subkey={mapKye}
          show-location
          latitude={latitude}
          longitude={longitude}
        ></Map>
      </View>
      <View className="location_card">
        <AtCard
          note="小Tips"
          extra="选择地址信息"
          title="告诉小气取货地址"
          thumb={addTargetPng}
        >
          <View className="input_row">
            <AtInput
              className="input_row_1"
              name="value"
              type="text"
              placeholder="从哪儿取件"
              value={address}
              onChange={e => {
                setAddress(e);
              }}
            />
            <Image src={userPng} />
          </View>
        </AtCard>
      </View>

      <View
        className={showMore ? "modal_over" : ""}
        onClick={() => {
          setShowMore(false);
        }}
      ></View>
      <View className="bottom_tab_div">
        <View className={showMore ? "myview active" : "myview"}>
          <View className="myview_inner">
            <View className="myview_inner_title">
              <Text>费用明细</Text>
            </View>
            <AtList>
              <AtListItem title="基础费用" extraText="￥80" />
              <AtListItem title="配送费用" extraText="￥10" />
            </AtList>
          </View>
        </View>

        <View className="bottom_tab">
          <View className="left_div">
            <View className="left_div">
              <Text className="tip">总价</Text>
              <Text className="price">￥105</Text>
            </View>
            <Text
              className="look_more"
              onClick={() => {
                console.log("showmore", showMore);
                setShowMore(!showMore);
              }}
            >
              明细{" "}
              <AtIcon
                className="look_more_icon"
                value={showMore ? "chevron-up" : "chevron-down"}
                size="30"
                color="#F00"
              ></AtIcon>
            </Text>
          </View>

          <AtButton className="send_btn">提交订单</AtButton>
          {/* <AtFloatLayout
          isOpened={showMore}
          title="这是个标题"
          onClose={() => {
            console.log("showmore", showMore);
            setShowMore(!showMore);
          }}
        >
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写
        </AtFloatLayout> */}
        </View>
      </View>
    </View>
  );
};
export default Index;
