import { Button, TextField } from "@mui/material";
import React from "react";

function DadosEntrega() {
    return (
        <form>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                color="primary"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                color="primary"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
            />

            <Button type="submit" variant="contained" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega