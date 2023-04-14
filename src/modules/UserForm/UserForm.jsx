// "1. Компонент сторінки підписанй на глобальний стейт state.auth.user.
// 2. Компонент рендерить форму з полями заповненми даними про юзера та має локальний стейт для цих данних.
// 3. За відсутності данних, в полях форми показуються плейсхолдери, а в полі з датою показується поточна дата.
// 4. При додаванні картинки в поле для вибору аватара, вона з'являється на місці плейсхолдера.
// 5. Кнопка сабміту не активна, поки в полях не зміняться значення.
// 6. Після зміни будь-якого значення кнопка стає активною.
// 7. Додати валідацію на поля форми.
// 8. По сабміту дані відправляються на бек і кнопка сабміту стає знову неактивною.
// 9. При успішній відповіді данні пишуться в глобальний стейт.
// 10. При помилці юзеру виводиться відповідне пушповідомлення."

export const UserForm = () => {
  return <div>UserForm</div>;
};

// "валідація форми:

// аватар: тип файл
// юзерНейм: макс. 16символів | обов'язково
// емейл: емейл | обов'язково
// день народження: дата - YYYY-MM-DD
// телефон: +380971234567
// скайп: макс. 16 символів"