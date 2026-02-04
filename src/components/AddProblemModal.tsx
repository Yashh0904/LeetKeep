import type { ProblemStructure, setBool } from "@/types/types";
import type { Difficulty } from "@/types/types";

type Props = {
  problems: ProblemStructure[];
  setShowAddProblem: setBool;
  setProblems: React.Dispatch<React.SetStateAction<ProblemStructure[]>>;
  editingProblemId: string | null;
  setEditingProblemId: React.Dispatch<React.SetStateAction<string | null>>;
  problemName: string;
  setProblemName: React.Dispatch<React.SetStateAction<string>>;
  problemUrl: string;
  setProblemUrl: React.Dispatch<React.SetStateAction<string>>;
  problemDifficulty: Difficulty | null;
  setProblemDifficulty: React.Dispatch<React.SetStateAction<Difficulty | null>>;
  problemMistakes: number;
  setProblemMistakes: React.Dispatch<React.SetStateAction<number>>;
};

const AddProblemModal = ({
  problems,
  setShowAddProblem,
  setProblems,
  editingProblemId,
  setEditingProblemId,
  problemName,
  setProblemName,
  problemUrl,
  setProblemUrl,
  problemDifficulty,
  setProblemDifficulty,
  problemMistakes,
  setProblemMistakes,
}: Props) => {
  return (
    <div className="fixed inset-0 grid place-items-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative w-[400px] rounded-lg bg-white p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (editingProblemId) {
              setProblems(
                problems.map((p) =>
                  p.id === editingProblemId
                    ? {
                        ...p,
                        name: problemName,
                        difficulty: problemDifficulty as Difficulty,
                        link: problemUrl,
                        unfixedMistakesCount: problemMistakes,
                      }
                    : p,
                ),
              );
              setProblemName("");
              setProblemDifficulty(null);
              setProblemUrl("");
              setProblemMistakes(0);
              setEditingProblemId(null);
            } else {
              const newProblem: ProblemStructure = {
                id: crypto.randomUUID().slice(0, 8),
                name: problemName,
                difficulty: problemDifficulty as Difficulty,
                link: problemUrl,
                unfixedMistakesCount: problemMistakes,
                lastAttempt: new Date().toISOString().slice(0, 10),
              };

              setProblems([...problems, newProblem]);
            }

            setShowAddProblem(false);
          }}
        >
          <div className="flex flex-col gap-2">
            <input
              required
              name="name"
              type="text"
              placeholder="Problem Name"
              value={problemName}
              onChange={(e) => setProblemName(e.target.value)}
            />
            <select
              required
              name="difficulty"
              id="difficulty"
              value={problemDifficulty || ""}
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
              required
              name="link"
              type="text"
              placeholder="Problem Link"
              value={problemUrl}
              onChange={(e) => setProblemUrl(e.target.value)}
            />
            <input
              required
              name="mistakes"
              type="number"
              min="0"
              value={problemMistakes}
              placeholder="Mistakes Count"
              onChange={(e) => setProblemMistakes(Number(e.target.value))}
            />
            <button type="submit">
              {editingProblemId === null ? "Add" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProblemModal;
