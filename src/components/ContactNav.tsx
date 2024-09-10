import React from "react";

interface ContactNavProps {
  icons: React.ElementType[];
}

const ContactNav: React.FC<ContactNavProps> = ({
  icons,
  }) => {
  return (
    <nav className="flex h-full w-full items-center justify-center rounded-lg border-2 bg-slate-800 text-slate-100">
      <ul className="flex h-fit w-[50vw] items-center justify-cent justify-evenly  py-2">
        {icons.map((Item, index) => (
          <li key={index} className="flex">
            {
              <span className="text-2xl hover:border-4 hover:border-[#3c9484] hover:shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b] rounded-full "  >
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
