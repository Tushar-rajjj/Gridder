import { useState, useEffect } from "react";

function Dashboard(props) {
  const [format, setFormat] = useState("A4");

  useEffect(() => {
    const formatSelect = document.getElementById("format-checkbox");

    formatSelect.addEventListener("change", (e) => {
      setFormat(e.target.value);
      const paperPresets = {
        A2: { width: 420, height: 594 },
        A3: { width: 297, height: 420 },
        A4: { width: 210, height: 297 },
        A5: { width: 148, height: 210 },
      };
      const selectedFormat = paperPresets[e.target.value];
      props.setCanvasWidth(selectedFormat.width);
      props.setCanvasHeight(selectedFormat.height);
    });
  }, [format]);

  return (
    <div className="w-[30%] h-full rounded-2xl bg-[#FDFDFD] flex flex-col justify-start items-start p-5">
      <h4 className="text-xl">Setting</h4>
      <div className="w-full h-fit flex flex-col gap-2 mt-4">
        <label>Grid Type</label>
        <button className="w-full h-fit rounded-2xl cursor-pointer text-lg py-1 bg-[#a8aae0]">
          Custom
        </button>
      </div>
      <h4 className="text-xl mt-4">Format</h4>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-4 mt-1">
        <label htmlFor="format-checkbox">Select Format</label>
        <select
          name="format"
          id="format-checkbox"
          className="w-full h-10 cursor-pointer rounded-xl px-5 border outline-none border-dashed border-[#1a1a1a]"
        >
          <option value="A2">A2 (42 x 59.4cm)</option>
          <option value="A3">A3 (29.7 x 42cm)</option>
          <option value="A4">A4 (21 x 29.7cm)</option>
          <option value="A5">A5 (14.8 x 21cm)</option>
        </select>
      </div>
      <hr className="bg-[#2d2d2d] h-0.5 rounded-2xl mt-5 w-full" />
      <div className="w-full h-fit flex justify-between items-center gap-4">
        <div className="w-full h-fit flex flex-col gap-2 mt-4">
          <label>Rows:</label>
          <input
            type="range"
            className="w-full h-fit rounded-2xl"
            min={0}
            max={40}
            onChange={(e) => {
              props.setRows(e.target.value);
            }}
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2 mt-4">
          <label>Columns:</label>
          <input
            type="range"
            className="w-full h-fit rounded-2xl"
            min={0}
            max={40}
            onChange={(e) => {
              props.setColumns(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full h-fit flex justify-start items-center gap-4 mt-4">
        <label htmlFor="color-picker">Line color</label>
        <input
          type="color"
          name="color"
          id="color-picker"
          className="w-auto h-10 cursor-pointer aspect-square"
          onChange={(e) => {
            props.setColor(e.target.value);
          }}
        />
      </div>
      <div className="w-full h-fit flex justify-between items-center gap-4 mt-4">
        <label htmlFor="line-opacity">Line opacity</label>
        <input
          type="range"
          name="line-opacity"
          id="line-opacity"
          className="w-70 h-fit rounded-2xl"
          min={0}
          max={10}
          onChange={(e) => {
            props.setOpacity(e.target.value);
          }}
        />
      </div>
      <div className="w-full h-fit flex justify-between items-center gap-4 mt-4">
        <label htmlFor="line-width">Line width</label>
        <input
          type="range"
          name="line-width"
          id="line-width"
          min={2}
          max={8}
          className="w-70 h-fit rounded-2xl"
          onChange={(e) => {
            props.setLineWidth(e.target.value);
            // console.log(e.target.value);
          }}
        />
      </div>
      <div className="w-full h-fit flex justify-start items-center gap-4 mt-4">
        <label htmlFor="adjust-checkbox">Adjust grid</label>
        <input
          type="checkbox"
          name="adjust-checkbox"
          id="adjust-checkbox"
          className="w-5 h-auto aspect-square"
        />
      </div>
      <div className="w-full h-fit flex justify-start items-center gap-4 mt-4">
        <button
          onClick={() => {
            props.setImg(null);
          }}
          className="w-full h-10 cursor-pointer bg-[#f28b82] rounded-xl text-lg"
        >
          Upload another Image
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
