import React, { Suspense } from "react";

import { Header } from "./components";

const LazyLayout = React.lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Carregando...</p>}>
        <LazyLayout />
      </Suspense>
    </>
  )
};

export default App;