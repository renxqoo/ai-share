const { renderSlide } = require("./common");

const slideConfig = {
  type: "closing",
  index: 17,
  section: "CLOSING",
  title: "最后想留给大家的一句话",
  quote: "AI 能放大你的能力，但不能替代你的判断。",
  items: [
    "工具会越来越强",
    "速度会越来越快",
    "结果质量仍然取决于人的判断、规则和把关",
  ],
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
