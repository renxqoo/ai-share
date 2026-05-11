const { renderSlide } = require("./common");

const slideConfig = {
  type: "qa",
  index: 18,
  section: "Q&A",
  subtitle: "中间任何部分，如果你想继续展开，我们可以直接往下聊。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
