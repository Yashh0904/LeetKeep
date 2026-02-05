import type { Difficulty, ProblemStructure } from "@/types/types";
import { mockProblems } from "@/utilities/mockData";
import { create } from "zustand";

type Updates = Pick<
  ProblemStructure,
  "name" | "link" | "difficulty" | "unfixedMistakesCount"
>;

type ProblemStore = {
  problems: ProblemStructure[];
  addProblem: (problem: ProblemStructure) => void;
  deleteProblem: (problemId: string) => void;
  editProblem: (problemId: string, updates: Updates) => void;
  
  editingProblemId: string | null;
  showAddProblem: boolean;
  problemName: string;
  problemUrl: string;
  problemDifficulty: Difficulty | null;
  problemMistakes: number;
  
  setEditingId: (id: string | null) => void;
  setShowAddProblem: (show: boolean) => void
  setProblemName: (name: string) => void
  setProblemUrl: (url: string) => void
  setProblemDifficulty: (difficulty: Difficulty | null) => void
  setProblemMistakes: (mistakes: number) => void

  resetModalFields: () => void
};

export const useProblems = create<ProblemStore>()((set) => ({
  // problem data + setters
  problems: mockProblems,

  addProblem: (problem) => {
    set((state) => ({ problems: [...state.problems, problem] }));
  },
  deleteProblem: (problemId) => {
    set((state) => ({
      problems: state.problems.filter((p) => p.id !== problemId),
    }));
  },
  editProblem: (problemId, updates) => {
    set((state) => ({
      problems: state.problems.map((p) =>
        p.id === problemId ? { ...p, ...updates } : p,
      ),
    }));
  },

  //modal states and actions
  editingProblemId: null,
  showAddProblem: false,
  problemName: "",
  problemUrl: "",
  problemDifficulty: null,
  problemMistakes: 0,
  setEditingId: (id) => {
    set(() => ({
      editingProblemId: id,
    }));
  },
  setShowAddProblem: (show) => set({ showAddProblem: show }),
  setProblemName: (name) => set({ problemName: name }),
  setProblemUrl: (url) => set({ problemUrl: url }),
  setProblemDifficulty: (difficulty: Difficulty | null) =>
    set({ problemDifficulty: difficulty }),
  setProblemMistakes: (mistakes: number) => set({ problemMistakes: mistakes }),

  resetModalFields: () => set({
    problemName: "",
    problemUrl: "",
    problemDifficulty: null,
    problemMistakes: 0,
  }),
}));
