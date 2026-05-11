const CN_FONT = "Microsoft YaHei";
const EN_FONT = "Arial";
const CODE_FONT = "Consolas";

const W = 10;
const H = 5.625;

function shape(pres, name) {
  return pres.ShapeType ? pres.ShapeType[name] : name;
}

function addBadge(slide, pres, theme, page, dark = false) {
  slide.addShape(shape(pres, "roundRect"), {
    x: 9.3,
    y: 5.1,
    w: 0.42,
    h: 0.3,
    rectRadius: 0.08,
    line: { color: dark ? theme.accent : theme.primary, transparency: 100 },
    fill: { color: dark ? theme.accent : theme.primary },
  });
  slide.addText(String(page).padStart(2, "0"), {
    x: 9.3,
    y: 5.18,
    w: 0.42,
    h: 0.11,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 9.5,
    bold: true,
    color: dark ? theme.primary : theme.bg,
    align: "center",
  });
}

function addChrome(slide, pres, theme, page, section) {
  slide.background = { color: theme.bg };
  slide.addShape(shape(pres, "rect"), {
    x: 0,
    y: 0,
    w: W,
    h: 0.13,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary },
  });
  slide.addText(section || "", {
    x: 0.55,
    y: 0.3,
    w: 3,
    h: 0.14,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 8.5,
    bold: true,
    color: theme.secondary,
    fit: "shrink",
  });
  slide.addText("AI Frontend Sharing", {
    x: 7.65,
    y: 0.3,
    w: 1.6,
    h: 0.14,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 8.5,
    color: theme.primary,
    align: "right",
    fit: "shrink",
  });
  addBadge(slide, pres, theme, page);
}

function addHeader(slide, theme, title, subtitle) {
  slide.addText(title, {
    x: 0.55,
    y: 0.68,
    w: 8.5,
    h: 0.42,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 24,
    bold: true,
    color: theme.primary,
    fit: "shrink",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.55,
      y: 1.14,
      w: 8.4,
      h: 0.2,
      margin: 0,
      fontFace: CN_FONT,
      fontSize: 10.5,
      color: theme.primary,
      fit: "shrink",
    });
  }
}

function addCard(slide, pres, theme, x, y, w, h, options = {}) {
  slide.addShape(shape(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: options.radius ?? 0.12,
    line: { color: options.line || theme.light, pt: options.linePt || 1 },
    fill: { color: options.fill || theme.bg },
  });
  if (options.kicker) {
    slide.addText(options.kicker, {
      x: x + 0.18,
      y: y + 0.14,
      w: w - 0.36,
      h: 0.12,
      margin: 0,
      fontFace: EN_FONT,
      fontSize: 8.5,
      bold: true,
      color: options.kickerColor || theme.secondary,
      fit: "shrink",
    });
  }
  if (options.title) {
    slide.addText(options.title, {
      x: x + 0.18,
      y: options.titleY ?? y + (options.kicker ? 0.38 : 0.2),
      w: w - 0.36,
      h: options.titleH ?? 0.22,
      margin: 0,
      fontFace: CN_FONT,
      fontSize: options.titleSize || 13,
      bold: true,
      color: options.titleColor || theme.primary,
      fit: "shrink",
    });
  }
  if (options.body) {
    slide.addText(options.body, {
      x: x + 0.18,
      y: options.bodyY ?? y + 0.68,
      w: w - 0.36,
      h: options.bodyH ?? h - 0.84,
      margin: 0,
      fontFace: options.bodyFont || CN_FONT,
      fontSize: options.bodySize || 10,
      color: options.bodyColor || theme.primary,
      valign: "top",
      fit: "shrink",
      breakLine: false,
    });
  }
}

function addBullets(slide, theme, items, x, y, w, h, size = 11) {
  const runs = [];
  items.forEach((item) => {
    runs.push({
      text: item,
      options: { bullet: { indent: 12 }, hanging: 3, breakLine: true },
    });
  });
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: size,
    color: theme.primary,
    fit: "shrink",
    valign: "top",
  });
}

function addArrow(slide, pres, theme, x1, y1, x2, y2, color = theme.accent) {
  slide.addShape(shape(pres, "line"), {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: { color, pt: 2, endArrowType: "triangle" },
  });
}

