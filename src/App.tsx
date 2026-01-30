import { useEffect, useState } from "react";
import AddProblemModal from "./components/AddProblemModal";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { mockProblems } from "./utilities/mockData";

export function App() {
  const [problems, setProblems] = useState(mockProblems);
  const [showAddProblem, setShowAddProblem] = useState(false);

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
        />
      )}
      <Sidebar />
      <Home setShowAddProblem={setShowAddProblem} problems={problems} setProblems={setProblems} />
    </div>
  );
}

export default App;
