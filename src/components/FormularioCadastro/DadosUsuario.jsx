import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha:{valido:true, texto:""}})

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event) {
        const {name, value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }


    function possoEnviar(){
        for (let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }

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
                fullWidth
            />

            <Button type="submit" variant="contained">
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario