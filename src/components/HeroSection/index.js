import { FaPlayCircle } from 'react-icons/fa';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Button,
  VideoLink,
  DownArrow,
} from './HeroSection.styled';
import video from '../../assets/video1.mp4';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <div className="hero-header">
          <h1>Make your family time count</h1>
          <p>
            You can generate income from your hobbies and we will show you how
          </p>
        </div>
        <div className="actions">
          <Button to="./sign_up">JOIN US</Button>
          <VideoLink
            href="https://www.youtube.com/watch?v=W2ym7kCo8og"
            target="_blank"
            rel="noreferrer"
          >
            <FaPlayCircle /> Step by step guide
          </VideoLink>
        </div>
      </HeroContent>
      <DownArrow />
    </HeroContainer>
  );
};

export default HeroSection;
