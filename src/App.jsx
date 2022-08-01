import Modal from "./components/Modal";
import Sidebar from "./components/sidebar/Sidebar";
import useDisclosure from "./hooks/useDisclosure";
import "./styles.css";
export default function App() {
  const {
    isOpen: isOpenModal,
    close: closeModal,
    open: openModal,
  } = useDisclosure();
  const {
    isOpen: isOpenSide,
    close: closeSide,
    open: openSide,
  } = useDisclosure();

  return (
    <div className="App">
      <div className="container">
        <Sidebar visible={isOpenSide} close={closeSide} />
        <h1>useDisclosure custom hook</h1>
        <div className="button-container">
          <button onClick={openSide}>Open sidebar</button>
          <button onClick={openModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={closeModal} />
      </div>
    </div>
  );
}
