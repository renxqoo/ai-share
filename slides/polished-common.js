const CN = "Microsoft YaHei";
const EN = "Aptos";
const CODE = "Consolas";

const C = {
  orange: "FF5B01",
  orangeSoft: "FFF1E8",
  ink: "201D1B",
  dark: "121211",
  black: "000000",
  white: "FFFFFF",
  paper: "F9F9F9",
  border: "E5E6EB",
  muted: "A4A9B3",
  blueGray: "99A5B6",
  footerLine: "313131",
};

function sh(pres, name) {
  return pres.ShapeType ? pres.ShapeType[name] : name;
}

function isSection(index) {
  return [9, 13, 17].includes(index);
}

function isDark(index) {
  return isSection(index);
}

function addPageNum(slide, data, dark) {
  if (data.index === 1) return;
  slide.addText(String(data.index).padStart(2, "0"), {
    x: 9.25,
    y: 5.08,
    w: 0.36,
    h: 0.12,
    margin: 0,
    fontFace: EN,
    fontSize: 9,
    bold: true,
    color: dark ? C.muted : C.blueGray,
    align: "right",
  });
}

function addTopMeta(slide, pres, data, dark) {
  if (data.index === 1 || isSection(data.index)) return;
  slide.addText("AI FRONTEND SHARING", {
    x: 0.6,
    y: 0.32,
    w: 2.25,
    h: 0.1,
    margin: 0,
    fontFace: EN,
    fontSize: 8.2,
    bold: true,
    color: C.blueGray,
    fit: "shrink",
  });
  slide.addShape(sh(pres, "roundRect"), {
    x: 7.55,
    y: 0.25,
    w: 1.55,
    h: 0.24,
    rectRadius: 0.05,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orangeSoft },
  });
  slide.addText(data.section || "OVERVIEW", {
    x: 7.62,
    y: 0.325,
    w: 1.42,
    h: 0.08,
    margin: 0,
    fontFace: EN,
    fontSize: 6.7,
    bold: true,
    color: C.orange,
    align: "center",
    fit: "shrink",
  });
  slide.addShape(sh(pres, "line"), {
    x: 0.6,
    y: 5.0,
    w: 8.5,
    h: 0,
    line: { color: dark ? C.footerLine : C.border, pt: 0.5 },
  });
}

function setup(slide, pres, data) {
  const dark = isDark(data.index);
  slide.background = { color: dark ? C.dark : C.white };
  addTopMeta(slide, pres, data, dark);
  addPageNum(slide, data, dark);
  return dark;
}

function addTitle(slide, data, dark, opts = {}) {
  slide.addText(data.title || "", {
    x: opts.x ?? 0.78,
    y: opts.y ?? 0.82,
    w: opts.w ?? 8.0,
    h: opts.h ?? 0.5,
    margin: 0,
    fontFace: CN,
    fontSize: opts.size ?? 25,
    bold: true,
    color: opts.color || (dark ? C.white : C.ink),
    fit: "shrink",
    breakLine: false,
  });
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: opts.subX ?? 0.82,
      y: opts.subY ?? 1.36,
      w: opts.subW ?? 7.7,
      h: opts.subH ?? 0.24,
      margin: 0,
      fontFace: CN,
      fontSize: opts.subSize ?? 10.8,
      color: opts.subColor || (dark ? C.muted : C.blueGray),
      fit: "shrink",
      breakLine: false,
    });
  }
}

