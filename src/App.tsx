import { useEffect, useState } from "react";
import AddProblemModal from "./components/AddProblemModal";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { mockProblems } from "./utilities/mockData";
import type { Difficulty } from "./types/types";

export function App() {
  
  const [problems, setProblems] = useState(mockProblems);
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [editingProblemId, setEditingProblemId] = useState<string | null>(null);

  const [problemName, setProblemName] = useState("");
  const [problemUrl, setProblemUrl] = useState("");
  const [problemDifficulty, setProblemDifficulty] = useState<Difficulty | null>(
    null,
  );
  const [problemMistakes, setProblemMistakes] = useState(0);



  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === "Escape")
        setShowAddProblem(false);
    }

    if(showAddProblem) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);

  }, [showAddProblem]);

  return (
    <div className="grid grid-cols-[240px_1fr] h-screen">
      {showAddProblem && (
        <AddProblemModal
          problems={problems}
          setShowAddProblem={setShowAddProblem}
          setProblems={setProblems}
          editingProblemId={editingProblemId}
          setEditingProblemId={setEditingProblemId}
          problemName={problemName}
          setProblemName={setProblemName}
          problemUrl={problemUrl}
          setProblemUrl={setProblemUrl}
          problemDifficulty={problemDifficulty}
          setProblemDifficulty={setProblemDifficulty}
          problemMistakes={problemMistakes}
          setProblemMistakes={setProblemMistakes}
        />
      )}
      <Sidebar />
      <Home
        setShowAddProblem={setShowAddProblem}
        problems={problems}
        setProblems={setProblems}
        editingProblemId={editingProblemId}
        setEditingProblemId={setEditingProblemId}
        setProblemName={setProblemName}
        setProblemUrl={setProblemUrl}
        setProblemDifficulty={setProblemDifficulty}
        setProblemMistakes={setProblemMistakes}
      />
    </div>
  );
}

export default App;
