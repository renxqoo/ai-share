const { renderSlide } = require("./common");

const slideConfig = {
  type: "divider",
  index: 9,
  part: "PART 02",
  title: "第二部分：AI Agent 的运行原理",
  subtitle: "为什么它看起来像会自己干活？这一部分统一用“查天气”的例子来讲清楚原理。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
