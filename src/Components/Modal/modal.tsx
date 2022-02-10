import { title } from "process";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../context";
import "./style.css";

export const Modal = (props) => {
    const {children, title} = props;
    const { closeModal } = useContext(ModalContext);

    const [closing, setClosing] = useState(false);

    const hendelClose = () =>{
        setClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 300)
    }
    

    const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

    return(
        <div className={backdropClasses} onClick= {hendelClose}>
             <div className="modal" onClick={(event) => event.stopPropagation()}>

            <div className="modal-header">
                <h3>{title}</h3>
            </div>

                <div className="modal-body">
                    {children}
                    
                </div>

             </div>

        </div>


    )

}