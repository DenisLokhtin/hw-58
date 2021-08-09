import './App.css';
import Modal from './components/UI/Modal/Modal';
import Alert from './components/UI/Alert/Alert';
import {useState} from "react";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    const showAlertHandler = () => {
        setShowAlert(true);
    };

    const hideAlertHandler = () => {
        setShowAlert(false);
    };

    const close = () => {
        alert('CLOSE');
    };

    const okay = () => {
        alert('OKAY')
    };

    return (
        <>
            <Modal okay={okay} close={close} hide={hideModalHandler} show={showModal} title="Modal title">
                Modal text
            </Modal>

            <Alert dismiss={hideAlertHandler} show={showAlert} type="primary">
                <p>Alert text</p>
            </Alert>

            <div className="btns">
                <button onClick={showAlertHandler}>Показать Alert</button>
                <button onClick={showModalHandler}>Показать Modal</button>
            </div>
        </>
    );
}

export default App;
