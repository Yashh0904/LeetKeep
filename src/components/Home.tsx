import ProblemList from "./ProblemList";
import { useProblems } from "@/store/store";

const Home = () => {
  const { setShowAddProblem } = useProblems();

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
      <ProblemList />
    </div>
  );
};

export default Home;
