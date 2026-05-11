const CN = "Microsoft YaHei";
const EN = "Roboto";
const CODE = "Consolas";

const C = {
  orange: "FF5B01",
  orangeHover: "FF6C1B",
  ink: "201D1B",
  dark: "121211",
  black: "000000",
  white: "FFFFFF",
  light: "F9F9F9",
  border: "E5E6EB",
  muted: "A4A9B3",
  tertiary: "99A5B6",
  footerBorder: "313131",
  input: "1D2129",
};

function s(pres, name) {
  return pres.ShapeType ? pres.ShapeType[name] : name;
}

function isDarkPage(index) {
  return [1, 9, 13, 17].includes(index);
}

function bgFor(index) {
  if ([1, 9, 13, 17].includes(index)) return C.black;
  if ([4, 10, 15].includes(index)) return C.dark;
  return C.white;
}

function fg(dark) {
  return dark ? C.white : C.ink;
}

function sub(dark) {
  return dark ? C.muted : C.tertiary;
}

function addHeader(slide, pres, data, dark) {
  if (data.index === 1) return;
  slide.addShape(s(pres, "rect"), {
    x: 0,
    y: 0,
    w: 10,
    h: 0.58,
    line: { color: dark ? C.black : C.border, pt: dark ? 0 : 0.5 },
    fill: { color: dark ? C.black : C.white },
  });
  slide.addShape(s(pres, "rect"), {
    x: 0,
    y: 0.56,
    w: 10,
    h: 0.03,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText("AI FRONTEND SHARING", {
    x: 0.55,
    y: 0.22,
    w: 2.4,
    h: 0.1,
    margin: 0,
    fontFace: EN,
    fontSize: 8.5,
    bold: true,
    color: dark ? C.white : C.ink,
    fit: "shrink",
  });
  slide.addText(data.section || "OVERVIEW", {
    x: 6.7,
    y: 0.22,
    w: 2.4,
    h: 0.1,
    margin: 0,
    fontFace: EN,
    fontSize: 8.5,
    bold: true,
    color: C.orange,
    align: "right",
    fit: "shrink",
  });
  slide.addText(String(data.index).padStart(2, "0"), {
    x: 9.28,
    y: 0.19,
    w: 0.32,
    h: 0.12,
    margin: 0,
    fontFace: EN,
    fontSize: 9,
    bold: true,
    color: dark ? C.muted : C.tertiary,
    align: "right",
  });
}

function addFooterRule(slide, pres, dark) {
  slide.addShape(s(pres, "line"), {
    x: 0.55,
    y: 5.08,
    w: 8.9,
    h: 0,
    line: { color: dark ? C.footerBorder : C.border, pt: 0.6 },
  });
}

function title(slide, data, dark, opts = {}) {
  slide.addText(data.title || "", {
    x: opts.x ?? 0.65,
    y: opts.y ?? 0.95,
    w: opts.w ?? 7.9,
    h: opts.h ?? 0.64,
    margin: 0,
    fontFace: CN,
    fontSize: opts.size ?? 27,
    bold: true,
    color: opts.color || fg(dark),
    fit: "shrink",
    breakLine: false,
  });
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: opts.subX ?? 0.68,
      y: opts.subY ?? 1.58,
      w: opts.subW ?? 7.45,
      h: opts.subH ?? 0.28,
      margin: 0,
      fontFace: CN,
      fontSize: opts.subSize ?? 11.5,
      color: opts.subColor || sub(dark),
      fit: "shrink",
      breakLine: false,
    });
  }
}

