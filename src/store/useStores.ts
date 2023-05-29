import { useContext, createContext } from "react";

import { RootStore, stores } from "./index";

export function useStores() {
    return useContext<RootStore>(createContext<RootStore>(stores));
}
