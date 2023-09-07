import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log(nome, sobrenome)
        }}>
            <TextField
                onChange={event => setNome(event.target.value)}
                id="Nome"
                label="Nome"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setSobrenome(event.target.value)}
                id="Sobrenome"
                label="Sobrenome"
                color="primary"
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField
                id="CPF"
                label="CPF"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={<Switch name="Promoções" defaultChecked />}
                label="Promoções"
            />

            <FormControlLabel
                control={<Switch name="Novidades" defaultChecked color="secondary" />}
                label="Novidades"
            />

            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro