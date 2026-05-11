const { renderSlide } = require("./common");

const slideConfig = {
  type: "quote",
  index: 13,
  section: "PART 02 / SUMMARY",
  title: "一句话理解 Agent",
  subtitle: "把“会回答”变成“会行动”。",
  quote: "Agent 不是魔法，它只是把“会回答”变成了“会行动”。",
  cards: [
    "每一轮都带着最新上下文重新调用 LLM",
    "LLM 决定是否调用工具",
    "工具结果再回到上下文里进入下一轮",
  ],
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
