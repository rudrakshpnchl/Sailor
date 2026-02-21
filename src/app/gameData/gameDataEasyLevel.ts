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

const easyWords: WordHint[] = [
  { word: "cat", difficulty: "easy", hints: { hint1: "animal", hint2: "domestic pet", hint3: "says meow" } },
  { word: "apple", difficulty: "easy", hints: { hint1: "fruit", hint2: "red or green", hint3: "keeps doctor away?" } },
  { word: "car", difficulty: "easy", hints: { hint1: "vehicle", hint2: "four wheels", hint3: "used for travel" } },
  { word: "sun", difficulty: "easy", hints: { hint1: "star", hint2: "gives light", hint3: "center of solar system" } },
  { word: "book", difficulty: "easy", hints: { hint1: "reading", hint2: "pages", hint3: "contains stories" } },
  { word: "dog", difficulty: "easy", hints: { hint1: "animal", hint2: "loyal pet", hint3: "barks" } },
  { word: "tree", difficulty: "easy", hints: { hint1: "plant", hint2: "has leaves", hint3: "grows tall" } },
  { word: "phone", difficulty: "easy", hints: { hint1: "device", hint2: "communication", hint3: "fits in pocket" } },
  { word: "chair", difficulty: "easy", hints: { hint1: "furniture", hint2: "used for sitting", hint3: "has legs" } },
  { word: "water", difficulty: "easy", hints: { hint1: "liquid", hint2: "essential for life", hint3: "drinkable" } },
  { word: "ball", difficulty: "easy", hints: { hint1: "toy", hint2: "round shape", hint3: "used in sports" } },
  { word: "moon", difficulty: "easy", hints: { hint1: "space", hint2: "Earth's satellite", hint3: "visible at night" } },
  { word: "shoe", difficulty: "easy", hints: { hint1: "clothing", hint2: "worn on feet", hint3: "used for walking" } },
  { word: "cake", difficulty: "easy", hints: { hint1: "dessert", hint2: "sweet food", hint3: "birthday tradition" } },
  { word: "clock", difficulty: "easy", hints: { hint1: "time device", hint2: "has hands or digits", hint3: "tells time" } },
];

export default easyWords;