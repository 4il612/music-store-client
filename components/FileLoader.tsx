import React, { useRef } from "react";
interface FLProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileLoader = ({ setFile, accept, children }: FLProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  return (
    <div
      style={{ display: "inline-block" }}
      onClick={() => ref.current?.click()}
    >
      <input
        ref={ref}
        style={{ display: "none" }}
        type="file"
        accept={accept}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileLoader;
