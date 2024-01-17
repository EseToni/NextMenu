import React from "react";

import styles from "./custom-modal.module.scss";

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  modalState,
  toggleModal,
}) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = event.target as HTMLDivElement;

    if (targetElement.classList.contains(styles.containerOverlay)) {
      toggleModal();
    }
  };

  return (
    <>
      {modalState && (
        <div className={styles.containerOverlay} onClick={handleOverlayClick}>
          <div className={styles.containerModal}>
            <h3 className={styles.buttonClose}>X</h3>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;

type CustomModalProps = {
  modalState: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
};
