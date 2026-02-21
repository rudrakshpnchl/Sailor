export type Difficulty = "easy" | "medium" | "hard";

export type WordHint = {
  word: string;
  difficulty: Difficulty;
  hints: {
    hint1: string;
    hint2: string;
    hint3: string;
  };
};

const mediumWords: WordHint[] = [
  { word: "eclipse", difficulty: "medium", hints: { hint1: "astronomy", hint2: "alignment of bodies", hint3: "temporary shadow event" } },
  { word: "compass", difficulty: "medium", hints: { hint1: "navigation", hint2: "magnetic direction", hint3: "used by explorers" } },
  { word: "glacier", difficulty: "medium", hints: { hint1: "ice mass", hint2: "moves slowly", hint3: "carves valleys" } },
  { word: "algorithm", difficulty: "medium", hints: { hint1: "logic process", hint2: "finite steps", hint3: "core of programming" } },
  { word: "nebula", difficulty: "medium", hints: { hint1: "space object", hint2: "gas cloud", hint3: "birthplace of stars" } },
  { word: "battery", difficulty: "medium", hints: { hint1: "energy storage", hint2: "chemical reactions", hint3: "powers devices" } },
  { word: "harvest", difficulty: "medium", hints: { hint1: "agriculture", hint2: "seasonal activity", hint3: "collecting crops" } },
  { word: "telescope", difficulty: "medium", hints: { hint1: "optics", hint2: "magnifies distance", hint3: "used in astronomy" } },
  { word: "voltage", difficulty: "medium", hints: { hint1: "electricity", hint2: "potential difference", hint3: "measured in volts" } },
  { word: "fossil", difficulty: "medium", hints: { hint1: "ancient remains", hint2: "rock preservation", hint3: "studied by paleontologists" } },
  { word: "current", difficulty: "medium", hints: { hint1: "flow", hint2: "electric or water", hint3: "measured in amperes" } },
  { word: "orbit", difficulty: "medium", hints: { hint1: "motion", hint2: "gravitational path", hint3: "planets follow it" } },
  { word: "enzyme", difficulty: "medium", hints: { hint1: "biology", hint2: "speeds reactions", hint3: "protein catalyst" } },
  { word: "signal", difficulty: "medium", hints: { hint1: "communication", hint2: "transmitted information", hint3: "can be analog or digital" } },
  { word: "fragment", difficulty: "medium", hints: { hint1: "piece", hint2: "broken part", hint3: "not whole anymore" } },
];

export default mediumWords;