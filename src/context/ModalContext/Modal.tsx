import { title } from 'process';
import { createContext } from 'react';

export const ModalContext = createContext({

    openModal: (title) => {},
    closeModal: () => {}

})