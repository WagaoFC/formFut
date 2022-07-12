
import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import { Container } from './styled'

export function Form() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_7c9ah5n', e.target, 'BAQh7Ti6q9nYik8Yk')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");

            }, (error) => {
                alert(error.message)

            });
        e.target.reset()
    }

    return (
        <Container>
            <form onSubmit={sendEmail}>
                <input type="text" autoFocus required placeholder="Nome" name="name" />
                <input type="submit" value="Adicionar na lista" />
            </form>
        </Container>
    )
}