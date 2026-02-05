import { useEffect } from "react";
import AddProblemModal from "./components/AddProblemModal";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { useProblems } from "./store/store";

export function App() {
  const {
    // to show/hide modal
    showAddProblem,

    // to reset modal field values on Esc keydown
    setShowAddProblem,
    setProblemName,
    setProblemUrl,
    setProblemDifficulty,
    setProblemMistakes,
    resetModalFields,
  } = useProblems();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetModalFields();
        setShowAddProblem(false);
      }
    };

    // add event only if modal active
    if (showAddProblem) {
      window.addEventListener("keydown", handleEscape);
    }

    // remove event on return
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showAddProblem]);

  return (
    <div className="grid grid-cols-[240px_1fr] h-screen">
      {showAddProblem && <AddProblemModal />}
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
