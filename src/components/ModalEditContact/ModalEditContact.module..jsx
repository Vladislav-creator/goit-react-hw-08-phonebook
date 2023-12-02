import styled from '@emotion/styled';

export const Backdrop = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
 background-color: rgba(0, 0, 0, 0.6);

transition: opacity 300ms linear, visibility 300ms linear;
z-index: 1;
`;
export const Modal = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(1);

    height: 420px;
    width: 380px;
    background: #FFC0CB;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: transform 300ms linear;
    padding: 24px;
`;
export const Text = styled.p`
color: rgb(0, 0, 0);
font-size: larger;
font-weight: 700;
padding-bottom: 15px;
padding-top: 25px;
text-align: center;
`;
export const CloseButton = styled.button`
position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: #ADCFFF 0 -12px 6px inset;
    :hover,
    :focus{
        background: blueviolet;
        color: white;
        transform: scale(1.15);
    };
`;
 