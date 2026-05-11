const CN_FONT = "Microsoft YaHei";
const EN_FONT = "Aptos Display";
const TEXT_FONT = "Microsoft YaHei";
const CODE_FONT = "Consolas";

const COLORS = {
  primary: "0066CC",
  primaryFocus: "0071E3",
  primaryOnDark: "2997FF",
  ink: "1D1D1F",
  bodyMuted: "7A7A7A",
  bodyOnDark: "FFFFFF",
  bodyMutedOnDark: "CCCCCC",
  divider: "F0F0F0",
  hairline: "E0E0E0",
  canvas: "FFFFFF",
  parchment: "F5F5F7",
  pearl: "FAFAFC",
  tile1: "272729",
  tile2: "2A2A2C",
  tile3: "252527",
  black: "000000",
  chip: "D2D2D7",
};

function shape(pres, name) {
  return pres.ShapeType ? pres.ShapeType[name] : name;
}

function darkMode(data) {
  return [1, 4, 9, 13, 17].includes(data.index);
}

function surfaceFor(data) {
  if (data.index === 1) return COLORS.black;
  if ([4, 9, 13, 17].includes(data.index)) return COLORS.tile1;
  if ([2, 6, 10, 14, 18].includes(data.index)) return COLORS.parchment;
  return COLORS.canvas;
}

function textColor(isDark) {
  return isDark ? COLORS.bodyOnDark : COLORS.ink;
}

function mutedColor(isDark) {
  return isDark ? COLORS.bodyMutedOnDark : COLORS.bodyMuted;
}

function addPage(slide, pres, data, isDark) {
  if (data.index === 1) return;
  slide.addText(String(data.index).padStart(2, "0"), {
    x: 9.35,
    y: 5.16,
    w: 0.35,
    h: 0.12,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 10,
    color: mutedColor(isDark),
    align: "right",
    fit: "shrink",
  });
  slide.addShape(shape(pres, "line"), {
    x: 8.9,
    y: 5.33,
    w: 0.8,
    h: 0,
    line: { color: isDark ? COLORS.bodyMutedOnDark : COLORS.hairline, pt: 0.7, transparency: isDark ? 45 : 0 },
  });
}

function addTopNav(slide, pres, data, isDark) {
  if (data.index === 1) return;
  slide.addText("AI Frontend Sharing", {
    x: 0.55,
    y: 0.28,
    w: 2.4,
    h: 0.12,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 9,
    color: mutedColor(isDark),
    fit: "shrink",
  });
  slide.addText(data.section || "Overview", {
    x: 7.0,
    y: 0.28,
    w: 2.45,
    h: 0.12,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 9,
    color: isDark ? COLORS.primaryOnDark : COLORS.primary,
    align: "right",
    fit: "shrink",
  });
}

function title(slide, data, isDark, options = {}) {
  slide.addText(data.title || "", {
    x: options.x ?? 0.72,
    y: options.y ?? 0.86,
    w: options.w ?? 8.56,
    h: options.h ?? 0.62,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: options.size ?? 28,
    bold: true,
    color: textColor(isDark),
    align: options.align || "center",
    fit: "shrink",
    breakLine: false,
  });
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: options.subX ?? 1.15,
      y: options.subY ?? 1.58,
      w: options.subW ?? 7.7,
      h: options.subH ?? 0.34,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: options.subSize ?? 14,
      color: mutedColor(isDark),
      align: options.align || "center",
      fit: "shrink",
      breakLine: false,
    });
  }
}

function pill(slide, text, x, y, w, isDark, fill = null) {
  const color = isDark ? COLORS.primaryOnDark : COLORS.primary;
  slide.addShape("roundRect", {
    x,
    y,
    w,
    h: 0.36,
    rectRadius: 0.18,
    line: { color: fill || color, transparency: 100 },
    fill: { color: fill || color },
  });
  slide.addText(text, {
    x,
    y: y + 0.115,
    w,
    h: 0.1,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 9.5,
    color: fill ? COLORS.ink : COLORS.bodyOnDark,
    align: "center",
    fit: "shrink",
  });
}

