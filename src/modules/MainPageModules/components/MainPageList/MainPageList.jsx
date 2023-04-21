import m1 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-view/goose-view-mob.png';
import m1Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-view/goose-view-mob@2x.png';
import m2 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-sidebar/goose-sidebar-mob.png';
import m2Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-sidebar/goose-sidebar-mob@2x.png';
import m3 from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-one/goose-one-mob.png';
import m3Retina from 'shared/images/GooseTrackBodyImg/Mobile/GooseTrackBodyMob-one/goose-one-mob@2x.png';

import t1 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-view/image.png';
import t1Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-view/image@2x.png';
import t2 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-sidebar/image.png';
import t2Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-sidebar/image@2x.png';
import t3 from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-one/image.png';
import t3Retina from 'shared/images/GooseTrackBodyImg/Tablet/GooseTrackBodyTab-one/image@2x.png';

import d1 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-view/goose-view-desk.png';
import d1Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-view/goose-view-desk@2x.png';
import d2 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-sidebar/goose-sidebar-desk.png';
import d2Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-sidebar/goose-sidebar-desk@2x.png';
import d3 from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-one/goose-one-desk.png';
import d3Retina from 'shared/images/GooseTrackBodyImg/Desktop/GooseTrackBodyDesk-one/goose-one-desk@2x.png';

import {
  InfoWrapper,
  StyledBlock,
  StyledImg,
  StyledLabel,
  StyledNumber,
  StyledText,
  StyledTitleText,
  TitleWrapper,
} from './MainPageList.styled';

export const MainPageList = () => {
  return (
    <section>
      <ul>
        <StyledBlock>
          <InfoWrapper>
            <TitleWrapper>
              <StyledNumber>1.</StyledNumber>
              <StyledLabel>Calendar</StyledLabel>
              <StyledTitleText>View</StyledTitleText>
            </TitleWrapper>
            <StyledText>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </StyledText>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m1} 1x, ${m1Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t1} 1x, ${t1Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d1} 1x, ${d1Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <StyledImg src={d1} alt="schedule"></StyledImg>
            </picture>
          </div>
        </StyledBlock>
        <StyledBlock>
          <InfoWrapper>
            <TitleWrapper>
              <StyledNumber>2.</StyledNumber>
              <StyledTitleText>Sidebar</StyledTitleText>
            </TitleWrapper>
            <StyledText>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </StyledText>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m2} 1x, ${m2Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t2} 1x, ${t2Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d2} 1x, ${d2Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <StyledImg src={d2} alt="sidebar"></StyledImg>
            </picture>
          </div>
        </StyledBlock>
        <StyledBlock>
          <InfoWrapper>
            <TitleWrapper>
              <StyledNumber>3.</StyledNumber>
              <StyledLabel>All in</StyledLabel>
              <StyledTitleText>One</StyledTitleText>
            </TitleWrapper>
            <StyledText>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </StyledText>
          </InfoWrapper>
          <div>
            <picture>
              <source
                srcSet={`${m3} 1x, ${m3Retina} 2x`}
                media="(max-width: 764px)"
              ></source>
              <source
                srcSet={`${t3} 1x, ${t3Retina} 2x`}
                media="(max-width: 1439px)"
              ></source>
              <source
                srcSet={`${d3} 1x, ${d3Retina} 2x`}
                media="(min-width: 1440px)"
              ></source>
              <StyledImg src={d3} alt="Calendar"></StyledImg>
            </picture>
          </div>
        </StyledBlock>
      </ul>
    </section>
  );
};
