import React, { useState, useEffect } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./addressAdd.less";
import { AtIcon, AtTag, AtButton, AtInput, AtCheckbox } from "taro-ui";

export default function Address() {
  const [address, setAddress] = useState("科贸中心");
  const [houseNumber, setHouseNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tag, setTag] = useState("-1");

  const [checkedList1, setCheckedList1] = useState(["1"]);
  const [checkedList2, setCheckedList2] = useState([]);

  const [checkboxOption1, setCheckboxOption1] = useState([
    {
      value: "1",
      label: "先生"
    }
  ]);
  const [checkboxOption2, setCheckboxOption2] = useState([
    {
      value: "0",
      label: "女士"
    }
  ]);
  const [tagList, setTagList] = useState([
    {
      value: "0",
      label: "自己"
    },
    {
      value: "1",
      label: "父母"
    },
    {
      value: "2",
      label: "公婆"
    },
    {
      value: "3",
      label: "爷奶"
    }
  ]);
  return (
    <View>
      <View className="page">
        <View className="items border_b">
          <View className="title">地址</View>
          <View
            className="info"
            onClick={() => {
              console.log("去选择地址");
              Taro.navigateTo({ url: "/pages/addressChose/addressChose" });
            }}
          >
            <Text>科贸中心</Text>
          </View>
          <View
            className="icon"
            onClick={() => {
              console.log("去选择地址");
              Taro.navigateTo({ url: "/pages/addressChose/addressChose" });
            }}
          >
            <AtIcon value="chevron-right" size="20" color="#999"></AtIcon>
          </View>
        </View>
        <View className="items border_b">
          <View className="title">门牌号</View>
          <View className="info">
            <AtInput
              name="houseNumber"
              type="text"
              placeholder="单元、门牌号,如 4单元 305"
              value={houseNumber}
              onChange={e => {
                setHouseNumber(e);
              }}
            />
          </View>
          {/* <View className="icon">
          <AtIcon value="chevron-right" size="20" color="#999"></AtIcon>
        </View> */}
        </View>
        <View className="items border_b">
          <View className="title ">联系人</View>
          <View className="info ">
            <AtInput
              name="name"
              type="text"
              placeholder="姓名"
              value={name}
              onChange={e => {
                setName(e);
              }}
            />
          </View>
          <View className="icon ">
            <AtIcon value="iphone-x" size="20" color="#999"></AtIcon>
          </View>
        </View>
        <View className="items border_b">
          <View className="title "></View>
          <View className="info flex">
            <AtCheckbox
              options={checkboxOption1}
              selectedList={checkedList1}
              onChange={e => {
                console.log("e check==>", e);
                if (e.length) {
                  setCheckedList1(e);
                  setCheckedList2([]);
                }
              }}
            />
            <AtCheckbox
              options={checkboxOption2}
              selectedList={checkedList2}
              onChange={e => {
                console.log("e check==>", e);
                if (e.length) {
                  setCheckedList1([]);
                  setCheckedList2(e);
                }
              }}
            />
          </View>
          <View className="icon "></View>
        </View>
        <View className="items border_b">
          <View className="title ">电话</View>
          <View className="info ">
            <AtInput
              name="phone"
              type="phone"
              placeholder="手机号"
              value={phone}
              onChange={e => {
                setPhone(e);
              }}
            />
          </View>
          <View className="icon "></View>
        </View>
        <View className="items">
          <View className="title ">标签</View>
          <View className="info ">
            {tagList.map((item, index) => (
              <AtTag
                name={item.value}
                key={index}
                size="small"
                // active={tag === item.value}
                className={tag === item.value ? "tag_y tag" : "tag"}
                onClick={e => {
                  console.log("e", e);
                  console.log("tag", tag);
                  if (tag == "-1" || tag != e.name) {
                    setTag(e.name);
                  } else {
                    setTag("-1");
                  }
                }}
              >
                {item.label}
              </AtTag>
            ))}
          </View>
          <View className="icon "></View>
        </View>
        <View>
          <AtButton type="primary" className="yellow" disabled={!phone}>
            保存并使用
          </AtButton>
        </View>
      </View>
      <View className="page2"></View>
      <View className="page">
        <View className="address_items">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View className="address_item" key={index}>
              <View className="left_item">
                <View className="left">
                  <Text>浙江省绍兴市越城区 世贸...</Text>

                  <AtTag
                    size="small"
                    className={
                      index % 4 === 0
                        ? "tag_g"
                        : index % 3 === 0
                        ? "tag_b"
                        : index % 2 === 0
                        ? "tag_p"
                        : "tag_y"
                    }
                    active
                  >
                    {index % 4 === 0
                      ? "自己"
                      : index % 3 === 0
                      ? "父母"
                      : index % 2 === 0
                      ? "公婆"
                      : "爷奶"}
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
      </View>
    </View>
  );
}
