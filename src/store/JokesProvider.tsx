import React, { useReducer } from "react";

import { Joke } from "../models/Joke";
import JokesContext, {
  ActionTypes,
  JokesAction,
  JokesContextObj,
} from "./jokes-context";

interface Props {
  children: React.ReactNode;
}

const defaultJokesState: JokesContextObj = {
  jokes: [],
  categories: [],
  selectedCategory: [],
  setJokes: (jokes: Joke[], categories: string[]) => {},
  setSelectedCategory: (jokes: Joke[]) => {},
};

const jokesReducer = (state: JokesContextObj, action: JokesAction) => {
  switch (action.type) {
    case ActionTypes.SET_JOKES:
      return {
        ...state,
        ...action.payload,
        selectedCategory: action.payload.jokes,
      };
    case ActionTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const JokesContextProvider: React.FC<Props> = ({ children }) => {
  const [jokesState, dispatchJokesAction] = useReducer(
    jokesReducer,
    defaultJokesState
  );

  const setJokesHandler = (jokes: Joke[], categories: string[]): void => {
    dispatchJokesAction({
      type: ActionTypes.SET_JOKES,
      payload: { jokes, categories },
    });
  };

  const setSelectedCategoryHandler = (jokes: Joke[]) => {
    dispatchJokesAction({
      type: ActionTypes.SET_SELECTED_CATEGORY,
      payload: { selectedCategory: jokes },
    });
  };

  const contextValue: JokesContextObj = {
    jokes: jokesState.jokes,
    categories: jokesState.categories,
    selectedCategory: jokesState.selectedCategory,
    setJokes: setJokesHandler,
    setSelectedCategory: setSelectedCategoryHandler,
  };

  return (
    <JokesContext.Provider value={contextValue}>
      {children}
    </JokesContext.Provider>
  );
};

export default JokesContextProvider;