function card(slide, pres, x, y, w, h, isDark, opts = {}) {
  const fill = opts.fill || (isDark ? COLORS.tile2 : COLORS.canvas);
  const line = opts.line || (isDark ? COLORS.tile2 : COLORS.hairline);
  slide.addShape(shape(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: opts.radius ?? 0.18,
    line: { color: line, pt: 0.75, transparency: opts.noLine ? 100 : 0 },
    fill: { color: fill },
  });
  if (opts.kicker) {
    slide.addText(opts.kicker, {
      x: x + 0.22,
      y: y + 0.18,
      w: w - 0.44,
      h: 0.12,
      margin: 0,
      fontFace: EN_FONT,
      fontSize: 9,
      bold: false,
      color: isDark ? COLORS.primaryOnDark : COLORS.primary,
      fit: "shrink",
    });
  }
  if (opts.title) {
    slide.addText(opts.title, {
      x: x + 0.22,
      y: opts.titleY ?? y + (opts.kicker ? 0.43 : 0.24),
      w: w - 0.44,
      h: opts.titleH ?? 0.22,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: opts.titleSize ?? 13,
      bold: true,
      color: opts.titleColor || textColor(isDark),
      fit: "shrink",
      breakLine: false,
    });
  }
  if (opts.body) {
    slide.addText(opts.body, {
      x: x + 0.22,
      y: opts.bodyY ?? y + 0.84,
      w: w - 0.44,
      h: opts.bodyH ?? h - 0.92,
      margin: 0,
      fontFace: opts.bodyFont || TEXT_FONT,
      fontSize: opts.bodySize ?? 10.5,
      color: opts.bodyColor || mutedColor(isDark),
      fit: "shrink",
      valign: "top",
      breakLine: false,
    });
  }
}

function quote(slide, text, y, isDark, size = 24) {
  slide.addText(text, {
    x: 1.0,
    y,
    w: 8.0,
    h: 0.78,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: size,
    bold: true,
    color: textColor(isDark),
    align: "center",
    fit: "shrink",
    breakLine: false,
  });
}

function arrow(slide, pres, x1, y1, x2, y2, isDark) {
  slide.addShape(shape(pres, "line"), {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: { color: isDark ? COLORS.primaryOnDark : COLORS.primary, pt: 1.5, endArrowType: "triangle" },
  });
}

function codeBlock(slide, pres, text, x, y, w, h, isDark, size = 8.4) {
  slide.addShape(shape(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: 0.1,
    line: { color: isDark ? COLORS.tile3 : COLORS.hairline, pt: 0.75 },
    fill: { color: isDark ? COLORS.tile3 : COLORS.pearl },
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + 0.16,
    w: w - 0.36,
    h: h - 0.32,
    margin: 0,
    fontFace: CODE_FONT,
    fontSize: size,
    color: textColor(isDark),
    fit: "shrink",
    valign: "top",
    breakLine: false,
  });
}

function setup(slide, pres, data) {
  const isDark = darkMode(data);
  slide.background = { color: surfaceFor(data) };
  addTopNav(slide, pres, data, isDark);
  addPage(slide, pres, data, isDark);
  return isDark;
}

function renderCover(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  slide.addText("AI", {
    x: 6.95,
    y: 0.72,
    w: 2.2,
    h: 0.72,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 52,
    bold: true,
    color: COLORS.bodyOnDark,
    align: "center",
  });
  slide.addShape(shape(pres, "line"), {
    x: 7.25,
    y: 1.62,
    w: 1.6,
    h: 0,
    line: { color: COLORS.primaryOnDark, pt: 2 },
  });
  slide.addText("PEV\nAgent\nTeam", {
    x: 7.18,
    y: 1.92,
    w: 1.75,
    h: 1.1,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 20,
    bold: true,
    color: COLORS.bodyMutedOnDark,
    align: "center",
    fit: "shrink",
    breakLine: false,
  });
  slide.addText(data.title, {
    x: 0.9,
    y: 1.02,
    w: 5.7,
    h: 1.18,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 33,
    bold: true,
    color: COLORS.bodyOnDark,
    fit: "shrink",
    breakLine: false,
  });
  slide.addText(data.subtitle, {
    x: 0.94,
    y: 2.42,
    w: 5.8,
    h: 0.3,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 14,
    color: COLORS.bodyMutedOnDark,
    fit: "shrink",
  });
  pill(slide, "团队分享", 0.94, 3.22, 1.18, true);
  slide.addText(data.footer, {
    x: 0.94,
    y: 4.16,
    w: 5.5,
    h: 0.48,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 10.5,
    color: COLORS.bodyMutedOnDark,
    fit: "shrink",
    breakLine: false,
  });
}

