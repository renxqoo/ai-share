const { renderSlide } = require("./common");

const slideConfig = {
  type: "lanes",
  index: 6,
  section: "PART 01 / APPROVE",
  title: "确认方案后，再放行执行",
  subtitle: "先把方案看对、想全、调顺，再让 AI 开始写代码。",
  lanes: [
    { title: "先审查计划", body: "步骤是否合理\n场景是否遗漏\n范围是否清楚" },
    { title: "再给反馈", body: "提出疑问\n调整方案\n补充需求" },
    { title: "最后放行执行", body: "AI 开始写代码\n按规则执行\n写完补测试并跑校验" },
  ],
  note: "先把方案看对、想全、调顺，再放行执行。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
