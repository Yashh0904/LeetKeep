import type { ProblemStructure } from "@/types/types";
import { Trash2Icon, Edit2Icon } from "lucide-react";
import type { setBool, Difficulty } from "@/types/types";

type Props = {
  problems: ProblemStructure[];
  setProblems: React.Dispatch<React.SetStateAction<ProblemStructure[]>>;
  setShowAddProblem: setBool;
  editingProblemId: string | null;
  setEditingProblemId: React.Dispatch<React.SetStateAction<string | null>>;
  setProblemName: React.Dispatch<React.SetStateAction<string>>;
  setProblemUrl: React.Dispatch<React.SetStateAction<string>>;
  setProblemDifficulty: React.Dispatch<React.SetStateAction<Difficulty | null>>;
  setProblemMistakes: React.Dispatch<React.SetStateAction<number>>;
};

const ProblemList = ({
  problems,
  setProblems,
  setShowAddProblem,
  editingProblemId,
  setEditingProblemId,
  setProblemName,
  setProblemUrl,
  setProblemDifficulty,
  setProblemMistakes,
}: Props) => {
  const DifficultyLabel: Record<ProblemStructure["difficulty"], string> = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };

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
            onClick={() =>
              setProblems(problems.filter((curr) => problem.id !== curr.id))
            }
            className="text-neutral-500 hover:text-red-800/80"
          />
          <Edit2Icon
            onClick={() => {
              setShowAddProblem((prev) => !prev);
              setEditingProblemId(problem.id);
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
