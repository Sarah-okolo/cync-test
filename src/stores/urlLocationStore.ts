// All url related state management is done here
import {create} from "zustand";

// type definition for the url path store
type UrlPathStoreType = {
  urlPath: string,
  setUrlPath: (path: string) => void
};
// store for the url path of the current page 
export const useUrlPathStore = create<UrlPathStoreType>((set) => ({
  urlPath: '/',
  setUrlPath: (path) => set({ urlPath: path })
}));