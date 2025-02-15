import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  readonly image: string;
  readonly closeModal: () => void;
  readonly isModalOpen: boolean;
}

function ImageModal({
  image,
  closeModal,
  isModalOpen,
}: ImageModalProps): JSX.Element {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={s.content}
      overlayClassName={s.overlay}
    >
      <img src={image} alt="Selected" className={s.image} />
    </Modal>
  );
}

export default ImageModal;