function addNote(slide, pres, theme, text, y = 4.7, fill = null, line = null) {
  slide.addShape(shape(pres, "roundRect"), {
    x: 0.75,
    y,
    w: 8.5,
    h: 0.45,
    rectRadius: 0.1,
    line: { color: line || theme.light, pt: 1 },
    fill: { color: fill || theme.light },
  });
  slide.addText(text, {
    x: 0.95,
    y: y + 0.145,
    w: 8.1,
    h: 0.13,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 10.5,
    bold: true,
    color: theme.primary,
    align: "center",
    fit: "shrink",
  });
}

function addCodeBlock(slide, pres, theme, code, x, y, w, h, size = 8.8) {
  slide.addShape(shape(pres, "roundRect"), {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    line: { color: theme.light, pt: 1 },
    fill: { color: theme.light },
  });
  slide.addText(code, {
    x: x + 0.16,
    y: y + 0.14,
    w: w - 0.32,
    h: h - 0.28,
    margin: 0,
    fontFace: CODE_FONT,
    fontSize: size,
    color: theme.primary,
    fit: "shrink",
    valign: "top",
    breakLine: false,
  });
}

function addFlowCard(slide, pres, theme, x, y, text, fill, line) {
  addCard(slide, pres, theme, x, y, 1.55, 0.68, {
    title: text,
    titleSize: 11.5,
    fill,
    line,
    titleY: y + 0.24,
    titleH: 0.14,
  });
}

function renderCover(slide, pres, theme, data) {
  slide.background = { color: theme.bg };
  for (let i = 0; i < 12; i += 1) {
    slide.addShape(shape(pres, "line"), {
      x: 0.55 + i * 0.78,
      y: 0.35,
      w: 0,
      h: 4.85,
      line: { color: theme.light, pt: 0.6, transparency: 15 },
    });
  }
  for (let i = 0; i < 7; i += 1) {
    slide.addShape(shape(pres, "line"), {
      x: 0.35,
      y: 0.55 + i * 0.68,
      w: 9.1,
      h: 0,
      line: { color: theme.light, pt: 0.6, transparency: 15 },
    });
  }
  slide.addShape(shape(pres, "rect"), {
    x: 0,
    y: 0,
    w: 0.16,
    h: H,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary },
  });
  slide.addShape(shape(pres, "roundRect"), {
    x: 6.95,
    y: 1.02,
    w: 1.25,
    h: 1.25,
    rectRadius: 0.14,
    line: { color: theme.secondary, pt: 1.5 },
    fill: { color: theme.light },
  });
  slide.addShape(shape(pres, "roundRect"), {
    x: 8.0,
    y: 2.58,
    w: 0.82,
    h: 0.82,
    rectRadius: 0.12,
    line: { color: theme.accent, pt: 1.5 },
    fill: { color: theme.bg },
  });
  slide.addShape(shape(pres, "roundRect"), {
    x: 6.52,
    y: 3.56,
    w: 1.08,
    h: 1.08,
    rectRadius: 0.12,
    line: { color: theme.primary, pt: 1 },
    fill: { color: theme.primary },
  });
  addArrow(slide, pres, theme, 7.58, 2.25, 8.0, 2.58, theme.accent);
  addArrow(slide, pres, theme, 7.15, 3.56, 7.8, 3.32, theme.secondary);
  slide.addText("AI", {
    x: 7.16,
    y: 1.42,
    w: 0.82,
    h: 0.2,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 20,
    bold: true,
    color: theme.secondary,
    align: "center",
  });
  slide.addText("PEV", {
    x: 8.12,
    y: 2.88,
    w: 0.58,
    h: 0.16,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 13,
    bold: true,
    color: theme.accent,
    align: "center",
  });
  slide.addText("Agent", {
    x: 6.68,
    y: 3.98,
    w: 0.76,
    h: 0.16,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 12,
    bold: true,
    color: theme.bg,
    align: "center",
  });
  slide.addText(data.title, {
    x: 0.85,
    y: 1.1,
    w: 5.85,
    h: 1.15,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 30,
    bold: true,
    color: theme.primary,
    fit: "shrink",
  });
  slide.addText(data.subtitle, {
    x: 0.9,
    y: 2.48,
    w: 5.9,
    h: 0.28,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 13,
    color: theme.primary,
    fit: "shrink",
  });
  slide.addShape(shape(pres, "roundRect"), {
    x: 0.9,
    y: 3.22,
    w: 1.65,
    h: 0.42,
    rectRadius: 0.12,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary },
  });
  slide.addText("团队分享", {
    x: 0.9,
    y: 3.36,
    w: 1.65,
    h: 0.11,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 10,
    bold: true,
    color: theme.bg,
    align: "center",
  });
  slide.addText(data.footer, {
    x: 0.9,
    y: 4.18,
    w: 5.6,
    h: 0.54,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 10.8,
    color: theme.primary,
    breakLine: false,
    fit: "shrink",
  });
}

