const LOCALE = args.widgetParameter || "fa-ir";

const COLOR_BACKGROUND = Color.dynamic(
  new Color("ffffff", 1),
  new Color("222222", 1)
);
const COLOR_TEXT = Color.dynamic(
  new Color("222222", 1),
  new Color("ffffff", 1)
);
const COLOR_BODY = Color.dynamic(
  new Color("666666", 1),
  new Color("cccccc", 1)
);
const TYPOGRAPHY_TITLE = Font.boldSystemFont(40);
const TYPOGRAPHY_HEADER = Font.systemFont(30);
const TYPOGRAPHY_BODY = Font.systemFont(15);

function renderYearAndMonth(widget, { year, month }) {
  const text = widget.addText(`${month} ${year}`);
  text.centerAlignText();
  text.textColor = COLOR_BODY;
  text.font = TYPOGRAPHY_BODY;
}

function renderDay(widget, { day }) {
  const text = widget.addText("🗓" + day);
  text.centerAlignText();
  text.textColor = COLOR_TEXT;
  text.font = TYPOGRAPHY_TITLE;
}

function renderWeekday(widget, { weekday }) {
  const text = widget.addText(weekday);
  text.centerAlignText();
  text.textColor = COLOR_TEXT;
  text.font = TYPOGRAPHY_HEADER;
}

function render() {
  const date = new Date();

  const year = date.toLocaleDateString(LOCALE, { year: "numeric" });
  const month = date.toLocaleDateString(LOCALE, { month: "long" });
  const day = date.toLocaleDateString(LOCALE, { day: "numeric" });
  const weekday = date.toLocaleDateString(LOCALE, { weekday: "long" });

  const widget = new ListWidget();

  widget.backgroundColor = COLOR_BACKGROUND;

  renderDay(widget, { day });

  renderWeekday(widget, { weekday });

  renderYearAndMonth(widget, { year, month });

  return widget;
}

Script.name("Global Calendar");
Script.setWidget(render());
Script.complete();
