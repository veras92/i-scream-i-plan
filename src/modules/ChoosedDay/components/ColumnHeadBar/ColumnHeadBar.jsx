// "1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі."

export const ColumnHeadBar = ({ type }) => {
  const normalizeTitle = type => {
    switch (type) {
      case 'to-do':
        return 'To do';
      case 'in-progress':
        return 'In progress';
      case 'done':
        return 'Done';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <h2>{normalizeTitle(type)}</h2>
      <button type="button">+</button>
    </div>
  );
};