function tag(slide, text, x, y, w = 1.15) {
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h: 0.28,
    rectRadius: 0.05,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText(text, {
    x,
    y: y + 0.08,
    w,
    h: 0.08,
    margin: 0,
    fontFace: EN,
    fontSize: 7.5,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
}

function card(slide, pres, x, y, w, h, dark, opts = {}) {
  slide.addShape(sh(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    line: { color: opts.line || (dark ? C.footerLine : C.border), pt: 0.7 },
    fill: { color: opts.fill || (dark ? C.black : C.paper) },
  });
  if (opts.accent) {
    slide.addShape(sh(pres, "rect"), {
      x,
      y,
      w: 0.06,
      h,
      line: { color: C.orange, transparency: 100 },
      fill: { color: C.orange },
    });
  }
  if (opts.kicker) {
    slide.addText(opts.kicker, {
      x: x + 0.2,
      y: y + 0.15,
      w: w - 0.4,
      h: 0.09,
      margin: 0,
      fontFace: EN,
      fontSize: 7.8,
      bold: true,
      color: C.orange,
      fit: "shrink",
    });
  }
  if (opts.title) {
    slide.addText(opts.title, {
      x: x + 0.2,
      y: opts.titleY ?? y + (opts.kicker ? 0.36 : 0.2),
      w: w - 0.4,
      h: opts.titleH ?? 0.18,
      margin: 0,
      fontFace: CN,
      fontSize: opts.titleSize ?? 12,
      bold: true,
      color: opts.titleColor || (dark ? C.white : C.ink),
      fit: "shrink",
      breakLine: false,
    });
  }
  if (opts.body) {
    slide.addText(opts.body, {
      x: x + 0.2,
      y: opts.bodyY ?? y + 0.62,
      w: w - 0.4,
      h: opts.bodyH ?? h - 0.76,
      margin: 0,
      fontFace: opts.bodyFont || CN,
      fontSize: opts.bodySize ?? 9.6,
      color: opts.bodyColor || (dark ? C.muted : C.blueGray),
      fit: "shrink",
      valign: "top",
      breakLine: false,
    });
  }
}

function arrow(slide, pres, x1, y1, x2, y2, color = C.orange, pt = 1.8) {
  slide.addShape(sh(pres, "line"), {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: { color, pt, endArrowType: "triangle" },
  });
}

function codeBlock(slide, pres, text, x, y, w, h, dark, size = 7.8) {
  slide.addShape(sh(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    line: { color: dark ? C.footerLine : C.border, pt: 0.7 },
    fill: { color: dark ? C.black : C.paper },
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + 0.18,
    w: w - 0.36,
    h: h - 0.36,
    margin: 0,
    fontFace: CODE,
    fontSize: size,
    color: dark ? C.white : C.ink,
    fit: "shrink",
    valign: "top",
    breakLine: false,
  });
}

function renderCover(slide, pres, data) {
  slide.background = { color: C.white };
  slide.addShape(sh(pres, "rect"), {
    x: 0,
    y: 0,
    w: 10,
    h: 0.18,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText("AI FRONTEND SHARING", {
    x: 0.78,
    y: 0.62,
    w: 2.7,
    h: 0.11,
    margin: 0,
    fontFace: EN,
    fontSize: 9,
    bold: true,
    color: C.orange,
    fit: "shrink",
  });
  slide.addText(data.title, {
    x: 0.78,
    y: 1.25,
    w: 6.7,
    h: 1.05,
    margin: 0,
    fontFace: CN,
    fontSize: 31,
    bold: true,
    color: C.ink,
    fit: "shrink",
    breakLine: false,
  });
  slide.addText(data.subtitle, {
    x: 0.82,
    y: 2.58,
    w: 5.8,
    h: 0.28,
    margin: 0,
    fontFace: CN,
    fontSize: 13,
    color: C.blueGray,
    fit: "shrink",
  });
  tag(slide, "PLAN", 0.82, 3.35, 0.8);
  tag(slide, "EXECUTE", 1.78, 3.35, 1.05);
  tag(slide, "VERIFY", 3.0, 3.35, 0.95);
  slide.addShape(sh(pres, "roundRect"), {
    x: 7.1,
    y: 1.1,
    w: 1.55,
    h: 3.05,
    rectRadius: 0.08,
    line: { color: C.border, pt: 0.7 },
    fill: { color: C.paper },
  });
  slide.addShape(sh(pres, "rect"), {
    x: 7.1,
    y: 1.1,
    w: 0.16,
    h: 3.05,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText("01\nPEV\n02\nAgent\n03\nTeam", {
    x: 7.48,
    y: 1.55,
    w: 0.85,
    h: 2.1,
    margin: 0,
    fontFace: EN,
    fontSize: 13,
    bold: true,
    color: C.ink,
    align: "center",
    fit: "shrink",
    breakLine: false,
  });
  slide.addShape(sh(pres, "rect"), {
    x: 0.78,
    y: 4.78,
    w: 8.4,
    h: 0.01,
    line: { color: C.border, pt: 0.7 },
  });
  slide.addText(data.footer, {
    x: 0.82,
    y: 4.98,
    w: 6.5,
    h: 0.24,
    margin: 0,
    fontFace: CN,
    fontSize: 9.5,
    color: C.blueGray,
    fit: "shrink",
    breakLine: false,
  });
}

function renderAgenda(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 27 });
  slide.addText(data.hero, {
    x: 0.82,
    y: 1.78,
    w: 7.8,
    h: 0.34,
    margin: 0,
    fontFace: CN,
    fontSize: 18,
    bold: true,
    color: C.ink,
    fit: "shrink",
  });
  data.items.forEach((item, i) => {
    const x = 0.82 + i * 2.15;
    card(slide, pres, x, 2.55, 1.68, 1.0, dark, {
      kicker: String(i + 1).padStart(2, "0"),
      title: item,
      body: data.descriptions?.[i],
      bodyY: 3.1,
      bodyH: 0.18,
      bodySize: 8.5,
      accent: true,
    });
  });
  slide.addText(data.note, {
    x: 0.86,
    y: 4.26,
    w: 7.7,
    h: 0.16,
    margin: 0,
    fontFace: CN,
    fontSize: 10.5,
    color: C.blueGray,
    fit: "shrink",
  });
}

function renderCards(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: data.index === 14 ? 25 : 26 });
  const cols = data.columns || 2;
  data.cards.forEach((item, i) => {
    const x = cols === 3 ? 0.78 + i * 2.95 : 0.82 + (i % 2) * 4.18;
    const y = cols === 3 ? 2.2 : 1.95 + Math.floor(i / 2) * 1.08;
    card(slide, pres, x, y, cols === 3 ? 2.45 : 3.62, item.h || 0.82, dark, {
      kicker: item.kicker,
      title: item.title,
      body: item.body,
      bodyY: item.bodyY || y + 0.46,
      bodyH: item.bodyH || 0.22,
      bodySize: item.bodySize || 9.2,
      accent: true,
    });
  });
  if (data.note) {
    slide.addText(data.note, {
      x: 0.86,
      y: 4.42,
      w: 8.0,
      h: 0.16,
      margin: 0,
      fontFace: CN,
      fontSize: 10.8,
      bold: true,
      color: C.orange,
      align: "center",
      fit: "shrink",
    });
  }
}

function renderFlow(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: data.steps.length > 3 ? 24 : 29 });
  const total = data.steps.length * 1.38 + (data.steps.length - 1) * 0.48;
  const start = (10 - total) / 2;
  data.steps.forEach((step, i) => {
    const x = start + i * 1.86;
    card(slide, pres, x, data.y || 2.25, 1.38, 0.78, dark, {
      title: step,
      titleSize: data.steps.length > 3 ? 10.2 : 12.5,
      titleY: (data.y || 2.25) + 0.25,
      titleH: 0.18,
      fill: i === 0 || i === data.steps.length - 1 ? C.orangeSoft : C.paper,
      line: i === 0 || i === data.steps.length - 1 ? C.orange : C.border,
    });
    if (i < data.steps.length - 1) arrow(slide, pres, x + 1.42, (data.y || 2.25) + 0.39, x + 1.8, (data.y || 2.25) + 0.39);
  });
  if (data.body) {
    slide.addText(data.body, {
      x: 1.15,
      y: 3.66,
      w: 7.7,
      h: 0.38,
      margin: 0,
      fontFace: CN,
      fontSize: 14.5,
      bold: true,
      color: C.ink,
      align: "center",
      fit: "shrink",
    });
  }
  if (data.note) tag(slide, data.note, 3.55, 4.32, 2.9);
}

