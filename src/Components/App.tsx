import "./App.css"
import { ModalProvider } from "../context"
import { Controls } from ".";
import { Modal } from "./Modal";


const App = () => {
    return (
    <ModalProvider>
    <div className="App">
        <Controls />
    </div>

    </ModalProvider>
    );
} 

export {App}