function renderAgenda(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, "OVERVIEW");
  addHeader(slide, theme, data.title, data.subtitle);
  slide.addText(data.hero, {
    x: 0.85,
    y: 1.62,
    w: 8.3,
    h: 0.38,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 19,
    bold: true,
    color: theme.primary,
    align: "center",
    fit: "shrink",
  });
  data.items.forEach((item, i) => {
    const x = 0.75 + i * 2.18;
    addCard(slide, pres, theme, x, 2.45, 1.78, 1.32, {
      kicker: String(i + 1).padStart(2, "0"),
      title: item,
      titleSize: 13,
      fill: i === 1 ? theme.light : theme.bg,
      line: i === 1 ? theme.secondary : theme.light,
      body: data.descriptions?.[i] || "",
      bodyY: 3.14,
      bodyH: 0.28,
      bodySize: 9.2,
    });
  });
  addNote(slide, pres, theme, data.note);
}

function renderCards(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  const cols = data.columns || 2;
  const cardW = cols === 2 ? 3.9 : 2.55;
  data.cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = cols === 2 ? 0.85 + col * 4.35 : 0.72 + col * 3.05;
    const y = cols === 2 ? 1.74 + row * 1.27 : 1.78 + row * 1.25;
    addCard(slide, pres, theme, x, y, cardW, card.h || 1.0, {
      kicker: card.kicker,
      title: card.title,
      body: card.body,
      titleSize: card.titleSize || 13,
      bodySize: card.bodySize || 9.7,
      fill: card.fill || (i % 2 ? theme.light : theme.bg),
      line: card.line || (i % 2 ? theme.secondary : theme.light),
      bodyY: card.bodyY,
      bodyH: card.bodyH,
    });
  });
  if (data.note) addNote(slide, pres, theme, data.note, 4.7, data.noteFill, data.noteLine);
}

function renderFlow(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  const steps = data.steps;
  const totalW = steps.length * 1.55 + (steps.length - 1) * 0.5;
  const start = (W - totalW) / 2;
  steps.forEach((step, i) => {
    const x = start + i * 2.05;
    addFlowCard(slide, pres, theme, x, data.y || 2.32, step, i % 2 ? theme.light : theme.bg, i % 2 ? theme.secondary : theme.light);
    if (i < steps.length - 1) {
      addArrow(slide, pres, theme, x + 1.62, (data.y || 2.32) + 0.34, x + 1.98, (data.y || 2.32) + 0.34);
    }
  });
  if (data.body) {
    addCard(slide, pres, theme, 1.05, 3.55, 7.9, 0.8, {
      title: data.bodyTitle || "关键点",
      body: data.body,
      titleSize: 12,
      bodyY: 3.94,
      bodyH: 0.22,
      fill: theme.light,
      line: theme.light,
    });
  }
  if (data.note) addNote(slide, pres, theme, data.note);
}

function renderLanes(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  data.lanes.forEach((lane, i) => {
    const y = 1.68 + i * 1.0;
    slide.addShape(shape(pres, "roundRect"), {
      x: 0.95,
      y,
      w: 8.05,
      h: 0.72,
      rectRadius: 0.12,
      line: { color: i === 0 ? theme.secondary : i === 2 ? theme.accent : theme.light, pt: 1 },
      fill: { color: i === 1 ? theme.bg : theme.light },
    });
    slide.addText(String(i + 1), {
      x: 1.18,
      y: y + 0.21,
      w: 0.35,
      h: 0.13,
      margin: 0,
      fontFace: EN_FONT,
      fontSize: 12,
      bold: true,
      color: i === 2 ? theme.accent : theme.secondary,
      align: "center",
    });
    slide.addText(lane.title, {
      x: 1.75,
      y: y + 0.14,
      w: 1.45,
      h: 0.15,
      margin: 0,
      fontFace: CN_FONT,
      fontSize: 13,
      bold: true,
      color: theme.primary,
      fit: "shrink",
    });
    slide.addText(lane.body, {
      x: 3.25,
      y: y + 0.12,
      w: 5.2,
      h: 0.42,
      margin: 0,
      fontFace: CN_FONT,
      fontSize: 10,
      color: theme.primary,
      fit: "shrink",
      breakLine: false,
    });
  });
  if (data.note) addNote(slide, pres, theme, data.note);
}

