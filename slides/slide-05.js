const { renderSlide } = require("./common");

const slideConfig = {
  type: "twoColumn",
  index: 5,
  section: "PART 01 / PLAN",
  title: "PLAN：先出计划，不先写代码",
  subtitle: "先看清方向，再让 AI 动手。",
  left: {
    kicker: "INPUT",
    title: "先给 Agent 三样东西",
    body: "需求描述\nPRD 原文\n约束条件",
  },
  right: {
    kicker: "OUTPUT",
    title: "Agent 输出实现计划",
    body: "任务拆解\n关键文件\n架构权衡\n实施步骤",
  },
  note: "先看清方向，再让 AI 动手。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
