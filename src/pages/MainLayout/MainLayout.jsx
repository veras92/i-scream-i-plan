
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Header } from 'modules/Header/Header';
import { SideBar } from 'modules/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from 'shared/styles/components';
import { Wrapper } from './MainLayout.styled';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default function MainLayout() {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  const size = useWindowSize();

  useEffect(() => {
    setVisible(size.width > 1439 && true);
  }, [size.width]);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

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
