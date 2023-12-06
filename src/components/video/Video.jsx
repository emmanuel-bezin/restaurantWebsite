import { useRef, useState } from "react";
import styled from "styled-components";
import { GoPlay } from "react-icons/go";
import { FaRegCirclePause } from "react-icons/fa6";

const Pause = styled(FaRegCirclePause)`
  position: absolute;
  opacity: 0.5;
`;

const Play = styled(GoPlay)`
  position: absolute;
  opacity: 0.5;
`;

const MealVideo = styled.video`
  max-width: 90%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  background-color: #0a0a0a;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    border-bottom: 1px solid #3d3d3d;
    padding: 20px 0px;
  }
`;

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <Container onClick={() => handleVideo()}>
      <MealVideo
        src="./video.mp4"
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {playVideo ? <Pause size={80} /> : <Play size={80} />}
    </Container>
  );
};

export default Video;
