import React, { useContext, ChangeEvent } from "react";
import { StateContext } from "../../context/state";

const ImageUpload: React.FC = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("StateContext must be used within a StateProvider");
  }

  const { uploadProfileImage, setSelectedImages } = context;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImages([e.target.files[0]]);
    }
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row justify-between">
        <article>
          <label htmlFor="upload" className="lg:hidden">
            Upload profile image
          </label>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={handleFileChange}
          />
        </article>
        <button
          type="submit"
          onClick={uploadProfileImage}
          className="bg-purple-600 text-purple-100 font-bold py-2 px-6 rounded hover:ring-4 hover:ring-purple-300 transition-all duration-150 text-sm"
        >
          Upload Profile Image
        </button>
      </div>
    </>
  );
};

export default ImageUpload;
