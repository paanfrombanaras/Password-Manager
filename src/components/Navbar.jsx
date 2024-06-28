import React from "react";

const Navbar = () => {
  return (
    <>
    <div className=" fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <nav className="font-serif bg-gradient-to-t from-white to-purple-300 flex justify-center items-center py-2">
        <a href="/" className="flex justify-center items-center text-slate-900">
          <div className="font-bold text-lg">&lt;Pass</div>
          <div className="font-extrabold text-lg text-green-600">OP</div>
          <div className="font-bold text-lg">&gt;</div>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