function orangeTag(slide, text, x, y, w = 1.1) {
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h: 0.34,
    rectRadius: 0.06,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText(text, {
    x,
    y: y + 0.105,
    w,
    h: 0.1,
    margin: 0,
    fontFace: CN,
    fontSize: 9,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
}

function card(slide, pres, x, y, w, h, dark, opts = {}) {
  slide.addShape(s(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: opts.radius ?? 0.06,
    line: { color: opts.line || (dark ? C.footerBorder : C.border), pt: opts.linePt ?? 0.75 },
    fill: { color: opts.fill || (dark ? C.dark : C.white) },
  });
  if (opts.accent) {
    slide.addShape(s(pres, "rect"), {
      x,
      y,
      w: opts.accentW || 0.08,
      h,
      line: { color: C.orange, transparency: 100 },
      fill: { color: C.orange },
    });
  }
  if (opts.kicker) {
    slide.addText(opts.kicker, {
      x: x + 0.2,
      y: y + 0.16,
      w: w - 0.4,
      h: 0.1,
      margin: 0,
      fontFace: EN,
      fontSize: 8.5,
      bold: true,
      color: C.orange,
      fit: "shrink",
    });
  }
  if (opts.title) {
    slide.addText(opts.title, {
      x: x + 0.2,
      y: opts.titleY ?? y + (opts.kicker ? 0.38 : 0.2),
      w: w - 0.4,
      h: opts.titleH ?? 0.22,
      margin: 0,
      fontFace: CN,
      fontSize: opts.titleSize ?? 13,
      bold: true,
      color: opts.titleColor || fg(dark),
      fit: "shrink",
      breakLine: false,
    });
  }
  if (opts.body) {
    slide.addText(opts.body, {
      x: x + 0.2,
      y: opts.bodyY ?? y + 0.66,
      w: w - 0.4,
      h: opts.bodyH ?? h - 0.8,
      margin: 0,
      fontFace: opts.bodyFont || CN,
      fontSize: opts.bodySize ?? 10.2,
      color: opts.bodyColor || sub(dark),
      fit: "shrink",
      valign: "top",
      breakLine: false,
    });
  }
}

function arrow(slide, pres, x1, y1, x2, y2, color = C.orange, pt = 2) {
  slide.addShape(s(pres, "line"), {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: { color, pt, endArrowType: "triangle" },
  });
}

function codeBlock(slide, pres, text, x, y, w, h, dark, size = 8.2) {
  slide.addShape(s(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: 0.06,
    line: { color: dark ? C.footerBorder : C.border, pt: 0.75 },
    fill: { color: dark ? C.black : C.light },
  });
  slide.addShape(s(pres, "rect"), {
    x,
    y,
    w,
    h: 0.26,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + 0.42,
    w: w - 0.36,
    h: h - 0.54,
    margin: 0,
    fontFace: CODE,
    fontSize: size,
    color: dark ? C.white : C.ink,
    fit: "shrink",
    valign: "top",
    breakLine: false,
  });
}

function setup(slide, pres, data) {
  const dark = isDarkPage(data.index) || [4, 10, 15].includes(data.index);
  slide.background = { color: bgFor(data.index) };
  addHeader(slide, pres, data, dark);
  addFooterRule(slide, pres, dark);
  return dark;
}

function cover(slide, pres, data) {
  slide.background = { color: C.black };
  slide.addShape(s(pres, "rect"), {
    x: 7.2,
    y: 0,
    w: 2.8,
    h: 5.625,
    line: { color: C.orange, transparency: 100 },
    fill: { color: C.orange },
  });
  slide.addShape(s(pres, "rect"), {
    x: 0,
    y: 4.78,
    w: 10,
    h: 0.85,
    line: { color: C.dark, transparency: 100 },
    fill: { color: C.dark },
  });
  slide.addText("AI", {
    x: 7.52,
    y: 1.0,
    w: 1.9,
    h: 0.75,
    margin: 0,
    fontFace: EN,
    fontSize: 52,
    bold: true,
    color: C.white,
    align: "center",
  });
  slide.addText("PLAN\nEXECUTE\nVERIFY", {
    x: 7.55,
    y: 2.02,
    w: 1.85,
    h: 0.9,
    margin: 0,
    fontFace: EN,
    fontSize: 16,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
    breakLine: false,
  });
  slide.addText(data.title, {
    x: 0.78,
    y: 1.08,
    w: 5.95,
    h: 1.25,
    margin: 0,
    fontFace: CN,
    fontSize: 33,
    bold: true,
    color: C.white,
    fit: "shrink",
    breakLine: false,
  });
  slide.addText(data.subtitle, {
    x: 0.82,
    y: 2.62,
    w: 5.5,
    h: 0.32,
    margin: 0,
    fontFace: CN,
    fontSize: 13.2,
    color: C.muted,
    fit: "shrink",
  });
  orangeTag(slide, "TEAM TALK", 0.82, 3.34, 1.42);
  slide.addText(data.footer, {
    x: 0.82,
    y: 4.98,
    w: 6.1,
    h: 0.26,
    margin: 0,
    fontFace: CN,
    fontSize: 9.8,
    color: C.muted,
    fit: "shrink",
    breakLine: false,
  });
}

function agenda(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 28 });
  slide.addText(data.hero, {
    x: 0.78,
    y: 1.78,
    w: 6.9,
    h: 0.42,
    margin: 0,
    fontFace: CN,
    fontSize: 19,
    bold: true,
    color: C.ink,
    fit: "shrink",
  });
  orangeTag(slide, "MAIN LINE", 7.78, 1.8, 1.35);
  data.items.forEach((item, i) => {
    const x = 0.78 + (i % 2) * 4.2;
    const y = 2.58 + Math.floor(i / 2) * 0.92;
    card(slide, pres, x, y, 3.7, 0.62, dark, {
      accent: true,
      kicker: String(i + 1).padStart(2, "0"),
      title: item,
      titleSize: 12,
      titleY: y + 0.3,
      titleH: 0.14,
      fill: C.white,
      line: C.border,
    });
  });
  slide.addText(data.note, {
    x: 0.82,
    y: 4.58,
    w: 7.7,
    h: 0.16,
    margin: 0,
    fontFace: CN,
    fontSize: 10.8,
    color: C.tertiary,
    fit: "shrink",
  });
}

