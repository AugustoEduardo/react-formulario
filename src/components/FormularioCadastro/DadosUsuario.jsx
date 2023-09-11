import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField
                onChange={event => setEmail(event.target.value)}
                value={email}
                id="email"
                label="email"
                type="email"
                required
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setSenha(event.target.value)}
                value={senha}
                id="senha"
                label="senha"
                type="password"
                required
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario