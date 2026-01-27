type Difficulty = "easy" | "medium" | "hard";

export type ProblemStructure = {
  id: string;
  name: string;
  difficulty: Difficulty;
  link?: string;
  unfixedMistakesCount: number;
  lastAttempt: string
};