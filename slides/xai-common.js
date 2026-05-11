const MONO = "Consolas";
const SANS = "Microsoft YaHei";

const C = {
  bg: "1F2228",
  white: "FFFFFF",
};

function shape(pres, name) {
  return pres.ShapeType ? pres.ShapeType[name] : name;
}

function opacityColor(hex, transparency) {
  return { color: hex, transparency };
}

function addFrame(slide, pres, data) {
  slide.background = { color: C.bg };
  slide.addText("AI FRONTEND", {
    x: 0.55,
    y: 0.38,
    w: 1.8,
    h: 0.12,
    margin: 0,
    fontFace: MONO,
    fontSize: 8.5,
    color: C.white,
    fit: "shrink",
    charSpace: 1.2,
  });
  if (data.index > 1) {
    slide.addText(String(data.index).padStart(2, "0"), {
      x: 9.1,
      y: 0.38,
      w: 0.4,
      h: 0.12,
      margin: 0,
      fontFace: MONO,
      fontSize: 8.5,
      color: C.white,
      transparency: 45,
      align: "right",
    });
  }
  slide.addShape(shape(pres, "line"), {
    x: 0.55,
    y: 0.72,
    w: 8.9,
    h: 0,
    line: { color: C.white, pt: 0.5, transparency: 88 },
  });
  slide.addShape(shape(pres, "line"), {
    x: 0.55,
    y: 5.02,
    w: 8.9,
    h: 0,
    line: { color: C.white, pt: 0.5, transparency: 88 },
  });
}

function text(slide, value, opts) {
  slide.addText(value, {
    margin: 0,
    fontFace: opts.font || SANS,
    fontSize: opts.size || 14,
    bold: false,
    color: C.white,
    transparency: opts.transparency || 0,
    x: opts.x,
    y: opts.y,
    w: opts.w,
    h: opts.h,
    align: opts.align,
    valign: opts.valign,
    fit: "shrink",
    breakLine: false,
    charSpace: opts.charSpace,
  });
}

function title(slide, data, opts = {}) {
  text(slide, data.title || "", {
    x: opts.x ?? 0.75,
    y: opts.y ?? 1.05,
    w: opts.w ?? 8.4,
    h: opts.h ?? 0.54,
    font: opts.font || SANS,
    size: opts.size || 24,
  });
  if (data.subtitle) {
    text(slide, data.subtitle, {
      x: opts.subX ?? 0.78,
      y: opts.subY ?? 1.68,
      w: opts.subW ?? 7.5,
      h: opts.subH ?? 0.22,
      size: opts.subSize || 10.5,
      transparency: 30,
    });
  }
}

function tag(slide, pres, label, x, y, w = 1.05) {
  slide.addShape(shape(pres, "rect"), {
    x,
    y,
    w,
    h: 0.28,
    line: { color: C.white, pt: 0.6, transparency: 78 },
    fill: { color: C.bg, transparency: 100 },
  });
  text(slide, label.toUpperCase(), {
    x,
    y: y + 0.09,
    w,
    h: 0.08,
    font: MONO,
    size: 7.2,
    align: "center",
    charSpace: 1.2,
  });
}

function card(slide, pres, x, y, w, h, opts = {}) {
  slide.addShape(shape(pres, "rect"), {
    x,
    y,
    w,
    h,
    line: { color: C.white, pt: 0.6, transparency: opts.strong ? 78 : 90 },
    fill: { color: C.white, transparency: opts.fill ? 96 : 100 },
  });
  if (opts.kicker) {
    text(slide, opts.kicker, {
      x: x + 0.18,
      y: y + 0.16,
      w: w - 0.36,
      h: 0.08,
      font: MONO,
      size: 7.4,
      transparency: 35,
      charSpace: 1,
    });
  }
  if (opts.title) {
    text(slide, opts.title, {
      x: x + 0.18,
      y: opts.titleY ?? y + (opts.kicker ? 0.36 : 0.2),
      w: w - 0.36,
      h: opts.titleH ?? 0.18,
      size: opts.titleSize || 11.5,
    });
  }
  if (opts.body) {
    text(slide, opts.body, {
      x: x + 0.18,
      y: opts.bodyY ?? y + 0.62,
      w: w - 0.36,
      h: opts.bodyH ?? h - 0.76,
      size: opts.bodySize || 9.2,
      transparency: 30,
    });
  }
}

function line(slide, pres, x1, y1, x2, y2, end = false) {
  slide.addShape(shape(pres, "line"), {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: {
      color: C.white,
      pt: 0.9,
      transparency: 55,
      endArrowType: end ? "triangle" : undefined,
    },
  });
}

function code(slide, pres, value, x, y, w, h, size = 7.8) {
  card(slide, pres, x, y, w, h, { fill: true, strong: true });
  text(slide, value, {
    x: x + 0.18,
    y: y + 0.18,
    w: w - 0.36,
    h: h - 0.36,
    font: MONO,
    size,
    transparency: 0,
  });
}

