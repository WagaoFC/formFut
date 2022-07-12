import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        width: 50%;

        input {
            border: none;
            width: 100%;
            border-radius: 10px;
            padding: 10px;
        }
    }    
`