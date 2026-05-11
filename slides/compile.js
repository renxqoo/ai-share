const path = require("path");
const pptxgen = require(path.join(__dirname, "..", ".ppt-build", "node_modules", "pptxgenjs"));

const pres = new pptxgen();
pres.defineLayout({ name: "AI_SHARE_16X9", width: 10, height: 5.625 });
pres.layout = "AI_SHARE_16X9";
pres.author = "OpenAI Codex";
pres.company = "AI Share";
pres.subject = "AI 是如何在前端开发流程中应用的";
pres.title = "AI 是如何在前端开发流程中应用的";
pres.lang = "zh-CN";
pres.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN",
};

const theme = {
  primary: "0A0A0A",
  secondary: "0070F3",
  accent: "D4AF37",
  light: "F5F5F5",
  bg: "FFFFFF",
};

for (let i = 1; i <= 18; i += 1) {
  const num = String(i).padStart(2, "0");
  require(`./slide-${num}.js`).createSlide(pres, theme);
}

async function main() {
  const output = path.join(__dirname, "output", "ai-frontend-sharing-v3-regenerated.pptx");
  await pres.writeFile({ fileName: output });
  console.log(output);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
