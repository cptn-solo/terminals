import React, { useState } from "react";
import { ModalContext } from "./Modal";
import { FC } from "react";
import { Modal } from "../../Components";

export const ModalProvider: FC = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState({ children, title: '' });

    const openModal = (modalConfig: React.SetStateAction<any>) => {
        setModalContent(modalConfig);

        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }



    const valueModalProvider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            { modalOpened && <Modal { ...modalContent } />}
            { children }
        </ModalContext.Provider>
    )
}