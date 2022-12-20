import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from './styled'
import { FootballLoader } from '../FootballLoader'

export function Form() {
    const [load, setLoad] = useState<boolean>(false)
    const today = new Date()
    const formattedDate = format(today, 'dd/MM')
    const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID
    const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        setLoad(true);

        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)

            .then((result) => {
                toast.success('Você está na lista ⚽');
                setLoad(false);

            }, (error) => {
                toast.error('Eitaa! Tente novamente 😊');
                setLoad(false);
            });
        e.currentTarget.reset()
    }

    return (
        <Container>
            <ToastContainer position="top-center" />
            <form onSubmit={sendEmail}>
                <h1>Lista Society {formattedDate}</h1>
                <input id="name" type="text" required placeholder="Nome ou apelido" name="name" />
                <input type="submit" value="Enviar meu nome consagrado" />
            </form>
            {(load ? <FootballLoader /> : '')}
        </Container >
    )
}