function renderTwoColumn(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 26 });
  card(slide, pres, 0.82, 2.0, 3.95, 2.02, dark, {
    kicker: data.left.kicker,
    title: data.left.title,
    body: data.left.body,
    bodyY: 2.68,
    bodyH: 0.95,
    bodySize: 10.8,
    accent: true,
  });
  card(slide, pres, 5.18, 2.0, 3.95, 2.02, dark, {
    kicker: data.right.kicker,
    title: data.right.title,
    body: data.right.body,
    bodyY: 2.68,
    bodyH: 0.95,
    bodySize: 10.8,
    accent: true,
  });
  if (data.note) {
    slide.addText(data.note, {
      x: 0.9,
      y: 4.4,
      w: 8.1,
      h: 0.16,
      margin: 0,
      fontFace: CN,
      fontSize: 10.8,
      bold: true,
      color: C.orange,
      align: "center",
      fit: "shrink",
    });
  }
}

function renderLanes(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 27 });
  data.lanes.forEach((lane, i) => {
    const y = 1.92 + i * 0.78;
    tag(slide, String(i + 1).padStart(2, "0"), 0.82, y + 0.04, 0.48);
    slide.addText(lane.title, {
      x: 1.55,
      y: y + 0.02,
      w: 1.65,
      h: 0.16,
      margin: 0,
      fontFace: CN,
      fontSize: 13,
      bold: true,
      color: C.ink,
      fit: "shrink",
    });
    slide.addText(lane.body, {
      x: 3.25,
      y,
      w: 5.2,
      h: 0.34,
      margin: 0,
      fontFace: CN,
      fontSize: 10,
      color: C.blueGray,
      fit: "shrink",
      breakLine: false,
    });
  });
  slide.addText(data.note, {
    x: 0.9,
    y: 4.42,
    w: 8.0,
    h: 0.18,
    margin: 0,
    fontFace: CN,
    fontSize: 11,
    bold: true,
    color: C.orange,
    fit: "shrink",
  });
}

