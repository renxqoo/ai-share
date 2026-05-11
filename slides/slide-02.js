const { renderSlide } = require("./common");

const slideConfig = {
  type: "agenda",
  index: 2,
  title: "这场分享的主线",
  subtitle: "从怎么用，到为什么能这样用，再到团队怎么放大价值。",
  hero: "AI 不是替你做判断，而是把执行这件事放大了。",
  items: ["工作流", "Agent 原理", "学习方法", "团队实践"],
  descriptions: ["怎么稳定使用", "为什么能行动", "如何持续跟进", "怎么团队落地"],
  note: "从怎么用，到为什么能这样用，再到团队怎么放大价值。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
