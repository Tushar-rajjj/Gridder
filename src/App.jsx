import ControlPanel from "./components/ControlPanel";
import NotFound from "./components/NotFound";
import "./App.css";
import Page1 from "./pages/Page1";
import ArtWorks from "./pages/ArtWorks";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main w-screen overflow-x-hidden h-screen flex flex-col items-center justify-start">
        <ControlPanel />
        <Routes>
          <Route path="/Gridder" element={<Page1 />} />
          <Route path="/Gridder/ArtWorks" element={<ArtWorks />} />
          <Route path="/Gridder/Contact" element={<Contact />} />
          <Route path="/Gridder/Blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