function renderAgenda(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: 28, h: 0.38, subY: 1.48, subH: 0.18, subSize: 10.5 });
  quote(slide, data.hero, 2.0, isDark, 17);
  data.items.forEach((item, i) => {
    const x = 0.78 + i * 2.17;
    card(slide, pres, x, 2.86, 1.74, 1.08, isDark, {
      kicker: String(i + 1).padStart(2, "0"),
      title: item,
      body: data.descriptions?.[i],
      fill: COLORS.canvas,
      line: COLORS.hairline,
      titleY: 3.25,
      bodyY: 3.54,
      bodyH: 0.18,
      bodySize: 7.8,
    });
  });
  slide.addText(data.note, {
    x: 1.15,
    y: 4.62,
    w: 7.7,
    h: 0.18,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 11,
    color: mutedColor(isDark),
    align: "center",
    fit: "shrink",
  });
}

function renderCards(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, {
    size: data.index === 14 ? 25 : 27,
    h: data.index === 14 ? 0.38 : undefined,
    subY: data.index === 14 ? 1.48 : undefined,
    subH: data.index === 14 ? 0.18 : undefined,
    subSize: data.index === 14 ? 10.5 : undefined,
  });
  const cols = data.columns || 2;
  const w = cols === 3 ? 2.6 : 3.82;
  data.cards.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = cols === 3 ? 0.66 + col * 3.08 : 0.82 + col * 4.35;
    const y = cols === 3 ? 2.22 : 2.0 + row * 1.18;
    card(slide, pres, x, y, w, item.h || 0.92, isDark, {
      kicker: item.kicker,
      title: item.title,
      body: item.body,
      fill: isDark ? COLORS.tile2 : i % 2 ? COLORS.parchment : COLORS.canvas,
      line: isDark ? COLORS.tile2 : COLORS.hairline,
      bodyY: item.bodyY || y + (cols === 3 ? 0.72 : 0.56),
      bodyH: item.bodyH || (cols === 3 ? 0.42 : 0.28),
      bodySize: item.bodySize || (cols === 3 ? 8.6 : 9.4),
    });
  });
  if (data.note && data.note !== data.body) {
    slide.addText(data.note, {
      x: 1.05,
      y: 4.72,
      w: 7.9,
      h: 0.18,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: 10.8,
      bold: true,
      color: isDark ? COLORS.primaryOnDark : COLORS.primary,
      align: "center",
      fit: "shrink",
    });
  }
}

function renderFlow(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: data.steps.length > 3 ? 26 : 30 });
  const totalW = data.steps.length * 1.48 + (data.steps.length - 1) * 0.42;
  const start = (10 - totalW) / 2;
  data.steps.forEach((step, i) => {
    const x = start + i * 1.9;
    card(slide, pres, x, data.y || 2.38, 1.48, 0.72, isDark, {
      title: step,
      titleSize: data.steps.length > 3 ? 10.4 : 12.5,
      titleY: (data.y || 2.38) + 0.24,
      titleH: 0.18,
      fill: isDark ? COLORS.tile2 : i % 2 ? COLORS.parchment : COLORS.canvas,
      line: isDark ? COLORS.tile2 : COLORS.hairline,
    });
    if (i < data.steps.length - 1) arrow(slide, pres, x + 1.52, (data.y || 2.38) + 0.36, x + 1.85, (data.y || 2.38) + 0.36, isDark);
  });
  if (data.body) quote(slide, data.body, 3.65, isDark, 16);
  if (data.note) {
    slide.addText(data.note, {
      x: 1.4,
      y: 4.58,
      w: 7.2,
      h: 0.18,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: 11,
      color: mutedColor(isDark),
      align: "center",
      fit: "shrink",
    });
  }
}

