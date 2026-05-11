const { renderSlide } = require("./common");

const slideConfig = {
  type: "twoColumn",
  index: 16,
  section: "PART 04 / START SMALL",
  title: "建议从低风险场景开始",
  subtitle: "先从查询类、低写入风险场景开始试点。",
  left: {
    kicker: "自然语言交互示例",
    title: "业务同学怎么问",
    body: "“查一下今天有多少笔待审批的付款”\n“把金额最大的那笔详情给我看”\n“这笔交易的汇率是多少”",
  },
  right: {
    kicker: "下一步",
    title: "落地顺序",
    body: "1. 先做查询类 CLI\n2. 打通权限体系\n3. 留好审计日志\n4. 再逐步扩展复杂操作",
  },
  note: "先做低风险试点，再逐步扩展复杂操作。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