function renderDivider(slide, pres, theme, data) {
  slide.background = { color: theme.primary };
  slide.addShape(shape(pres, "rect"), {
    x: 0.72,
    y: 0.72,
    w: 0.14,
    h: 4.2,
    line: { color: theme.accent, transparency: 100 },
    fill: { color: theme.accent },
  });
  slide.addText(data.part, {
    x: 1.15,
    y: 1.16,
    w: 2,
    h: 0.2,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 12,
    bold: true,
    color: theme.accent,
  });
  slide.addText(data.title, {
    x: 1.15,
    y: 1.58,
    w: 6.7,
    h: 0.7,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 27,
    bold: true,
    color: theme.bg,
    fit: "shrink",
  });
  slide.addText(data.subtitle, {
    x: 1.15,
    y: 2.5,
    w: 6.2,
    h: 0.34,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 12,
    color: theme.bg,
    fit: "shrink",
  });
  addCard(slide, pres, theme, 7.7, 1.2, 1.25, 1.25, {
    title: "AI\nAgent",
    titleSize: 16,
    titleY: 1.55,
    titleH: 0.5,
    fill: theme.secondary,
    line: theme.secondary,
    titleColor: theme.bg,
  });
  addBadge(slide, pres, theme, data.index, true);
}

function renderCodeFlow(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  addCodeBlock(slide, pres, theme, data.code, 0.65, 1.64, 4.55, 2.95, 8.4);
  const steps = ["读取当前上下文", "调用 LLM 判断下一步", "是否需要工具？", "执行工具", "返回结果"];
  const positions = [
    [5.55, 1.78],
    [5.55, 2.58],
    [5.55, 3.38],
    [5.55, 4.18],
    [7.65, 4.18],
  ];
  positions.forEach((pos, i) => {
    addCard(slide, pres, theme, pos[0], pos[1], i === 2 ? 3.0 : 1.65, 0.48, {
      title: steps[i],
      titleSize: i === 2 ? 10.5 : 10.2,
      titleY: pos[1] + 0.16,
      titleH: 0.12,
      fill: i === 1 || i === 3 ? theme.light : theme.bg,
      line: i === 1 || i === 3 ? theme.secondary : theme.light,
    });
  });
  addArrow(slide, pres, theme, 6.38, 2.28, 6.38, 2.56, theme.secondary);
  addArrow(slide, pres, theme, 6.38, 3.08, 6.38, 3.36, theme.secondary);
  addArrow(slide, pres, theme, 6.38, 3.88, 6.38, 4.16, theme.accent);
  addArrow(slide, pres, theme, 7.1, 3.62, 7.62, 4.18, theme.accent);
  addNote(slide, pres, theme, data.note);
}

function renderMessages(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  data.blocks.forEach((block, i) => {
    addCodeBlock(slide, pres, theme, block, 0.55 + i * 3.12, 1.6, 2.82, 3.0, 7.5);
    if (i < data.blocks.length - 1) addArrow(slide, pres, theme, 3.42 + i * 3.12, 3.04, 3.6 + i * 3.12, 3.04);
  });
  addNote(slide, pres, theme, data.note);
}

function renderTools(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  addCodeBlock(slide, pres, theme, data.code, 0.62, 1.7, 4.55, 2.75, 8.1);
  addCard(slide, pres, theme, 5.45, 1.7, 3.8, 2.75, {
    kicker: "类比理解",
    title: "把 tools 理解成一张菜单",
    fill: theme.light,
    line: theme.accent,
  });
  data.items.forEach((item, i) => {
    slide.addText(item[0], {
      x: 5.72,
      y: 2.34 + i * 0.34,
      w: 0.92,
      h: 0.12,
      margin: 0,
      fontFace: CODE_FONT,
      fontSize: 9.2,
      bold: true,
      color: theme.secondary,
      fit: "shrink",
    });
    slide.addText(item[1], {
      x: 6.7,
      y: 2.34 + i * 0.34,
      w: 2.15,
      h: 0.12,
      margin: 0,
      fontFace: CN_FONT,
      fontSize: 9.4,
      color: theme.primary,
      fit: "shrink",
    });
  });
  addNote(slide, pres, theme, data.note);
}

