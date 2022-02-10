import React, { useState } from "react";
import { ModalContext } from "./Modal";
import { FC } from "react";
import { Modal } from "../../Components";

export const ModalProvider: FC = ({children}) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(undefined);
    
    const openModal= (modalConfig) => {
        setModalContent(modalConfig);

        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }



    const valuseModalProvider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valuseModalProvider}>
            { modalOpened && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}