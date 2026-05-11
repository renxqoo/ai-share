const { renderSlide } = require("./common");

const slideConfig = {
  type: "messages",
  index: 11,
  section: "PART 02 / MESSAGES",
  title: "messages 为什么会越来越长？",
  subtitle: "下一轮不是重新开始，而是把上一轮发生过的事继续带进去。",
  blocks: [
    `第一次传给 LLM

- system:
  你是一个 agent，需要优先使用工具获取实时信息。

- user:
  帮我查一下杭州今天的天气。`,
    `LLM 返回

- tool call:
  name: "getWeather"
  arguments: { city: "杭州" }`,
    `第二次传给 LLM

- system:
  你是一个 agent，需要优先使用工具获取实时信息。

- user:
  帮我查一下杭州今天的天气。

- assistant:
  调用工具 getWeather({ city: "杭州" })

- tool:
  杭州，晴，25°C，东北风 2 级。`,
  ],
  note: "下一轮会把上一轮的 tool call 和工具结果一起带回给 LLM。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
