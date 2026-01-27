import React from "react";
import type { ProblemStructure } from "@/types/types";
import { mockProblems } from "@/utilities/mockData";

const ProblemList = () => {
    const DifficultyLabel: Record<ProblemStructure["difficulty"], string> = {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
    }

  return (
    <div>
      {mockProblems.map((problem: ProblemStructure) => (
        <div key={problem.id}>
          <h1>{problem.name}</h1>
          <p>{DifficultyLabel[problem.difficulty]}</p>
          <p>{problem.lastAttempt}</p>
          <p>{problem.unfixedMistakesCount}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
