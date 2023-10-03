import React, { useState, useContext } from "react";
import { Button, TextField, FormControlLabel, Switch} from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)



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
                required
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
                required
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
                required
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