const { renderSlide } = require("./common");

const slideConfig = {
  type: "tools",
  index: 12,
  section: "PART 02 / TOOLS",
  title: "LLM 为什么不只是会回答，还能调用工具？",
  subtitle: "LLM 负责决定“调用什么”，外层程序负责真正“把事情做完”。",
  code: `const tools = {
  getWeather: {
    description: "查询指定城市的实时天气",
    execute: ({ city }) => {
      return \`${"${city}"}，晴，25°C，东北风 2 级\`;
    }
  }
};

const call = { name: "getWeather", args: { city: "杭州" } };
const result = tools[call.name].execute(call.args);`,
  items: [
    ["tools", "菜单上有哪些服务可以点"],
    ["name", "点的是哪一项服务"],
    ["args", "这次具体要什么"],
    ["execute()", "后台真正完成服务"],
    ["result", "最后返回给模型的结果"],
  ],
  note: "LLM 更像是在下单，不是在亲自做事。",
};

function createSlide(pres, theme) {
  return renderSlide(pres, theme, slideConfig);
}

module.exports = { createSlide, slideConfig };
