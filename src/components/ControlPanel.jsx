import { Link } from "react-router-dom";

function ControlPanel() {
  const addStyle = (e) => {
    const h5Elements = document.querySelectorAll(".ControlPanel h5");
    h5Elements.forEach((el) => {
      el.classList.remove("addh5css");
    });
    e.target.classList.add("addh5css");
  };

  return (
    <div className="ControlPanel w-full h-28 pt-5 relative z-10 flex items-center justify-center">
      <div className="w-[40%] h-full p-3 rounded-2xl bg-white/99 shadow-[0_0_40px_#BFC0DE] flex items-center justify-center text-white text-xl font-normal">
        <div className="w-full h-full py-2 gap-5 bg-[#F1F1F1] rounded-3xl flex items-center justify-center text-[#676767]">
          <Link to="/Gridder">
            <h5
              onClick={(e) => {
                addStyle(e);
              }}
              className="w-29 py-2 cursor-pointer h-full rounded-2xl flex items-center justify-center addh5css"
            >
              Gridder
            </h5>
          </Link>
          <Link to="/Gridder/ArtWorks">
            <h5
              onClick={(e) => {
                addStyle(e);
              }}
              className="w-29 py-2 cursor-pointer h-full rounded-2xl flex items-center justify-center"
            >
              ArtWorks
            </h5>
          </Link>
          <Link to="/Gridder/Contact">
            <h5
              onClick={(e) => {
                addStyle(e);
              }}
              className="w-29 py-2 cursor-pointer h-full rounded-2xl flex items-center justify-center"
            >
              Contact
            </h5>
          </Link>
          <Link to="/Gridder/Blog">
            <h5
              onClick={(e) => {
                addStyle(e);
              }}
              className="w-29 py-2 cursor-pointer h-full rounded-2xl flex items-center justify-center"
            >
              Blog
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
