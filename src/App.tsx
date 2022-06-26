import JokesContextProvider from "./store/JokesProvider";
import { PageRoutes } from "./Routes";

import "./App.css";

function App() {
  return (
    <JokesContextProvider>
      <PageRoutes />
    </JokesContextProvider>
  );
}

export default App;
