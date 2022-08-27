import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FC } from "react";
import CommanderButton from "./CommanderButton";
type Props = {
  menuItems: any[];
};

const DesktopMenu: FC<Props> = ({ menuItems }) => {
  const router = useRouter();
  return (
    <Box
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      justifyContent="end"
    >
      {menuItems.map((item) => (
        <Button
          key={item.name}
          sx={{ my: 2, color: "white", display: "block", mx: 1 }}
          onClick={() => {
            router.push(item.link);
          }}
        >
          <a href={item.link}>{item.name}</a>
        </Button>
      ))}
      <CommanderButton />
    </Box>
  );
};

export default DesktopMenu;
