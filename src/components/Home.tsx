import ProblemList from "./ProblemList";
import type { ProblemStructure, setBool, Difficulty } from "@/types/types";

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

const Home = ({
  setShowAddProblem,
  problems,
  setProblems,
  editingProblemId,
  setEditingProblemId,
  setProblemName,
  setProblemUrl,
  setProblemDifficulty,
  setProblemMistakes,
}: Props) => {
  return (
    <div className="mt-8 ml-8">
      <div>
        <button
          className="bg-neutral-300 rounded-md p-2"
          onClick={() => setShowAddProblem(true)}
        >
          Add problem +
        </button>
      </div>
      <ProblemList
        problems={problems}
        setProblems={setProblems}
        setShowAddProblem={setShowAddProblem}
        editingProblemId={editingProblemId}
        setEditingProblemId={setEditingProblemId}
        setProblemName={setProblemName}
        setProblemUrl={setProblemUrl}
        setProblemDifficulty={setProblemDifficulty}
        setProblemMistakes={setProblemMistakes}
      />
    </div>
  );
};

export default Home;
