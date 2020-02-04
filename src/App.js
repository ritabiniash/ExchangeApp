import React from 'react';
import Layout from "../src/Layout/Layout";
import { ErrorProvider } from "./contexts/error-context";

function App() {
  return (
    <div>
      <ErrorProvider>
        <Layout/>
      </ErrorProvider>
    </div>
  );
}

export default App;
