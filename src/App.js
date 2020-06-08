import React, { Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";

const Data = React.lazy(() => import("./components/Data"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Data name="Tehseen Afzal" />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
