import React from 'react';
import styled, { css } from 'styled-components';
import Portal from './Portal';

const Modal = ({ id, open, onClose, closable, children }: any) => {
  if (!open) return null;
  return (
    <Portal id={id}>
      <ModalLayout open={open}>
        <ModalOverlay className="modal-overlay" />
        <ModalWrapper className="modal-wrapper">
          <ModalBody className="modal-body">
            {closable && (
              <ModalCloseButton onClick={onClose}>
                <svg
                  className="review-modal__close__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="nonzero"
                    d="M11.6 10l7.1 7.1-1.6 1.6-7.1-7.1-7.1 7.1-1.6-1.6L8.4 10 1.3 2.9l1.6-1.6L10 8.4l7.1-7.1 1.6 1.6z"
                  ></path>
                </svg>
              </ModalCloseButton>
            )}
            <ModalContent className="modal-content">{children}</ModalContent>
          </ModalBody>
        </ModalWrapper>
      </ModalLayout>
    </Portal>
  );
};

export default Modal;

const ModalLayout = styled.div<any>`
  ${({ open }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    opacity: ${open ? 1 : 0};
  `}
`;

const ModalOverlay = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div<any>`
  position: relative;
  height: 100%;
  outline: 0;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalBody = styled.div<any>`
  position: relative;
  overflow-y: auto;
  max-height: 100%;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  background-color: #fff;
`;

const ModalContent = styled.div<any>`
  width: 100%;
  padding: 40px;
`;

const ModalCloseButton = styled.div<any>`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  cursor: pointer;
`;
