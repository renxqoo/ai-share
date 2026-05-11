const { renderSlide } = require("./common");

const slideConfig = {
  type: "flow",
  index: 4,
  section: "PART 01 / PEV",
  title: "PEV 工作流",
  subtitle: "先想清楚，再让它做，最后认真验。",
  steps: ["Plan\n计划", "Execute\n执行", "Verify\n验证"],
  bodyTitle: "一句话",
  body: "先想清楚，再让它做，最后认真验。人做决策，AI 做执行。",
  note: "人做决策，AI 做执行。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
