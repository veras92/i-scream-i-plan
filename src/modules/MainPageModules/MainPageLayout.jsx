import { MainPageHeader } from './components/MainPageHeader/MainPageHeader';
import { HomepageContainer } from './MainPageLayout.styled';
import { MainPageList } from './components/MainPageList/MainPageList';
import { MainPageRaiting } from './components/MainPageRaiting/MainPageRaiting';

export const MainPageLayOut = () => {
  return (
    <>
      <MainPageHeader />
      <main>
        <HomepageContainer>
          <MainPageList />
          <MainPageRaiting />
        </HomepageContainer>
      </main>
    </>
  );
};