function renderDivider(slide, pres, data) {
  slide.background = { color: C.dark };
  slide.addShape(sh(pres, "rect"), {
    x: 0,
    y: 0,
    w: 0.18,
    h: 5.625,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText(data.part, {
    x: 0.78,
    y: 1.0,
    w: 1.6,
    h: 0.18,
    margin: 0,
    fontFace: EN,
    fontSize: 12,
    bold: true,
    color: C.orange,
  });
  slide.addText(data.title, {
    x: 0.78,
    y: 1.62,
    w: 7.1,
    h: 0.68,
    margin: 0,
    fontFace: CN,
    fontSize: 29,
    bold: true,
    color: C.white,
    fit: "shrink",
  });
  slide.addText(data.subtitle, {
    x: 0.82,
    y: 2.65,
    w: 6.6,
    h: 0.36,
    margin: 0,
    fontFace: CN,
    fontSize: 12,
    color: C.muted,
    fit: "shrink",
  });
  slide.addText(String(data.index).padStart(2, "0"), {
    x: 8.4,
    y: 4.48,
    w: 0.6,
    h: 0.2,
    margin: 0,
    fontFace: EN,
    fontSize: 16,
    bold: true,
    color: C.orange,
    align: "right",
  });
}

function renderCodeFlow(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 25 });
  codeBlock(slide, pres, data.code, 0.78, 1.78, 4.28, 2.72, dark, 8);
  ["读取当前上下文", "调用 LLM 判断下一步", "是否需要调用工具？", "执行工具", "返回结果"].forEach((node, i) => {
    const pos = [[5.48, 1.82, 3.25], [5.48, 2.44, 3.25], [5.48, 3.06, 3.25], [5.48, 3.78, 1.55], [7.18, 3.78, 1.55]][i];
    card(slide, pres, pos[0], pos[1], pos[2], 0.44, dark, {
      title: node,
      titleY: pos[1] + 0.14,
      titleH: 0.1,
      titleSize: 9.5,
      fill: i === 2 ? C.orangeSoft : C.paper,
      line: i === 2 ? C.orange : C.border,
    });
  });
  arrow(slide, pres, 7.1, 2.26, 7.1, 2.42);
  arrow(slide, pres, 7.1, 2.88, 7.1, 3.04);
  arrow(slide, pres, 6.6, 3.52, 6.25, 3.76);
  arrow(slide, pres, 7.55, 3.52, 7.95, 3.76);
  slide.addText(data.note, {
    x: 0.9,
    y: 4.68,
    w: 8.0,
    h: 0.15,
    margin: 0,
    fontFace: CN,
    fontSize: 10,
    color: C.blueGray,
    align: "center",
    fit: "shrink",
  });
}

function renderMessages(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 25.5 });
  data.blocks.forEach((block, i) => codeBlock(slide, pres, block, 0.65 + i * 3.03, 1.72, 2.68, 2.82, dark, 7));
  slide.addText(data.note, {
    x: 0.92,
    y: 4.68,
    w: 8.0,
    h: 0.15,
    margin: 0,
    fontFace: CN,
    fontSize: 10,
    color: C.blueGray,
    align: "center",
    fit: "shrink",
  });
}

