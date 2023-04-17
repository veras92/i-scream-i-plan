// "1. Компонент отримує в пропсах дані необхідні для створення картки.
// 2. Компонент підписаний на url аватару юзера
// 3. Компонент рендерить блоки:
//  - розмітку з описом завдання, який має фіксовану висоту і текст з описом, якщо той не вміщається, обрізається та показуються три крапки.
//  - аватар юзера.
//  - пріоритет завдання, з фоном відповідного кольору.
//  - TaskToolbar - інетрфейс для роботи з карткою
//  - TaskModal - модалка з формою для редагування завдання."

import { TaskModal } from 'shared/components/TaskModal/TaskModal';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';

export const TaskColumnCard = ({ task }) => {
  return (
    <>
      <h3>{task.title}</h3>
      <p>{task.priority}</p>
      <TaskToolbar task={task} />
      <TaskModal />
    </>
  );
};
