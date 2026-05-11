const { renderSlide } = require("./common");

const slideConfig = {
  type: "cover",
  index: 1,
  title: "AI 是如何在前端开发流程中应用的",
  subtitle: "从个人工作流，到 Agent 原理，再到团队实践",
  footer: "分享人：XXX\n面向：产品 / 前端 / 后端 / 测试 / 设计 / 技术负责人",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
