import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";

const GuideContext = createContext();

const initialState = {
  status: "",
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "data/loading":
      return {
        ...state,
        status: action.payload,
      };
    case "data/error":
      return {
        ...state,
        status: "error",
      };
    case "data/fetched":
      return {
        ...state,
        status: "ready",
        data: action.payload,
      };
    default:
      throw new Error("unknown action");
  }
}

function GuideProvider({ children }) {
  const [{ status, data }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getGuideData() {
      try {
        dispatch({ type: "data/loading", payload: "loading" });
        const res = await fetch(
          "https://pand3moniumx3.github.io/MONOCHROMATIC_API/react.json"
        );
        const data = await res.json();
        dispatch({ type: "data/fetched", payload: data });
      } catch {
        dispatch({ type: "data/error" });
      } finally {
        dispatch({ type: "data/loading", payload: "ready" });
      }
    }
    getGuideData();
  }, []);

  return (
    <GuideContext.Provider value={{ status, data }}>
      {children}
    </GuideContext.Provider>
  );
}

function useGuide() {
  const context = useContext(GuideContext);
  if (context === undefined)
    throw new Error("useGuide used outside of GuideProvider");
  return context;
}

export { GuideProvider, useGuide };
