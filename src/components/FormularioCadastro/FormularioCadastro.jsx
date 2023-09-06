import React from "react";
import { Button, TextField } from "@mui/material";

function FormularioCadastro(){
    return (
        <form>
            <TextField id="Nome" label="Nome" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <TextField id="Sobrenome" label="Sobrenome" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <TextField id="CPF" label="CPF" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <label>Promoções</label>
            <input type='checkbox'/>

            <label>Novidades</label>
            <input type='checkbox'/>

            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro