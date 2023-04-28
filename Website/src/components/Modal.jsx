import React from 'react';
import styles from '../styles/modalStyles.module.css';

const Modal = ({ isOpen, onClose }) => {
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Thank you for your interest in our company!!</h2>
              <button className={styles.modalCloseButton} onClick={onClose}>
                X
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ultrices ligula, vel consectetur ipsum suscipit eget. Morbi posuere tincidunt leo, at maximus purus sagittis ut. Fusce ut posuere mi, nec tristique felis.
                Vestibulum ut massa eu elit pulvinar dapibus sit amet nec est. Nullam vitae elit ornare, sodales tellus vel, volutpat lorem. Integer eu nulla at arcu eleifend aliquet vitae vel mi.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