function renderCover(slide, pres, data) {
  slide.background = { color: C.bg };
  text(slide, "AI", {
    x: 0.68,
    y: 0.55,
    w: 2.1,
    h: 0.8,
    font: MONO,
    size: 54,
    transparency: 0,
    charSpace: -2,
  });
  text(slide, data.title, {
    x: 0.75,
    y: 1.65,
    w: 7.8,
    h: 0.86,
    size: 28,
  });
  text(slide, data.subtitle, {
    x: 0.78,
    y: 2.88,
    w: 6.6,
    h: 0.22,
    size: 11,
    transparency: 30,
  });
  tag(slide, pres, "PLAN", 0.78, 3.58, 0.85);
  tag(slide, pres, "EXECUTE", 1.82, 3.58, 1.2);
  tag(slide, pres, "VERIFY", 3.22, 3.58, 1.05);
  line(slide, pres, 0.78, 4.58, 8.9, 4.58);
  text(slide, data.footer, {
    x: 0.78,
    y: 4.85,
    w: 6.9,
    h: 0.22,
    size: 9,
    transparency: 45,
  });
}

function renderAgenda(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 24 });
  text(slide, data.hero, { x: 0.78, y: 2.0, w: 7.4, h: 0.28, size: 16 });
  data.items.forEach((item, i) => {
    const x = 0.78 + i * 2.12;
    card(slide, pres, x, 2.78, 1.55, 0.88, {
      kicker: String(i + 1).padStart(2, "0"),
      title: item,
      body: data.descriptions?.[i],
      bodyY: 3.28,
      bodyH: 0.14,
      bodySize: 7.8,
      fill: i === 0,
    });
  });
  text(slide, data.note, { x: 0.78, y: 4.42, w: 7.5, h: 0.14, size: 9.2, transparency: 35 });
}

function renderCards(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: data.index === 14 ? 23 : 24 });
  const cols = data.columns || 2;
  data.cards.forEach((item, i) => {
    const x = cols === 3 ? 0.78 + i * 2.85 : 0.78 + (i % 2) * 4.2;
    const y = cols === 3 ? 2.32 : 2.05 + Math.floor(i / 2) * 1.08;
    card(slide, pres, x, y, cols === 3 ? 2.35 : 3.62, item.h || 0.82, {
      kicker: item.kicker || String(i + 1).padStart(2, "0"),
      title: item.title,
      body: item.body,
      bodyY: item.bodyY || y + 0.5,
      bodyH: item.bodyH || 0.2,
      bodySize: item.bodySize || 8.8,
      fill: i % 2 === 0,
    });
  });
  if (data.note) text(slide, data.note, { x: 0.78, y: 4.45, w: 8.2, h: 0.14, size: 9.6, transparency: 20 });
}

function renderFlow(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: data.steps.length > 3 ? 22 : 26 });
  const total = data.steps.length * 1.35 + (data.steps.length - 1) * 0.5;
  const start = (10 - total) / 2;
  data.steps.forEach((step, i) => {
    const x = start + i * 1.85;
    card(slide, pres, x, data.y || 2.42, 1.35, 0.64, {
      title: step,
      titleSize: data.steps.length > 3 ? 9.6 : 11.5,
      titleY: (data.y || 2.42) + 0.22,
      titleH: 0.16,
      fill: i === 0 || i === data.steps.length - 1,
      strong: true,
    });
    if (i < data.steps.length - 1) line(slide, pres, x + 1.4, (data.y || 2.42) + 0.32, x + 1.78, (data.y || 2.42) + 0.32, true);
  });
  if (data.body) text(slide, data.body, { x: 1.1, y: 3.72, w: 7.8, h: 0.32, size: 13, align: "center" });
  if (data.note) tag(slide, pres, data.note, 3.6, 4.42, 2.8);
}

function renderTwoColumn(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 24 });
  card(slide, pres, 0.78, 2.08, 3.95, 1.85, {
    kicker: data.left.kicker,
    title: data.left.title,
    body: data.left.body,
    bodyY: 2.72,
    bodyH: 0.78,
    bodySize: 10,
    fill: true,
    strong: true,
  });
  card(slide, pres, 5.18, 2.08, 3.95, 1.85, {
    kicker: data.right.kicker,
    title: data.right.title,
    body: data.right.body,
    bodyY: 2.72,
    bodyH: 0.78,
    bodySize: 10,
    fill: true,
    strong: true,
  });
  if (data.note) text(slide, data.note, { x: 0.88, y: 4.42, w: 8.0, h: 0.14, size: 9.5, transparency: 20, align: "center" });
}

