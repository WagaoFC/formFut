import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    width: 60vh;
    height: 50vh;

    form {
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        h1 {
        color: #fafafa;
        text-transform: uppercase;
        text-shadow: 1px 1px 0px #00b6f6,
                     1px 2px 0px #00b6f6,
                     1px 3px 0px #00b6f6,
                     1px 4px 0px #00b6f6,
                     1px 5px 0px #00b6f6,
                     1px 6px 0px #00b6f6,
                     1px 10px 5px #0063c7,
                     1px 15px 10px #0063c7,
                     1px 20px 30px #0063c7,
                     1px 25px 50px #0063c7;
        }

        input {
            width: 100%;
            border-radius: 10px;
            padding: 10px;
            border: 2px solid #0063c7;

            :last-child {
                border: none;
                cursor: pointer;
                color: #fafafa;
                font-weight: 500;
                background-color: #00b6f6;
                box-shadow: #0063c7 4px 4px 0;
                transition: transform 200ms, box-shadow 200ms;

                :active {
                    transform: translateY(4px) translateX(4px);
                    box-shadow: #0063c7 0 0 0;
                }
            }

            @media screen and (max-width: 480px) {
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 480px) {
        width: auto;
        height: 60vh;
    }
`