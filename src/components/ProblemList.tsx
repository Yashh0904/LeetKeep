import type { ProblemStructure } from "@/types/types";
import { Trash2Icon, Edit2Icon } from "lucide-react";
import { useProblems } from "@/store/store";

const ProblemList = () => {
  const DifficultyLabel: Record<ProblemStructure["difficulty"], string> = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };

  const {
    problems,
    deleteProblem,

    // edit actions
    setEditingId,
    setShowAddProblem,
    setProblemName,
    setProblemUrl,
    setProblemDifficulty,
    setProblemMistakes,
  } = useProblems();

  return (
    <div className="p-8 m-8">
      <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.2fr_0.2fr] gap-4 mb-8">
        <h1>Problem Name</h1>
        <p>Difficulty</p>
        <p>Last Attempt</p>
        <p>Mistakes Count</p>
      </div>
      {problems.map((problem: ProblemStructure) => (
        <div
          key={problem.id}
          className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.2fr_0.2fr] gap-4 mb-2"
        >
          <h1>{problem.name}</h1>
          <p>{DifficultyLabel[problem.difficulty]}</p>
          <p>{problem.lastAttempt}</p>
          <p>{problem.unfixedMistakesCount}</p>
          <Trash2Icon
            onClick={() => deleteProblem(problem.id)}
            className="text-neutral-500 hover:text-red-800/80"
          />
          <Edit2Icon
            onClick={() => {
              setEditingId(problem.id);

              // mount existing values to modal
              setShowAddProblem(true);
              setProblemName(problem.name);
              setProblemDifficulty(problem.difficulty);
              setProblemUrl(problem.link === undefined ? "" : problem.link);
              setProblemMistakes(problem.unfixedMistakesCount);
            }}
            className="text-neutral-500 hover:text-neutral-800"
          />
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
