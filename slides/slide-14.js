const { renderSlide } = require("./common");

const slideConfig = {
  type: "cards",
  index: 14,
  section: "PART 03 / LEARNING",
  title: "怎么持续跟进 AI 变化",
  subtitle: "不是追所有变化，而是建立感知，然后在需要的时候快速深入。",
  columns: 3,
  cards: [
    { kicker: "01", title: "GitHub Trending", body: "保持感知，知道社区正在关注什么。", h: 1.45 },
    { kicker: "02", title: "AI 辅助读源码", body: "让 AI 帮你找入口、理结构、解释实现。", h: 1.45 },
    { kicker: "03", title: "高质量信息源", body: "固定关注官方文档、changelog 和社区精选。", h: 1.45 },
  ],
  note: "不是追所有变化，而是建立感知，然后在需要的时候快速深入。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
