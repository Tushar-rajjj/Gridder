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
      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <div className="page1 w-screen h-screen flex flex-col items-center justify-start">
        <ControlPanel />
        <Routes>
          <Route path="/Gridder" element={<Page1 />} />
          <Route path="/Gridder/ArtWorks" element={<ArtWorks />} />
          <Route path="/Gridder/Contact" element={<Contact />} />
          <Route path="/Gridder/Blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
