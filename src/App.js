import './App.css';
import Modal from './components/UI/Modal/Modal';
import Alert from './components/UI/Alert/Alert';
import {useState} from "react";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Modal show={showModal} title="Modal title">
                Modal text
            </Modal>
            <Alert show={showAlert} type="primary">
                <p>Alert text</p>
            </Alert>
        </>
    );
}

export default App;
