import React from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormularioCadastro(){
    return (
        <form>
            <TextField id="Nome" label="Nome" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <TextField id="Sobrenome" label="Sobrenome" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <TextField id="CPF" label="CPF" color="primary" variant="outlined" margin="normal" required fullWidth/>

            <FormControlLabel control={<Switch name="Promoções" defaultChecked />} label="Promoções"/>

            <FormControlLabel control={<Switch name="Novidades" defaultChecked color="secondary"/>} label="Novidades"/>

            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro