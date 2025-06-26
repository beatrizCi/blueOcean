import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-end gap-8 p-6 text-sm text-white">
      {["About us", "Technology", "Impact", "Donate", "Contact"].map((item) => (
        <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:underline">
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;