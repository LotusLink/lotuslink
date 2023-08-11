import { createContext, useState } from "react";
import axios from "axios";

export const StateContext = createContext();

export default function State({ children }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const [profileImage, setProfileImage] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: link,
      };
      setLinks([newItem, ...links]);
      setLink("");
    } else {
      alert("Input cannot be empty");
    }
  };

  const handleDelete = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const uploadProfileImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "smsymq5y");

    const postProfileImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/pskinnertech/image/upload",
          formData
        );
        setImageData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    postProfileImage();
  };

  const context = {
    name,
    setName,
    bio,
    setBio,
    links,
    link,
    setLinks,
    setLink,
    handleSubmit,
    handleDelete,
    uploadProfileImage,
    profileImage,
    setProfileImage,
    selectedImages,
    setSelectedImages,
    imageData,
    value,
    setValue,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
