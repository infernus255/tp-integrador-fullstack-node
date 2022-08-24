import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingTask: boolean;
  isDragging: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;

  setIsAddingTask: (isAdding: boolean) => void;

  endDragging: () => void;
  startDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
