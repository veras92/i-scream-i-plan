import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ onCloseModal, ...rest }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <TaskForm onCloseModal={onCloseModal} {...rest} />
    </Modal>
  );
};
