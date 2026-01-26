import { useState } from "react";

function Upload(props) {
  const [file, setFile] = useState(null);
  if (file !== null){
    props.setImg(file);
  }
  const handleUpload = (e, Type) => {
    if (Type === "File") {
      console.log(Type);
      setFile(URL.createObjectURL(e.target.files[0]));
    } else if (Type === "Link") {
      console.log(Type);
      setFile(e.target.value);
    }
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-start items-center">
        {props.type === "File" ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-5">
            <input
              id="File"
              type="file"
              placeholder="Drag and Drop here"
              className="border-2 border-dashed border-gray-300 rounded-lg p-10 w-100 text-center cursor-pointer hover:border-gray-500 transition"
              onChange={(e) => {
                handleUpload(e, "File");
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 pt-10">
            <input
              id="Url"
              type="text"
              placeholder="Paste URL"
              className="w-auto min-w-100 h-full border-2 border-gray-300 rounded-lg text-lg text-center px-2 py-3 hover:border-gray-500 transition"
              onChange={(e) => {
                handleUpload(e, "Link");
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Upload;
