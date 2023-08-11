import React, { useContext } from "react";
import { StateContext } from "../../context/state";

type LinkItem = {
  id: string;
  title: string;
};

const Links: React.FC = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("StateContext must be used within a StateProvider");
  }

  const { link, links, setLink, handleSubmit, handleDelete } = context;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="links">Links</label>
        <input
          type="text"
          name="link"
          id="link"
          placeholder="Add links to your socials"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </form>

      <ul className="mt-4">
        {links.map((linkItem: LinkItem, index: number) => (
          <li
            key={index}
            className="mb-2 py-3 px-2 bg-white rounded shadow text-purple-600 font-bold flex items-center justify-between"
          >
            {linkItem.title}{" "}
            <span
              onClick={() => handleDelete(linkItem.id)}
              className="text-3xl cursor-pointer hover:bg-purple-300 px-3 pb-1 rounded-full transition-all duration-150"
            >
              -
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
