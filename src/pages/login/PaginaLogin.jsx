import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function PaginaLogin({ isAuthenticated }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (user === "admin" && password === "admin") {
      isAuthenticated(true);
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: "#f0f0f0",
          width: "400px",
          height: "300px",
          padding: "20px",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #ccc",
        }}
      >
        <Typography variant="p" component="h2">
          Login
        </Typography>
        <TextField
          id="user"
          label="Usuario"
          variant="outlined"
          value={user}
          onChange={(e) => {
            console.log(e.target.value);
            setUser(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Senha"
          variant="outlined"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          Entrar
        </Button>
      </Stack>
    </Stack>
  );
}