function renderTools(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 24 });
  codeBlock(slide, pres, data.code, 0.78, 1.78, 4.2, 2.6, dark, 7.6);
  card(slide, pres, 5.28, 1.78, 3.82, 2.6, dark, {
    kicker: "MENU",
    title: "tools 是一张菜单",
    fill: C.paper,
    line: C.border,
    accent: true,
  });
  data.items.forEach((item, i) => {
    slide.addText(item[0], {
      x: 5.62,
      y: 2.42 + i * 0.31,
      w: 0.8,
      h: 0.1,
      margin: 0,
      fontFace: CODE,
      fontSize: 8.4,
      bold: true,
      color: C.orange,
      fit: "shrink",
    });
    slide.addText(item[1], {
      x: 6.55,
      y: 2.42 + i * 0.31,
      w: 2.15,
      h: 0.1,
      margin: 0,
      fontFace: CN,
      fontSize: 8.4,
      color: C.blueGray,
      fit: "shrink",
    });
  });
  slide.addText(data.note, {
    x: 0.95,
    y: 4.65,
    w: 8.0,
    h: 0.16,
    margin: 0,
    fontFace: CN,
    fontSize: 10.8,
    bold: true,
    color: C.orange,
    align: "center",
    fit: "shrink",
  });
}

function renderQuote(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 27, subColor: C.muted });
  slide.addText(data.quote, {
    x: 1.0,
    y: 2.05,
    w: 8.0,
    h: 0.45,
    margin: 0,
    fontFace: CN,
    fontSize: 20,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
  data.cards.forEach((item, i) => {
    card(slide, pres, 1.05 + i * 2.62, 3.28, 2.2, 0.76, dark, {
      kicker: String(i + 1).padStart(2, "0"),
      body: item,
      bodyY: 3.62,
      bodyH: 0.22,
      bodySize: 8.6,
      fill: C.black,
      line: C.footerLine,
    });
  });
}

function renderClosing(slide, pres, data) {
  const dark = setup(slide, pres, data);
  addTitle(slide, data, dark, { size: 27 });
  slide.addText(data.quote, {
    x: 1.0,
    y: 2.02,
    w: 8.0,
    h: 0.5,
    margin: 0,
    fontFace: CN,
    fontSize: 21,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
  data.items.forEach((item, i) => tag(slide, item, 1.05 + i * 2.62, 3.38, 2.05));
}

function renderQA(slide, pres, data) {
  setup(slide, pres, data);
  slide.addText("Q&A", {
    x: 0,
    y: 1.42,
    w: 10,
    h: 0.75,
    margin: 0,
    fontFace: EN,
    fontSize: 44,
    bold: true,
    color: C.ink,
    align: "center",
  });
  slide.addText(data.subtitle, {
    x: 1.15,
    y: 2.48,
    w: 7.7,
    h: 0.22,
    margin: 0,
    fontFace: CN,
    fontSize: 13,
    color: C.blueGray,
    align: "center",
    fit: "shrink",
  });
  tag(slide, "谢谢大家", 4.15, 3.42, 1.65);
}

function renderPolishedSlide(pres, data) {
  const slide = pres.addSlide();
  if (data.type === "cover") renderCover(slide, pres, data);
  if (data.type === "agenda") renderAgenda(slide, pres, data);
  if (data.type === "cards") renderCards(slide, pres, data);
  if (data.type === "flow") renderFlow(slide, pres, data);
  if (data.type === "twoColumn") renderTwoColumn(slide, pres, data);
  if (data.type === "lanes") renderLanes(slide, pres, data);
  if (data.type === "divider") renderDivider(slide, pres, data);
  if (data.type === "codeFlow") renderCodeFlow(slide, pres, data);
  if (data.type === "messages") renderMessages(slide, pres, data);
  if (data.type === "tools") renderTools(slide, pres, data);
  if (data.type === "quote") renderQuote(slide, pres, data);
  if (data.type === "closing") renderClosing(slide, pres, data);
  if (data.type === "qa") renderQA(slide, pres, data);
  return slide;
}

module.exports = { renderPolishedSlide, C };