function riskCards(slide, pres, data) {
  const dark = setup(slide, pres, data);
  slide.addShape(s(pres, "rect"), {
    x: 0,
    y: 0.58,
    w: 2.35,
    h: 4.5,
    line: { color: C.black, transparency: 100 },
    fill: { color: C.black },
  });
  slide.addText("RISK\nCONTROL", {
    x: 0.5,
    y: 1.3,
    w: 1.35,
    h: 1.25,
    margin: 0,
    fontFace: EN,
    fontSize: 22,
    bold: true,
    color: C.white,
    fit: "shrink",
    breakLine: false,
  });
  orangeTag(slide, "AI", 0.62, 3.06, 0.72);
  title(slide, data, dark, { x: 2.72, y: 0.98, w: 6.6, size: 24, subX: 2.74, subY: 1.54, subW: 6.3 });
  data.cards.forEach((item, i) => {
    const x = 2.72 + (i % 2) * 3.2;
    const y = 2.06 + Math.floor(i / 2) * 1.08;
    card(slide, pres, x, y, 2.78, 0.78, dark, {
      title: item.title,
      body: item.body,
      bodyY: y + 0.45,
      bodyH: 0.18,
      fill: i % 2 ? C.light : C.white,
      line: C.border,
    });
  });
  slide.addText(data.note, {
    x: 2.72,
    y: 4.45,
    w: 6.4,
    h: 0.28,
    margin: 0,
    fontFace: CN,
    fontSize: 11.3,
    bold: true,
    color: C.orange,
    fit: "shrink",
  });
}

