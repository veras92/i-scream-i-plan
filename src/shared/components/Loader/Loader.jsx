import { ThreeCircles } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <ThreeCircles
        height="100"
        width="100"
        color="#3e85f3"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#72c2f8"
        innerCircleColor="#f3b249"
        middleCircleColor="#ea3d65"
      />
    </Overlay>
  );
};
