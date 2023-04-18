// "1. Компонент отримує в пропсах початкові дані створюваного завдання та метод закриття модалки.
// 2. Компонент рендерить:
// - Modal - універсальнтй компонент модалки зі стандартним інтерфейсом
// - TaskForm - компонент форми для створення завдання
// 3. Компонент Modal обгортає TaskForm"

import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ date, category, onCloseModal, type, id }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <TaskForm
        date={date}
        category={category}
        onCloseModal={onCloseModal}
        type={type}
        id={id}
      />
    </Modal>
  );
};
