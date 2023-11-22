import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../pages/formulario.css';
 
function Formulario() {
    const [formDados, setFormDados] = useState({nome: '', email: ''}); 
    //{} objeto JSON chave: valor ('' stringa vazia)
    //tudo na web eventos

    const {register, formState: {errors}, handlesubmit, reset} = useForm({defaultValues:{login: '', senha:''} })
    function handleChange(event) { //toda funcao recebe argumentos (arg1, arg2)
        console.log(event.target.value);
        setFormDados({...formDados,[event.target.name]: event.target.value})       
    }
    
    return(
        <section className='container'>
            <div className='formArea'>
                <form>
                    <label>Nome:</label>
                    <input type='text' name='nome' id='nome' 
                        onChange={event => handleChange(event)} value={formDados.nome} ></input>
                    <label>E-mail:</label>
                    <input type='email' name='email' id='email' onChange={event => handleChange(event)} value={formDados.email}></input>
                    <input type='submit' value='enviar' />
                </form>
                {JSON.stringify(formDados)}
                <form>
                    <input type='text'
                    {...register('login', {required: true})}
                    placeholder= 'login'/>
                    {errors.login && <span>Campo obrigatório</span>}
                </form>
            </div>
        </section>
    )
}
 
export default Formulario;