function flow(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: data.steps.length > 3 ? 24 : 30, color: fg(dark) });
  const total = data.steps.length * 1.38 + (data.steps.length - 1) * 0.48;
  const start = (10 - total) / 2;
  data.steps.forEach((step, i) => {
    const x = start + i * 1.86;
    card(slide, pres, x, data.y || 2.22, 1.38, 0.82, dark, {
      title: step,
      titleSize: data.steps.length > 3 ? 10.2 : 13,
      titleY: (data.y || 2.22) + 0.27,
      titleH: 0.2,
      fill: dark ? C.black : C.white,
      line: i === 0 || i === data.steps.length - 1 ? C.orange : (dark ? C.footerBorder : C.border),
    });
    if (i < data.steps.length - 1) arrow(slide, pres, x + 1.42, (data.y || 2.22) + 0.42, x + 1.8, (data.y || 2.22) + 0.42);
  });
  if (data.body) {
    slide.addText(data.body, {
      x: 1.15,
      y: 3.75,
      w: 7.7,
      h: 0.42,
      margin: 0,
      fontFace: CN,
      fontSize: 15,
      bold: true,
      color: dark ? C.white : C.ink,
      align: "center",
      fit: "shrink",
    });
  }
  if (data.note) orangeTag(slide, data.note, 3.76, 4.45, 2.48);
}

function twoColumn(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 27 });
  card(slide, pres, 0.76, 2.05, 4.05, 2.15, dark, {
    kicker: data.left.kicker,
    title: data.left.title,
    body: data.left.body,
    bodyY: 2.76,
    bodyH: 0.98,
    bodySize: 11.2,
    fill: dark ? C.black : C.white,
    line: dark ? C.footerBorder : C.border,
    accent: true,
  });
  card(slide, pres, 5.15, 2.05, 4.05, 2.15, dark, {
    kicker: data.right.kicker,
    title: data.right.title,
    body: data.right.body,
    bodyY: 2.76,
    bodyH: 0.98,
    bodySize: 11.2,
    fill: dark ? C.black : C.light,
    line: dark ? C.footerBorder : C.border,
    accent: true,
  });
  if (data.note) {
    slide.addText(data.note, {
      x: 0.8,
      y: 4.55,
      w: 7.9,
      h: 0.18,
      margin: 0,
      fontFace: CN,
      fontSize: 11.2,
      bold: true,
      color: C.orange,
      align: "center",
      fit: "shrink",
    });
  }
}

function lanes(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 28 });
  data.lanes.forEach((lane, i) => {
    const y = 2.0 + i * 0.78;
    slide.addShape(s(pres, "rect"), {
      x: 0.82,
      y,
      w: 0.45,
      h: 0.45,
      line: { color: C.orange, transparency: 100 },
      fill: { color: C.orange },
    });
    slide.addText(String(i + 1), {
      x: 0.82,
      y: y + 0.14,
      w: 0.45,
      h: 0.1,
      margin: 0,
      fontFace: EN,
      fontSize: 11,
      bold: true,
      color: C.white,
      align: "center",
    });
    slide.addText(lane.title, {
      x: 1.55,
      y: y + 0.04,
      w: 1.65,
      h: 0.15,
      margin: 0,
      fontFace: CN,
      fontSize: 13.5,
      bold: true,
      color: C.ink,
      fit: "shrink",
    });
    slide.addText(lane.body, {
      x: 3.25,
      y: y + 0.02,
      w: 5.2,
      h: 0.34,
      margin: 0,
      fontFace: CN,
      fontSize: 10.2,
      color: C.tertiary,
      fit: "shrink",
      breakLine: false,
    });
  });
  slide.addText(data.note, {
    x: 0.86,
    y: 4.55,
    w: 7.8,
    h: 0.2,
    margin: 0,
    fontFace: CN,
    fontSize: 12,
    bold: true,
    color: C.orange,
    fit: "shrink",
  });
}

