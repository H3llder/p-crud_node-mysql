import React, { useState } from "react";
import * as C from "./styles";


export const RegisterProducts = () => {

    const [values, setValues] = useState();

    const handleChangesValues = (value : any) => {
        // console.log(value.target.value);
        setValues((prevValue : any) => ({
            ...prevValue,
            [value.target.name] : value.target.value,
        }));
    }

    const handleClickButton = () => {
        console.log(values);
    }

    return (
        <C.FormRegister>
            <h1>Registrar Produtos</h1>
            
            <input 
                type="text" 
                name="nome" 
                placeholder="Nome do Produto" 
                onChange={handleChangesValues}
            />
            <input 
                type="text" 
                name="preco" 
                placeholder="Preço"
                onChange={handleChangesValues}
            />
            <input 
                type="text" 
                name="categoria" 
                placeholder="Categoria"
                onChange={handleChangesValues}
            />
            <button onClick={() => handleClickButton()}>Cadastrar Produto</button>
        </C.FormRegister>
    );
}