function renderLanes(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: 29 });
  data.lanes.forEach((lane, i) => {
    const y = 2.02 + i * 0.82;
    slide.addText(String(i + 1).padStart(2, "0"), {
      x: 1.05,
      y: y + 0.12,
      w: 0.45,
      h: 0.18,
      margin: 0,
      fontFace: EN_FONT,
      fontSize: 15,
      bold: true,
      color: COLORS.primary,
    });
    slide.addText(lane.title, {
      x: 1.7,
      y: y + 0.04,
      w: 1.8,
      h: 0.2,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: 13.5,
      bold: true,
      color: COLORS.ink,
      fit: "shrink",
    });
    slide.addText(lane.body, {
      x: 3.68,
      y: y + 0.03,
      w: 4.5,
      h: 0.48,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: 9.5,
      color: COLORS.bodyMuted,
      fit: "shrink",
      breakLine: false,
    });
  });
  if (data.note) quote(slide, data.note, 4.55, isDark, 13.5);
}

function renderDivider(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  slide.addText(data.part, {
    x: 0,
    y: 0.7,
    w: 10,
    h: 0.24,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 15,
    bold: true,
    color: COLORS.primaryOnDark,
    align: "center",
  });
  title(slide, data, isDark, { y: 1.55, size: 32, subY: 2.65, subSize: 14.5 });
  pill(slide, "查天气示例", 4.25, 3.62, 1.5, true);
}

function renderCodeFlow(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, {
    y: 0.82,
    h: 0.44,
    size: 23.5,
    subY: 1.34,
    subH: 0.2,
    subSize: 10.2,
  });
  codeBlock(slide, pres, data.code, 0.72, 1.94, 4.45, 2.54, isDark, 7.2);
  ["读取当前上下文", "调用 LLM 判断下一步", "是否需要调用工具？", "执行工具", "返回结果"].forEach((step, i) => {
    const positions = [
      [5.55, 1.94, 3.05],
      [5.55, 2.6, 3.05],
      [5.55, 3.26, 3.05],
      [5.55, 3.96, 1.55],
      [7.05, 3.96, 1.55],
    ];
    const [x, y, w] = positions[i];
    card(slide, pres, x, y, w, 0.48, isDark, {
      title: step,
      titleSize: 10.4,
      titleY: y + 0.16,
      titleH: 0.12,
      fill: COLORS.canvas,
      line: COLORS.hairline,
    });
  });
  arrow(slide, pres, 7.05, 2.42, 7.05, 2.58, isDark);
  arrow(slide, pres, 7.05, 3.08, 7.05, 3.24, isDark);
  arrow(slide, pres, 6.55, 3.74, 6.32, 3.94, isDark);
  arrow(slide, pres, 7.55, 3.74, 7.78, 3.94, isDark);
  slide.addText(data.note, {
    x: 0.95,
    y: 4.7,
    w: 8.1,
    h: 0.22,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 9,
    color: COLORS.bodyMuted,
    align: "center",
    fit: "shrink",
  });
}

function renderMessages(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: 26, subSize: 12.2, subY: 1.5 });
  data.blocks.forEach((block, i) => {
    codeBlock(slide, pres, block, 0.46 + i * 3.08, 1.72, 2.86, 3.02, isDark, i === 2 ? 6.2 : 6.9);
  });
  slide.addText(data.note, {
    x: 1.0,
    y: 4.88,
    w: 8.0,
    h: 0.14,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 8.8,
    color: COLORS.bodyMuted,
    align: "center",
    fit: "shrink",
  });
}

function renderTools(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, {
    y: 0.82,
    h: 0.48,
    size: 22.5,
    subY: 1.38,
    subH: 0.22,
    subSize: 10.2,
  });
  codeBlock(slide, pres, data.code, 0.62, 1.95, 4.5, 2.48, isDark, 6.9);
  card(slide, pres, 5.45, 1.95, 3.85, 2.48, isDark, {
    kicker: "MENU",
    title: "tools 是一张菜单",
    fill: COLORS.canvas,
    line: COLORS.hairline,
  });
  data.items.forEach((item, i) => {
    slide.addText(item[0], {
      x: 5.72,
      y: 2.66 + i * 0.32,
      w: 0.92,
      h: 0.1,
      margin: 0,
      fontFace: CODE_FONT,
      fontSize: 8.6,
      bold: true,
      color: COLORS.primary,
      fit: "shrink",
    });
    slide.addText(item[1], {
      x: 6.72,
      y: 2.66 + i * 0.32,
      w: 2.18,
      h: 0.1,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: 8.6,
      color: COLORS.bodyMuted,
      fit: "shrink",
    });
  });
  slide.addText(data.note, {
    x: 1.1,
    y: 4.68,
    w: 7.8,
    h: 0.18,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 9.8,
    bold: true,
    color: COLORS.primary,
    align: "center",
    fit: "shrink",
  });
}

