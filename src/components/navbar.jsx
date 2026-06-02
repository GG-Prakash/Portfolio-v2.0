import { useState } from "react";
import clsx from "clsx";

const navItems = [
  "Story",
  "Projects",
  "Offering",
  "Testimonials",
  "Let's connect",
];

function Navbar() {
  const [activeItem, setActiveItem] = useState(navItems[0]);

  return (
    


        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-1 flex justify-center rounded-full bg-[#eceef1] px-3 py-2 "
        >
          {navItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <button
                key={item}
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveItem(item)}
                className={clsx(
                  "select-none rounded-full px-[18px] py-[9px] text-[13.5px] font-normal text-[#6b7280] transition-all duration-300 ease-[cubic-bezier(.25,.8,.25,1)] hover:text-[#1a1a2e] hover:shadow-[inset_3px_3px_8px_#c8cace,inset_-3px_-3px_8px_#ffffff]",
                  isActive &&
                    "font-medium text-[#1a1a2e] shadow-[inset_4px_4px_10px_#c0c3c8,inset_-4px_-4px_10px_#ffffff]",
                )}
              >
                {item}
              </button>
            );
          })}
        </nav>
 

  );
}

export default Navbar;
