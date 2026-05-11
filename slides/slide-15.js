const { renderSlide } = require("./common");

const slideConfig = {
  type: "flow",
  index: 15,
  section: "PART 04 / TEAM PRACTICE",
  title: "从代码助手，到业务助手",
  subtitle: "AI 能不能不只是代码助手，还能变成业务助手？",
  steps: ["后端 API", "CLI 命令", "Agent"],
  bodyTitle: "落地方式",
  body: "把已有系统能力，换一种更适合 Agent 调用的暴露方式。",
  note: "把已有系统能力，换一种更适合 Agent 调用的暴露方式。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
