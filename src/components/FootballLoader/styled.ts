import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    .box {
        margin: 60vh auto;
        width: 40px;
        height: 140px;
        position: relative;
  
        .shadow {
            position: absolute;
            width: 100%;
            height: 10px;
            background-color: grey;
            bottom: 0;
            border-radius: 100%;
            transform: scaleX(.8);
            opacity: .6;
            animation: shadowScale 1s linear infinite;
        }
    }

    .gravity {
        width: 40px;
        height: 40px;
        animation: bounce 1s cubic-bezier(0.68, 0.35, 0.29, 0.54) infinite;
    }

    .ball {
    width: 40px;
    height: 40px;
    background-image: url('https://cdn2.iconfinder.com/data/icons/activity-5/50/26BD-soccer-ball-128.png');
    background-size: cover;
    animation: roll .7s linear infinite;
    }

    @keyframes roll {
        0% {}
        100% { transform: rotate(360deg) }
    }

    @keyframes bounce {
        0% {}
        50% { transform: translateY(100px) }
        100% {}
    }
    @keyframes shadowScale {
        0% {}
        50% { transform: scaleX(1); opacity: .8;}
        100% {}
    }
`