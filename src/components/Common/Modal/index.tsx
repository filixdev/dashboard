import styled from "styled-components";
import { CloseIcon } from "../../Icons/Icons";

interface ModalCustomProps {
    children: React.ReactNode
    onCloseModal: () => void
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    z-index: 10000;
`

const ContainerModal = styled.div`
    background-color: white;
    border: 1px solid black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    width: 620px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;


    & > svg {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
    }
`

export const Modal: React.FC<ModalCustomProps> = ({ children, onCloseModal }) => {
    return (
        <ModalOverlay>
            <ContainerModal>
                <CloseIcon onClick={onCloseModal} />
                {children}
            </ContainerModal>
        </ModalOverlay>
    );
};
