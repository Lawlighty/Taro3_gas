import React, { useState, useEffect } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, RichText } from "@tarojs/components";

export default function QuestionDetails() {
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState("");
  useEffect(() => {
    const params = getCurrentInstance().router.params;
    console.log("params", params);
    Taro.setNavigationBarTitle({
      title: params.title
    });
    setTitle(params.title || "");
    setQuestion(params.question || "");
  }, []);
  return (
    <View>
      <RichText nodes={question} />
    </View>
  );
}
