import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField
                onChange={event => setEmail(event.target.value)}
                value={email}
                id="email"
                name="email"
                label="email"
                type="email"
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />

            <TextField
                onChange={event => setSenha(event.target.value)}
                value={senha}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />

            <Button type="submit" variant="contained">
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario