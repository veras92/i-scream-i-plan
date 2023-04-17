// "1. Сторінка повинна відображатись відповідно до макету на 3х розширеннях (375, 768, 1440), на ширині екрану до 375 блоки розмітки повинні тягнутись
// 2. Компонент здійснює запит по данні користувача(email, name, id та т.і.), якщо під час рендеру компоненту ці данні відсутні в глобальному стейті
// 3. Комопонент рендерить:
//  - Header - модуль що відображається на всіх сторінках авторизованого юзера. Показує загальну інформацію та допоміжний інтерфейс роботи з обліковим записом.
//  - SideBar - модуль що відображається на всіх сторінках авторизованого юзера, на планшеті та мобілці знаходиться в бургер-меню. Показує навігацію між сторінками та кнопку виходу з облікового запису. "
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Header } from 'modules/Header/Header';
import { SideBar } from 'modules/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from 'shared/styles/components';
import { Wrapper } from './MainLayout.styled';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function MainLayout() {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  const size = useWindowSize();
  console.log(size.width);

  useEffect(() => {
    setVisible(size.width > 1440 && true);
  }, [size.width]);

  // size.width > 1440 ? setVisible(true) : setVisible(false);
  return (
    <>
      <Wrapper>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SideBar onToggle={toggleSidebar} />
            </motion.div>
          )}
        </AnimatePresence>
        <MainWrapper>
          <Header onToggle={toggleSidebar} />
          <Outlet />
        </MainWrapper>
      </Wrapper>
    </>
  );
}
