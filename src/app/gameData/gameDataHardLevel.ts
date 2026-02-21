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

const hardWords: WordHint[] = [
  { word: "entropy", difficulty: "hard", hints: { hint1: "thermodynamics", hint2: "disorder measure", hint3: "linked to arrow of time" } },
  { word: "paradox", difficulty: "hard", hints: { hint1: "logical puzzle", hint2: "self-conflicting idea", hint3: "truth hides inside contradiction" } },
  { word: "singularity", difficulty: "hard", hints: { hint1: "extreme physics", hint2: "infinite density?", hint3: "inside black holes" } },
  { word: "cipher", difficulty: "hard", hints: { hint1: "encoded text", hint2: "requires key", hint3: "cryptography tool" } },
  { word: "quantum", difficulty: "hard", hints: { hint1: "physics scale", hint2: "discrete values", hint3: "probabilistic behavior" } },
  { word: "axiom", difficulty: "hard", hints: { hint1: "mathematics", hint2: "assumed truth", hint3: "foundation of systems" } },
  { word: "topology", difficulty: "hard", hints: { hint1: "mathematics field", hint2: "shape without distance", hint3: "coffee cup equals donut" } },
  { word: "duality", difficulty: "hard", hints: { hint1: "two aspects", hint2: "wave and particle", hint3: "physics concept" } },
  { word: "inertia", difficulty: "hard", hints: { hint1: "motion resistance", hint2: "Newton's law", hint3: "objects keep state" } },
  { word: "superposition", difficulty: "hard", hints: { hint1: "quantum mechanics", hint2: "multiple states", hint3: "collapse on observation" } },
  { word: "asymptote", difficulty: "hard", hints: { hint1: "mathematics", hint2: "approaches forever", hint3: "never touches curve" } },
  { word: "metaphor", difficulty: "hard", hints: { hint1: "language device", hint2: "indirect comparison", hint3: "meaning beyond literal" } },
  { word: "resonance", difficulty: "hard", hints: { hint1: "physics phenomenon", hint2: "frequency matching", hint3: "amplitude increases" } },
  { word: "equilibrium", difficulty: "hard", hints: { hint1: "balanced state", hint2: "forces cancel", hint3: "chemical stability" } },
  { word: "fractal", difficulty: "hard", hints: { hint1: "geometry", hint2: "self similarity", hint3: "infinite complexity" } },
];

export default hardWords;