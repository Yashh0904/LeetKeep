import ProblemList from "./ProblemList";
import type { ProblemStructure, setBool } from "@/types/types";

type Props = {
  problems: ProblemStructure[];
  setProblems: React.Dispatch<React.SetStateAction<ProblemStructure[]>>;
  setShowAddProblem: setBool;
};

const Home = ({ setShowAddProblem, problems, setProblems }: Props) => {
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
      />
    </div>
  );
};

export default Home;
