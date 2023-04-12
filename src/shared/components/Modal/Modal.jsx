// "1. Компонент отримує в пропсах children та метод закриття модалки
// 2. Компонент створює блок розмітки що є фоном для отриманих children
// 3. блок children за замовчуванням розміщено по центру, або в іншому місці за допомогою додаткових налаштувань.
// 3. Компонент підключається в DOM через портал
// 4. Компонент має інтерфейс закриття по кліку на бекдроп та натисканню на Escape
// 5. Компонент під час розмонтування чистить за собою всі запущені ним процеси."

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Button, ModalWindow, Overlay, Svg } from './Modal.styled';
import sprite from 'shared/icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onCloseModal]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) {
      return;
    }
    onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <Button type="button" onClick={() => onCloseModal()}>
          <Svg width="20" height="20">
            <use href={`${sprite}#icon-x-close`} />
          </Svg>
        </Button>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func.isRequired,
};
