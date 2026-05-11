const { renderSlide } = require("./common");

const slideConfig = {
  type: "codeFlow",
  index: 10,
  section: "PART 02 / LOOP",
  title: "Agent 是怎么一轮轮工作的？",
  subtitle: "左边看 TS 伪代码，右边看一轮循环。",
  code: `while (!taskComplete) {
  const response = LLM(messages, tools); // 判断下一步

  if (response.toolCalls) {
    const results = executeTools(response.toolCalls); // 执行工具
    messages.push(...results); // 结果回到上下文
  } else {
    return response.content; // 输出最终答案
  }
}`,
  note: "Agent 不是一次性把答案想完，而是带着最新上下文一轮轮继续判断和执行。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
