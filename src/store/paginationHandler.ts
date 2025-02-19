import { create } from "zustand";

interface PaginationState {
  currentPage: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: Number(localStorage.getItem("currentPage")) || 1,
  pageSize: Number(localStorage.getItem("pageSize")) || 10,

  setCurrentPage: (page: number) => {
    localStorage.setItem("currentPage", page.toString());
    set({ currentPage: page });
  },

  setPageSize: (size: number) => {
    localStorage.setItem("pageSize", size.toString());
    set({ pageSize: size });
  },
}));

export default usePaginationStore;
