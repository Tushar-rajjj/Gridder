import React, { useState, useEffect } from "react";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import Preview from "./Preview";

function Page1Container() {
  const [uploadType, setUploadType] = useState("File");

  const [img, setImg] = useState(null);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [format, setFormat] = useState("A4");
  const [gridType, setGridType] = useState("Custom");
  const [lineWidth, setLineWidth] = useState(5);

  function handleSelection(e, Type) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.classList.remove("addh5css");
    });
    // console.log(buttons)
    e.target.classList.add("addh5css");
    setUploadType(Type);
  }

  useEffect(() => {
    console.log(uploadType);
  }, [uploadType]);

  return (
    <div className="w-full h-full p-5 flex flex-col items-center overflow-hidden justify-start gap-6">
      <h2
        className={`text-[#878ae6] ${img === null ? "flex" : "hidden"} text-center font-semibold text-5xl`}
      >
        Free Online Grid Maker for Artists
      </h2>
      <div
        className={`w-full h-full ${img === null ? "flex" : "hidden"} flex-col pt-2 items-center justify-start gap-4 bg-white/99 rounded-3xl shadow-[0_0_40px_#BFC0DE]`}
      >
        <div className="w-fit h-fit p-3 flex items-center justify-center gap-4 bg-white/99 rounded-3xl shadow-[0_0_40px_#BFC0DE]">
          <button
            onClick={(e) => {
              handleSelection(e, "File");
            }}
            className="w-29 h-fit cursor-pointer addh5css py-1.5 rounded-2xl bg-[#F1F1F1] text-[#676767] font-normal hover:bg-[#E0E0E0] transition"
          >
            File
          </button>
          <button
            onClick={(e) => {
              handleSelection(e, "Link");
            }}
            className="w-29 h-fit cursor-pointer py-1.5 rounded-2xl bg-[#F1F1F1] text-[#676767] font-normal hover:bg-[#E0E0E0] transition"
          >
            Link
          </button>
        </div>
        {uploadType === "File" ? (
          <Upload type="File" img={img} setImg={setImg} />
        ) : (
          <Upload type="Link" img={img} setImg={setImg} />
        )}
      </div>
      <div
        className={`w-full h-full ${img !== null ? "flex" : "hidden"} justify-center items-center gap-2 mt-5`}
      >
        <Dashboard
          setColor={setColor}
          setOpacity={setOpacity}
          setRows={setRows}
          setColumns={setColumns}
          setFormat={setFormat}
          setGridType={setGridType}
          setLineWidth={setLineWidth}
        />
        <Preview
          img={img}
          color={color}
          opacity={opacity}
          rows={rows}
          columns={columns}
          format={format}
          gridType={gridType}
          lineWidth={lineWidth}
        />
      </div>
    </div>
  );
}

export default Page1Container;
