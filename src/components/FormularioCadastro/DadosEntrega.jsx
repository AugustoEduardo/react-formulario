import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={event =>{
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField
                onChange={event => setCep(event.target.value)}
                value={cep}
                id="cep"
                label="CEP"
                type="number"
                color="primary"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                onChange={event => setEndereco(event.target.value)}
                value={endereco}
                id="endereco"
                label="Endereço"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setNumero(event.target.value)}
                value={numero}
                id="numero"
                label="Numero"
                type="number"
                color="primary"
                variant="outlined"
                margin="normal"
            />

            <TextField
                onChange={event => setEstado(event.target.value)}
                value={estado}
                id="estado"
                label="Estado"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                onChange={event => setCidade(event.target.value)}
                value={cidade}
                id="cidade"
                label="Cidade"
                type="text"
                color="primary"
                variant="outlined"
                margin="normal"
                required
            />

            <Button type="submit" variant="contained" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega