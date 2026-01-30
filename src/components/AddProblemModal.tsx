import type { ProblemStructure, setBool } from "@/types/types";
import React, { useState } from "react";
import type { Difficulty } from "@/types/types";

type Props = {
  problems: ProblemStructure[];
  setShowAddProblem: setBool;
  setProblems: React.Dispatch<React.SetStateAction<ProblemStructure[]>>;
};

const AddProblemModal = ({
  problems,
  setShowAddProblem,
  setProblems,
}: Props) => {
  const [problemName, setProblemName] = useState("");
  const [problemUrl, setProblemUrl] = useState("");
  const [problemDifficulty, setProblemDifficulty] = useState<Difficulty | null>(
    null,
  );
  const [problemMistakes, setProblemMistakes] = useState(0);

  return (
    <div className="fixed inset-0 grid place-items-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-[400px] rounded-lg bg-white p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newProblem: ProblemStructure = {
              id: crypto.randomUUID().slice(0, 8),
              name: problemName,
              difficulty: problemDifficulty as Difficulty,
              link: problemUrl,
              unfixedMistakesCount: problemMistakes,
              lastAttempt: new Date().toISOString().slice(0, 10),
            };

            setProblems([...problems, newProblem]);
            setShowAddProblem(false);
          }}
        >
          <div className="flex flex-col gap-2">
            <input
              name="name"
              required
              type="text"
              placeholder="Problem Name"
              onChange={(e) => setProblemName(e.target.value)}
            />
            <select
              name="difficulty"
              id="difficulty"
              required
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setProblemDifficulty(e.target.value as Difficulty)
              }
            >
              <option value="" className="text-gray-500">
                Select difficulty
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <input
              name="link"
              required
              type="text"
              placeholder="Problem Link"
              onChange={(e) => setProblemUrl(e.target.value)}
            />
            <input
              required
              name="mistakes"
              type="number"
              min="0"
              placeholder="Mistakes Count"
              onChange={(e) => setProblemMistakes(Number(e.target.value))}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProblemModal;
