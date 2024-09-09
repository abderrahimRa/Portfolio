import React from "react";

interface ContactNavProps {
  icons: React.ElementType[];
  IconSize?: string;
}

const ContactNav: React.FC<ContactNavProps> = ({
  icons,
  IconSize = "text-xl",
}) => {
  return (
    <nav className="flex h-full w-full items-center justify-center rounded-lg border-2 bg-slate-800 text-slate-100">
      <ul className="flex h-fit w-[50vw] items-center justify-cent justify-evenly  py-2">
        {icons.map((Item, index) => (
          <li key={index} className="flex">
            {
              <span className={` inline-block ${IconSize}`} >
                {React.createElement(Item)}
              </span>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactNav;
