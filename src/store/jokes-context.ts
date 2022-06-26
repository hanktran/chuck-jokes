import React from "react";
import { Joke } from "../models/Joke";

export enum ActionTypes {
  SET_JOKES = "SET_JOKES",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
}

export interface JokesAction {
  type: ActionTypes;
  payload?: any;
}

export type JokesContextObj = {
  jokes: Joke[];
  categories: string[];
  selectedCategory: Joke[];
  setJokes: (jokes: Joke[], categories: string[]) => void;
  setSelectedCategory: (jokes: Joke[]) => void;
};

const JokesContext = React.createContext<JokesContextObj>({
  jokes: [],
  categories: [],
  selectedCategory: [],
  setJokes: (jokes: Joke[], categories: string[]) => {},
  setSelectedCategory: (jokes: Joke[]) => {},
});

export default JokesContext;
