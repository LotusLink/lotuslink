import React from "react";
import Form from "../components/ui/Form";
import ImageUpload from "../components/ui/ImageUpload";
import Links from "../components/ui/Links";
import Phone from "../components/ui/Phone";

const Active: React.FC = () => {
  return (
    <div>
      <h1>You're logged in</h1>
      <Form />
      <ImageUpload />
      <Links />
      <Phone />
    </div>
  );
};

export default Active;