function renderQuote(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  addCard(slide, pres, theme, 1.05, 1.72, 7.9, 1.0, {
    title: data.quote,
    titleSize: 18,
    titleY: 2.04,
    titleH: 0.28,
    fill: theme.light,
    line: theme.light,
  });
  data.cards.forEach((item, i) => {
    addCard(slide, pres, theme, 1.0 + i * 2.65, 3.16, 2.25, 0.95, {
      kicker: String(i + 1).padStart(2, "0"),
      body: item,
      bodyY: 3.54,
      bodyH: 0.3,
      bodySize: 9.4,
      fill: i === 1 ? theme.light : theme.bg,
      line: i === 1 ? theme.secondary : theme.light,
    });
  });
}

function renderTwoColumn(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, data.subtitle);
  addCard(slide, pres, theme, 0.68, 1.72, 4.15, 2.65, {
    kicker: data.left.kicker,
    title: data.left.title,
    body: data.left.body,
    fill: data.left.fill || theme.bg,
    line: data.left.line || theme.light,
    bodyY: 2.34,
    bodyH: 1.7,
    bodySize: data.left.bodySize || 10.5,
    bodyFont: data.left.bodyFont,
  });
  addCard(slide, pres, theme, 5.08, 1.72, 4.15, 2.65, {
    kicker: data.right.kicker,
    kickerColor: theme.accent,
    title: data.right.title,
    body: data.right.body,
    fill: data.right.fill || theme.light,
    line: data.right.line || theme.accent,
    bodyY: 2.34,
    bodyH: 1.7,
    bodySize: data.right.bodySize || 10.5,
    bodyFont: data.right.bodyFont,
  });
  if (data.note) addNote(slide, pres, theme, data.note);
}

function renderClosing(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  addHeader(slide, theme, data.title, "");
  addCard(slide, pres, theme, 1.05, 1.68, 7.9, 1.05, {
    title: data.quote,
    titleSize: 20,
    titleY: 2.02,
    titleH: 0.28,
    fill: theme.light,
    line: theme.light,
  });
  data.items.forEach((item, i) => {
    addCard(slide, pres, theme, 1.05 + i * 2.65, 3.25, 2.25, 0.9, {
      title: item,
      titleSize: i === 2 ? 10.5 : 12.5,
      titleY: 3.55,
      titleH: 0.22,
      fill: i === 1 ? theme.light : theme.bg,
      line: i === 1 ? theme.secondary : theme.light,
    });
  });
}

function renderQA(slide, pres, theme, data) {
  addChrome(slide, pres, theme, data.index, data.section);
  slide.addText("Q&A", {
    x: 0,
    y: 1.36,
    w: 10,
    h: 0.72,
    margin: 0,
    fontFace: EN_FONT,
    fontSize: 36,
    bold: true,
    color: theme.secondary,
    align: "center",
  });
  slide.addText(data.subtitle, {
    x: 1.15,
    y: 2.35,
    w: 7.7,
    h: 0.22,
    margin: 0,
    fontFace: CN_FONT,
    fontSize: 14,
    bold: true,
    color: theme.primary,
    align: "center",
    fit: "shrink",
  });
  addCard(slide, pres, theme, 3.55, 3.45, 2.9, 0.58, {
    title: "谢谢大家",
    titleSize: 13,
    titleY: 3.65,
    titleH: 0.16,
    fill: theme.light,
    line: theme.accent,
  });
}

function renderSlide(pres, theme, data) {
  const slide = pres.addSlide();
  if (data.type === "cover") renderCover(slide, pres, theme, data);
  if (data.type === "agenda") renderAgenda(slide, pres, theme, data);
  if (data.type === "cards") renderCards(slide, pres, theme, data);
  if (data.type === "flow") renderFlow(slide, pres, theme, data);
  if (data.type === "lanes") renderLanes(slide, pres, theme, data);
  if (data.type === "divider") renderDivider(slide, pres, theme, data);
  if (data.type === "codeFlow") renderCodeFlow(slide, pres, theme, data);
  if (data.type === "messages") renderMessages(slide, pres, theme, data);
  if (data.type === "tools") renderTools(slide, pres, theme, data);
  if (data.type === "quote") renderQuote(slide, pres, theme, data);
  if (data.type === "twoColumn") renderTwoColumn(slide, pres, theme, data);
  if (data.type === "closing") renderClosing(slide, pres, theme, data);
  if (data.type === "qa") renderQA(slide, pres, theme, data);
  return slide;
}

module.exports = { renderSlide };
