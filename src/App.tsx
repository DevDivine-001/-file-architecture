import { RouterProvider } from "react-router-dom";

import { Router } from "./routes/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
