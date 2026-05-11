const { renderSlide } = require("./common");

const slideConfig = {
  type: "cards",
  index: 3,
  section: "PART 01 / WORKFLOW",
  title: "为什么不能一上来就让 AI 直接写？",
  subtitle: "很多时候，问题不是 AI 完全不会做，而是它很容易做得“像对的一样”。",
  cards: [
    { title: "自信地写错", body: "看起来很完整，但关键细节可能是错的。" },
    { title: "重复造轮子", body: "没有读到项目里已经存在的能力。" },
    { title: "漏看上下文", body: "只改眼前文件，遗漏连带影响。" },
    { title: "能跑，但难维护", body: "短期通过，长期给团队留下维护成本。" },
  ],
  note: "所以我们需要一套流程，不是为了拖慢 AI，而是为了把风险控制住。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
