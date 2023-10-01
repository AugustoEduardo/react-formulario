import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch} from "@mui/material";

function DadosPessoais({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""}})

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
        <form onSubmit={event => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }
        }}>
            <TextField
                onChange={event => setNome(event.target.value)}
                value={nome}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="Nome"
                label="Nome"
                name="nome"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setSobrenome(event.target.value)}
                value={sobrenome}
                id="Sobrenome"
                name="Sobrenome"
                label="Sobrenome"
                color="primary"
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setCpf(event.target.value)}
                value={cpf}

                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                id="CPF"
                name="cpf"
                label="CPF"
                color="primary"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                checked={promocoes}
                control={<Switch onChange={(event) => setPromocoes(event.target.checked)}
                name="Promoções"/>}
                label="Promoções"
            />

            <FormControlLabel
                checked={novidades}
                control={<Switch onChange={(event) => setNovidades(event.target.checked)}
                name="Novidades" color="secondary" />}
                label="Novidades"
            />

            <Button type="submit" variant="contained">
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais