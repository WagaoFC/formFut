import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com'
import { Container } from './styled'
import { FootballLoader } from '../FootballLoader'

export function Form() {

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_7c9ah5n', e.currentTarget, 'BAQh7Ti6q9nYik8Yk')

            .then((result) => {
                toast.success('Você está na lista ⚽');

            }, (error) => {
                toast.error('Eitaa! Tente novamente 💀');

            });
        e.currentTarget.reset()
    }

    return (
        <Container>
            <ToastContainer position="top-center" />
            <h1>Lista Society 21/07</h1>
            <form onSubmit={sendEmail}>
                <input type="text" required placeholder="Nome ou apelido" name="name" />
                <input type="submit" value="Enviar meu nome consagrado" />
            </form>
            {/* <FootballLoader /> */}
        </Container>
    )
}