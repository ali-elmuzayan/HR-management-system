import { Routes, Route } from "react-router";
import Index from "./pages/home/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default App;
