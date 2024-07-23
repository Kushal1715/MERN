import React, { useState } from "react";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={`h-[80vh] w-[${
          open ? "100px" : "800px"
        }] border-2 border-black`}
      >
        <button onClick={openDrawer}>
          {open === true ? "Open +" : "close -"} Drawer
        </button>
      </div>
    </>
  );
};

export default Drawer;