function divider(slide, pres, data) {
  slide.background = { color: C.orange };
  slide.addShape(s(pres, "rect"), {
    x: 0,
    y: 0,
    w: 2.1,
    h: 5.625,
    line: { color: C.black, transparency: 100 },
    fill: { color: C.black },
  });
  slide.addText(data.part, {
    x: 0.48,
    y: 0.82,
    w: 1.0,
    h: 0.24,
    margin: 0,
    fontFace: EN,
    fontSize: 14,
    bold: true,
    color: C.orange,
    align: "center",
  });
  slide.addText(String(data.index).padStart(2, "0"), {
    x: 0.42,
    y: 3.72,
    w: 1.16,
    h: 0.5,
    margin: 0,
    fontFace: EN,
    fontSize: 36,
    bold: true,
    color: C.white,
    align: "center",
  });
  slide.addText(data.title, {
    x: 2.75,
    y: 1.55,
    w: 5.95,
    h: 0.8,
    margin: 0,
    fontFace: CN,
    fontSize: 31,
    bold: true,
    color: C.white,
    fit: "shrink",
  });
  slide.addText(data.subtitle, {
    x: 2.78,
    y: 2.65,
    w: 5.9,
    h: 0.45,
    margin: 0,
    fontFace: CN,
    fontSize: 13.5,
    color: C.white,
    fit: "shrink",
  });
}

function codeFlow(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 25.5 });
  codeBlock(slide, pres, data.code, 0.7, 1.78, 4.4, 2.72, dark, 8.1);
  const nodes = ["读取当前上下文", "调用 LLM 判断下一步", "是否需要调用工具？", "执行工具", "返回结果"];
  nodes.forEach((node, i) => {
    const pos = [
      [5.55, 1.82, 3.2],
      [5.55, 2.46, 3.2],
      [5.55, 3.1, 3.2],
      [5.55, 3.82, 1.52],
      [7.24, 3.82, 1.52],
    ][i];
    card(slide, pres, pos[0], pos[1], pos[2], 0.46, dark, {
      title: node,
      titleY: pos[1] + 0.15,
      titleH: 0.1,
      titleSize: 10,
      fill: C.black,
      line: i === 2 ? C.orange : C.footerBorder,
    });
  });
  arrow(slide, pres, 7.14, 2.28, 7.14, 2.44);
  arrow(slide, pres, 7.14, 2.92, 7.14, 3.08);
  arrow(slide, pres, 6.62, 3.56, 6.32, 3.8);
  arrow(slide, pres, 7.66, 3.56, 7.94, 3.8);
  slide.addText(data.note, {
    x: 0.78,
    y: 4.72,
    w: 8.1,
    h: 0.16,
    margin: 0,
    fontFace: CN,
    fontSize: 10.4,
    color: C.muted,
    align: "center",
    fit: "shrink",
  });
}

function messages(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 26 });
  data.blocks.forEach((block, i) => {
    codeBlock(slide, pres, block, 0.62 + i * 3.05, 1.72, 2.72, 2.88, dark, 7.2);
  });
  slide.addText(data.note, {
    x: 0.8,
    y: 4.76,
    w: 8,
    h: 0.16,
    margin: 0,
    fontFace: CN,
    fontSize: 10.4,
    color: C.tertiary,
    align: "center",
    fit: "shrink",
  });
}

function tools(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 24.5 });
  codeBlock(slide, pres, data.code, 0.72, 1.8, 4.25, 2.55, dark, 7.8);
  card(slide, pres, 5.3, 1.8, 3.9, 2.55, dark, {
    kicker: "MENU",
    title: "tools 是一张菜单",
    fill: C.white,
    line: C.border,
    titleColor: C.ink,
  });
  data.items.forEach((item, i) => {
    slide.addText(item[0], {
      x: 5.62,
      y: 2.45 + i * 0.31,
      w: 0.86,
      h: 0.1,
      margin: 0,
      fontFace: CODE,
      fontSize: 8.6,
      bold: true,
      color: C.orange,
      fit: "shrink",
    });
    slide.addText(item[1], {
      x: 6.58,
      y: 2.45 + i * 0.31,
      w: 2.25,
      h: 0.1,
      margin: 0,
      fontFace: CN,
      fontSize: 8.6,
      color: C.tertiary,
      fit: "shrink",
    });
  });
  slide.addText(data.note, {
    x: 1,
    y: 4.74,
    w: 8,
    h: 0.18,
    margin: 0,
    fontFace: CN,
    fontSize: 11.2,
    bold: true,
    color: C.orange,
    align: "center",
    fit: "shrink",
  });
}