function renderQuote(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: 27, h: 0.38, subY: 1.48, subH: 0.18, subSize: 10.5 });
  quote(slide, data.quote, 2.05, isDark, 18);
  data.cards.forEach((item, i) => {
    card(slide, pres, 1.0 + i * 2.7, 3.32, 2.35, 1.0, isDark, {
      kicker: String(i + 1).padStart(2, "0"),
      body: item,
      bodyY: 3.82,
      bodyH: 0.32,
      bodySize: 8.4,
      fill: COLORS.tile2,
      line: COLORS.tile2,
    });
  });
}

function renderTwoColumn(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, {
    y: 0.84,
    h: 0.46,
    size: data.index === 16 ? 24 : 25.5,
    subY: 1.38,
    subH: 0.22,
    subSize: 10.6,
  });
  card(slide, pres, 0.78, 1.92, 4.05, 2.26, isDark, {
    kicker: data.left.kicker,
    title: data.left.title,
    body: data.left.body,
    fill: isDark ? COLORS.tile2 : COLORS.canvas,
    line: isDark ? COLORS.tile2 : COLORS.hairline,
    bodyY: 2.66,
    bodyH: 1.12,
    bodySize: data.index === 16 ? 9.8 : 10.5,
  });
  card(slide, pres, 5.16, 1.92, 4.05, 2.26, isDark, {
    kicker: data.right.kicker,
    title: data.right.title,
    body: data.right.body,
    fill: isDark ? COLORS.tile2 : COLORS.parchment,
    line: isDark ? COLORS.tile2 : COLORS.hairline,
    bodyY: 2.66,
    bodyH: 1.12,
    bodySize: data.index === 16 ? 9.8 : 10.5,
  });
  if (data.note) quote(slide, data.note, 4.58, isDark, 11.2);
}

function renderClosing(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  title(slide, data, isDark, { size: 29 });
  quote(slide, data.quote, 2.0, isDark, 24);
  data.items.forEach((item, i) => {
    slide.addText(item, {
      x: 1.05 + i * 2.62,
      y: 3.55,
      w: 2.2,
      h: 0.22,
      margin: 0,
      fontFace: TEXT_FONT,
      fontSize: i === 2 ? 10.5 : 12.5,
      bold: true,
      color: i === 1 ? COLORS.primaryOnDark : COLORS.bodyMutedOnDark,
      align: "center",
      fit: "shrink",
    });
  });
}

function renderQA(slide, pres, data) {
  const isDark = setup(slide, pres, data);
  slide.addText("Q&A", {
    x: 0,
    y: 1.45,
    w: 10,
    h: 0.8,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 44,
    bold: true,
    color: COLORS.ink,
    align: "center",
  });
  slide.addText(data.subtitle, {
    x: 1.2,
    y: 2.5,
    w: 7.6,
    h: 0.26,
    margin: 0,
    fontFace: TEXT_FONT,
    fontSize: 13.5,
    color: COLORS.bodyMuted,
    align: "center",
    fit: "shrink",
  });
  pill(slide, "谢谢大家", 4.25, 3.5, 1.5, isDark);
}

function renderAppleSlide(pres, data) {
  const slide = pres.addSlide();
  if (data.type === "cover") renderCover(slide, pres, data);
  if (data.type === "agenda") renderAgenda(slide, pres, data);
  if (data.type === "cards") renderCards(slide, pres, data);
  if (data.type === "flow") renderFlow(slide, pres, data);
  if (data.type === "lanes") renderLanes(slide, pres, data);
  if (data.type === "divider") renderDivider(slide, pres, data);
  if (data.type === "codeFlow") renderCodeFlow(slide, pres, data);
  if (data.type === "messages") renderMessages(slide, pres, data);
  if (data.type === "tools") renderTools(slide, pres, data);
  if (data.type === "quote") renderQuote(slide, pres, data);
  if (data.type === "twoColumn") renderTwoColumn(slide, pres, data);
  if (data.type === "closing") renderClosing(slide, pres, data);
  if (data.type === "qa") renderQA(slide, pres, data);
  return slide;
}

module.exports = { renderAppleSlide, COLORS };
