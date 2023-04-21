import { MainPageLayOut } from 'modules/MainPageModules/MainPageLayout';
import { Helmet } from 'react-helmet-async';

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Goose Track</title>
      </Helmet>
      <MainPageLayOut />
    </>
  );
}