function quote(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 28, subColor: C.orange });
  slide.addText(data.quote, {
    x: 1.0,
    y: 2.12,
    w: 8,
    h: 0.5,
    margin: 0,
    fontFace: CN,
    fontSize: 21,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
  data.cards.forEach((item, i) => {
    card(slide, pres, 1.05 + i * 2.62, 3.42, 2.2, 0.78, dark, {
      kicker: String(i + 1).padStart(2, "0"),
      body: item,
      bodyY: 3.76,
      bodyH: 0.22,
      bodySize: 8.8,
      fill: C.dark,
      line: C.footerBorder,
    });
  });
}

function closing(slide, pres, data) {
  const dark = setup(slide, pres, data);
  title(slide, data, dark, { size: 28 });
  slide.addText(data.quote, {
    x: 0.95,
    y: 2.0,
    w: 8.1,
    h: 0.56,
    margin: 0,
    fontFace: CN,
    fontSize: 22,
    bold: true,
    color: C.white,
    align: "center",
    fit: "shrink",
  });
  data.items.forEach((item, i) => {
    orangeTag(slide, item, 1.05 + i * 2.62, 3.45, 2.06);
  });
}

function qa(slide, pres, data) {
  setup(slide, pres, data);
  slide.addText("Q&A", {
    x: 0,
    y: 1.46,
    w: 10,
    h: 0.82,
    margin: 0,
    fontFace: EN,
    fontSize: 48,
    bold: true,
    color: C.ink,
    align: "center",
  });
  slide.addText(data.subtitle, {
    x: 1.15,
    y: 2.54,
    w: 7.7,
    h: 0.22,
    margin: 0,
    fontFace: CN,
    fontSize: 13.5,
    color: C.tertiary,
    align: "center",
    fit: "shrink",
  });
  orangeTag(slide, "谢谢大家", 4.15, 3.46, 1.7);
}

function renderRedbackSlide(pres, data) {
  const slide = pres.addSlide();
  if (data.type === "cover") cover(slide, pres, data);
  if (data.type === "agenda") agenda(slide, pres, data);
  if (data.type === "cards") {
    if (data.index === 3) riskCards(slide, pres, data);
    else {
      const dark = setup(slide, pres, data);
      title(slide, data, dark, { size: data.index === 14 ? 26 : 27 });
      data.cards.forEach((item, i) => {
        const x = 0.78 + i * 2.95;
        card(slide, pres, x, 2.12, 2.55, item.h || 1.55, dark, {
          kicker: item.kicker,
          title: item.title,
          body: item.body,
          bodyY: 2.78,
          bodyH: 0.56,
          fill: C.white,
          line: C.border,
          accent: true,
        });
      });
      if (data.note) orangeTag(slide, data.note, 2.45, 4.56, 5.1);
    }
  }
  if (data.type === "flow") flow(slide, pres, data);
  if (data.type === "twoColumn") twoColumn(slide, pres, data);
  if (data.type === "lanes") lanes(slide, pres, data);
  if (data.type === "divider") divider(slide, pres, data);
  if (data.type === "codeFlow") codeFlow(slide, pres, data);
  if (data.type === "messages") messages(slide, pres, data);
  if (data.type === "tools") tools(slide, pres, data);
  if (data.type === "quote") quote(slide, pres, data);
  if (data.type === "closing") closing(slide, pres, data);
  if (data.type === "qa") qa(slide, pres, data);
  return slide;
}

module.exports = { renderRedbackSlide, C };
