import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const NavbarSideBar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.outerWidth < 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [window.outerWidth]);

  return (
    <div>
      <Navbar setShow={setShow} />
      {show && <Sidebar />}
    </div>
  );
};

export default NavbarSideBar;
