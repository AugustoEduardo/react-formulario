import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch} from "@mui/material";

function DadosPessoais({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField
                onChange={event => setNome(event.target.value)}
                value={nome}
                id="Nome"
                label="Nome"
                color="primary"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setSobrenome(event.target.value)}
                value={sobrenome}
                id="Sobrenome"
                label="Sobrenome"
                color="primary"
                required
                variant="outlined" 
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={event => setCpf(event.target.value)}
                value={cpf}

                onBlur={(event) => {
                    const ehValido = validarCPF(event.target.value)
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                id="CPF"
                label="CPF"
                color="primary"
                required
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
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosPessoais