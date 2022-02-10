import React, { Children } from "react";
import "./style.css";
import { useContext } from "react";
import { ModalContext } from "../../context";

export const Controls = () => {
    const { openModal, closeModal } = useContext(ModalContext);


    const handleClickFirstButtom = () => {
        openModal({
            title: 'Первая кнопка',
            children: 'Modal'
        });
    }

    const handleClickSecondButtom = () => {
        openModal({
            title: 'Вторая кнопка',
            children: <h1>SECOND MODLE</h1>
        });
    }


    const handleClickThridButtom = () => {
        openModal({
            title: 'Третья кнопка',
            children: <div><button onClick= {closeModal}>Close Modul</button></div>
        });
    }



    return(
        <div className="controls">
            <button onClick={handleClickFirstButtom}>Open first modal</button>
            <button onClick={handleClickSecondButtom}>Open second modal</button>
            <button onClick={handleClickThridButtom}>Open thrid modal</button>
        </div>

    )
}

function title(title: any, arg1: string) {
    throw new Error("Function not implemented.");
}
function modalOpened(arg0: { title: string; }) {
    throw new Error("Function not implemented.");
}

