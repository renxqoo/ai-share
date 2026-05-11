const { renderSlide } = require("./common");

const slideConfig = {
  type: "twoColumn",
  index: 7,
  section: "PART 01 / VERIFY",
  title: "人做最后的质量把关",
  subtitle: "AI 加快的是产出速度，人负责最后的质量把关。",
  left: {
    kicker: "CODE REVIEW",
    title: "Code Review",
    body: "风格和架构\n重复逻辑\n安全隐患\n类型严谨性",
  },
  right: {
    kicker: "SELF CHECK",
    title: "功能自测",
    body: "流程完整\n交互流畅\n错误提示\n响应式布局",
  },
  note: "AI 加快的是产出速度，人负责最后的质量把关。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
