const { renderSlide } = require("./common");

const slideConfig = {
  type: "flow",
  index: 8,
  section: "PART 01 / BUG LOOP",
  title: "发现 Bug 后，不是直接修，而是先写红测",
  subtitle: "先复现，再修复；修 Bug 不靠感觉，靠可重复验证的闭环。",
  steps: ["发现 Bug", "写失败测试", "修代码", "测试通过", "回到 Verify"],
  y: 2.2,
  bodyTitle: "闭环原则",
  body: "先复现，再修复。修 Bug 不靠感觉，靠可重复验证的闭环。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
