import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Preview(props) {
  const [blackWhite, setBlackWhite] = useState(false);
  const [gridSize, setGridSize] = useState(10);
  const [stepX, setStepX] = useState(0);
  const [stepY, setStepY] = useState(0);

  const canvasRef = useRef(null);
  const downloadRef = useRef(null);
  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "gridder-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = props.img;
    img.alt = "Uploaded Image";

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      if (blackWhite === true) {
        ctx.filter = "saturate(0%) contrast(100%)";
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      drawGrid(ctx, canvas.width, canvas.height, gridSize);
    };
  }, [gridSize, props, blackWhite]);

  const drawGrid = (ctx, width, height, gridSize) => {
    setStepX(props.columns ? width / props.columns : width / gridSize);
    setStepY(props.rows ? height / props.rows : height / gridSize);

    // setStepX(width / gridSize);
    // setStepY(height / gridSize);

    ctx.strokeStyle = `${props.color}`;
    ctx.filter = `opacity(${props.opacity / 10})`;
    console.log(`opacity(${props.opacity / 10})`);
    ctx.lineWidth = `${props.lineWidth}`;

    // Vertical lines
    for (let i = 1; i < gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * stepX, 0);
      ctx.lineTo(i * stepX, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let i = 1; i < gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * stepY);
      ctx.lineTo(width, i * stepY);
      ctx.stroke();
    }
  };

  return (
    <div className="w-[40%] h-full max-h-full rounded-2xl flex flex-col justify-start items-start gap-5 p-5 bg-[#FDFDFD]">
      <h4 className="text-xl">Preview</h4>
      <div className="w-full h-fit flex justify-around items-center">
        <button
          onClick={() => setBlackWhite(!blackWhite)}
          className="w-auto h-10 px-4 cursor-pointer bg-[#a8aae0] text-lg rounded-xl"
        >
          {blackWhite === true ? "Normal" : "Black & White"}
        </button>
        <button
          ref={downloadRef}
          onClick={() => {
            handleDownload();
          }}
          className="w-auto h-10 px-4 cursor-pointer bg-[#a8aae0] text-lg rounded-xl"
        >
          Download
        </button>
      </div>
      <div className="p-2 px-5 flex justify-start items-center">
        <canvas ref={canvasRef} className="max-w-full max-h-full" id="canvas">
          Preview Canvas
        </canvas>
      </div>
    </div>
  );
}

export default Preview;
