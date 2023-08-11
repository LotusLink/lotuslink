import React, { useContext } from "react";
import { StateContext } from "../../context/state";
import Links from "./Links";
import ImageUpload from "./ImageUpload";

const Form: React.FC = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("StateContext must be used within a StateProvider");
  }

  const { name, setName, bio, setBio } = context;

  return (
    <>
      <div>
        <ImageUpload />

        <form className="flex flex-col gap-8">
          <article>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </article>

          <article>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols={30}
              rows={5}
              placeholder="Tell us something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </article>
        </form>

        <article className="mt-8">
          <Links />
        </article>
      </div>
    </>
  );
};

export default Form;
