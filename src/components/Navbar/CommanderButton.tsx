import Button from "@mui/material/Button";
import { useRouter } from "next/router";
const CommanderButton = () => {
  const router = useRouter();
  return (
    <Button
      sx={{ my: 2, color: "white", display: "block", mx: 1, padding: 0 }}
      variant="contained"
      onClick={() => {
        router.push("/#top-section");
      }}
    >
      <a
        href="/#top-section"
        style={{
          padding: "6px 16px",
        }}
      >
        Commander
      </a>
    </Button>
  );
};

export default CommanderButton;
