enum ShapeKind {
  Circle,
  Square,
}

// type Leve = "junior" | "middle" | "senior";

enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior",
}

interface Dev {
  level: Grades.Junior;
  login: "junior";
  skills: ["html, css, js, react, ts"];
}

function gradeDev(dev: { level: Grades }) {
  if (dev.level === Grades.Junior) {
    dev.level = Grades.Middle;
  } else if (dev.level === Grades.Middle) {
    dev.level = Grades.Senior;
  }
}