function renderLanes(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 24 });
  data.lanes.forEach((lane, i) => {
    const y = 2.02 + i * 0.72;
    tag(slide, pres, String(i + 1).padStart(2, "0"), 0.78, y + 0.03, 0.45);
    text(slide, lane.title, { x: 1.48, y: y + 0.04, w: 1.65, h: 0.12, size: 11 });
    text(slide, lane.body, { x: 3.28, y, w: 5.0, h: 0.32, size: 9, transparency: 30 });
  });
  text(slide, data.note, { x: 0.78, y: 4.35, w: 7.7, h: 0.14, size: 9.5, transparency: 20 });
}

function renderDivider(slide, pres, data) {
  slide.background = { color: C.bg };
  text(slide, data.part, { x: 0.78, y: 1.12, w: 1.3, h: 0.15, font: MONO, size: 10, charSpace: 1.2 });
  text(slide, data.title, { x: 0.78, y: 1.8, w: 7.5, h: 0.52, size: 26 });
  text(slide, data.subtitle, { x: 0.82, y: 2.72, w: 6.9, h: 0.28, size: 10.5, transparency: 30 });
  text(slide, String(data.index).padStart(2, "0"), { x: 8.35, y: 4.35, w: 0.8, h: 0.32, font: MONO, size: 22, transparency: 35, align: "right" });
  line(slide, pres, 0.78, 4.12, 9.1, 4.12);
}

function renderCodeFlow(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 23 });
  code(slide, pres, data.code, 0.78, 1.82, 4.15, 2.62, 7.4);
  ["读取当前上下文", "调用 LLM 判断下一步", "是否需要调用工具？", "执行工具", "返回结果"].forEach((node, i) => {
    const p = [[5.35, 1.86, 3.35], [5.35, 2.48, 3.35], [5.35, 3.1, 3.35], [5.35, 3.78, 1.55], [7.15, 3.78, 1.55]][i];
    card(slide, pres, p[0], p[1], p[2], 0.42, {
      title: node,
      titleY: p[1] + 0.14,
      titleH: 0.09,
      titleSize: 9,
      fill: i === 2,
      strong: true,
    });
  });
  line(slide, pres, 7.02, 2.28, 7.02, 2.46, true);
  line(slide, pres, 7.02, 2.9, 7.02, 3.08, true);
  line(slide, pres, 6.45, 3.52, 6.18, 3.76, true);
  line(slide, pres, 7.6, 3.52, 7.95, 3.76, true);
  text(slide, data.note, { x: 0.78, y: 4.67, w: 8.1, h: 0.12, size: 8.8, transparency: 35, align: "center" });
}

function renderMessages(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 23 });
  data.blocks.forEach((block, i) => code(slide, pres, block, 0.65 + i * 3.03, 1.75, 2.68, 2.75, 6.7));
  text(slide, data.note, { x: 0.78, y: 4.66, w: 8.1, h: 0.12, size: 8.8, transparency: 35, align: "center" });
}

function renderTools(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 22 });
  code(slide, pres, data.code, 0.78, 1.78, 4.15, 2.58, 7.1);
  card(slide, pres, 5.28, 1.78, 3.82, 2.58, { kicker: "MENU", title: "tools 是一张菜单", fill: true, strong: true });
  data.items.forEach((item, i) => {
    text(slide, item[0], { x: 5.62, y: 2.42 + i * 0.3, w: 0.82, h: 0.08, font: MONO, size: 8, transparency: 0 });
    text(slide, item[1], { x: 6.55, y: 2.42 + i * 0.3, w: 2.15, h: 0.08, size: 8, transparency: 35 });
  });
  text(slide, data.note, { x: 0.78, y: 4.66, w: 8.1, h: 0.12, size: 9.2, transparency: 20, align: "center" });
}

function renderQuote(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 24 });
  text(slide, data.quote, { x: 1.0, y: 2.12, w: 8.0, h: 0.38, size: 17, align: "center" });
  data.cards.forEach((item, i) => card(slide, pres, 1.05 + i * 2.62, 3.28, 2.2, 0.72, { kicker: String(i + 1).padStart(2, "0"), body: item, bodyY: 3.62, bodyH: 0.18, bodySize: 8.1, fill: true }));
}

function renderClosing(slide, pres, data) {
  addFrame(slide, pres, data);
  title(slide, data, { size: 24 });
  text(slide, data.quote, { x: 1.0, y: 2.08, w: 8.0, h: 0.4, size: 18, align: "center" });
  data.items.forEach((item, i) => tag(slide, pres, item, 1.0 + i * 2.6, 3.45, 2.1));
}

function renderQA(slide, pres, data) {
  addFrame(slide, pres, data);
  text(slide, "Q&A", { x: 0, y: 1.55, w: 10, h: 0.58, font: MONO, size: 38, align: "center", charSpace: 1.2 });
  text(slide, data.subtitle, { x: 1.15, y: 2.55, w: 7.7, h: 0.2, size: 10.5, transparency: 30, align: "center" });
  tag(slide, pres, "THANK YOU", 4.25, 3.42, 1.5);
}

function renderXaiSlide(pres, data) {
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

module.exports = { renderXaiSlide };
