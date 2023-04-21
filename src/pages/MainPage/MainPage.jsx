import { MainPageLayOut } from 'modules/MainPageModules/MainPageLayout';
import { Helmet } from 'react-helmet';

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
