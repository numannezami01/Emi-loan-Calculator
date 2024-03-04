import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const nav = () => {
  return (
    <Box
      sx={{
        position:"fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        width: "100%",
        marginTop: "-70px",
        bgcolor:"#F9F9F9",
       boxShadow:"rgba(85, 166, 246, 0.1) 0px 0px 1px, rgba(85, 166, 246, 0.15) 1px 1.5px 2px -1px, rgba(85, 166, 246, 0.15) 4px 4px 12px -2.5px",
       backdropFilter:"blur(24px)",
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box item sx={{ p: 2 }}>
        <Image height={50} width={120} src="/logo.png" alt="" />
      </Box>
      <Box item sx={{ p: 2 }}>
        <Button variant="contained" href="http://fcdlive.com/">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default nav;
