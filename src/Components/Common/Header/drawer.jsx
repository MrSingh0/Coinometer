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
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("Btn Clicked")}
            />
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
