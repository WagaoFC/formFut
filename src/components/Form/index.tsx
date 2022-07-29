import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com'
import { Container } from './styled'
import { FootballLoader } from '../FootballLoader'

export function Form() {

    const date = new Date();
    let day = date.getDay();
    let hours = date.getHours();

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {

        // if (day === 5 && hours < 9) {
        //     toast.warning('Tente após às 9h 🕧', { autoClose: 10000 });
        //     return
        // }

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
            <form onSubmit={sendEmail}>
                <h1>Lista Society 04/08</h1>
                <input type="text" required placeholder="Nome ou apelido" name="name" />
                <input type="submit" value="Enviar meu nome consagrado" />
            </form>
            {/* <FootballLoader /> */}
        </Container>
    )
}