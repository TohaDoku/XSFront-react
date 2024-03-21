import React, { useRef, useState } from "react";

const FileInput = () => {
  const inputRef = useRef();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = (fileIndex) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(fileIndex, 1);
    setSelectedFiles(newFiles);
  };

  const handleOnChange = (event) => {
    const files = event.target.files;
    const newFiles = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }

    setSelectedFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = [...e.dataTransfer.files];
    const newFiles = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }

    setSelectedFiles(newFiles);
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
        multiple
      />

      {/* Button to trigger the file input dialog */}
      <div
        className={`file-btn ${dragging ? "dragging" : ""}`}
        onClick={onChooseFile}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span className="main-text-upload">Перетащите файлы</span> до 10 мб
      </div>

      {selectedFiles.length > 0 && (
        <div>
          {selectedFiles.map((file, index) => (
            <div className="selected-file" key={index}>
              <p>{file.name}</p>
              <button onClick={() => removeFile(index)}>
                <span className="material-symbols-rounded">Удалить</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileInput;
