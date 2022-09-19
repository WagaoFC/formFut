import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com'
import { Container } from './styled'
import { FootballLoader } from '../FootballLoader'

export function Form() {

    const [load, setLoad] = useState<boolean>(false)

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        setLoad(true);

        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_7c9ah5n', e.currentTarget, 'BAQh7Ti6q9nYik8Yk')

            .then((result) => {
                toast.success('Você está na lista ⚽');
                setLoad(false);

            }, (error) => {
                toast.error('Eitaa! Tente novamente 💀');
                setLoad(false);
            });
        e.currentTarget.reset()
    }

    return (
        <Container>
            <ToastContainer position="top-center" />
            <form onSubmit={sendEmail}>
                <h1>Lista Society 22/09</h1>
                <input id="name" type="text" required placeholder="Nome ou apelido" name="name" />
                <input type="submit" value="Enviar meu nome consagrado" />
            </form>
            {(load ? <FootballLoader /> : '')}
        </Container >
    )
}