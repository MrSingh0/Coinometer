import { useState } from "react";
import { Drawer } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Button from "../Button/Button";


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false); // Correcting the state setter function name

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}> {/* Corrected here */}
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="">
            <p className='link'>Home</p>
          </a>
          <a href="">
            <p className='link'>Compare</p>
          </a>
          <a href="">
            <p className='link'>Watchlist</p>
          </a>
          <a href="">
            <Button text="Dashboard"/>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
