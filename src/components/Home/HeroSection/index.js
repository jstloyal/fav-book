import { FaPlayCircle, FaChevronDown } from 'react-icons/fa';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Button,
  VideoLink,
  DownArrow,
} from './HeroSection.styled';
import video from '../../../assets/video1.mp4';

const HeroSection = () => (
  <HeroContainer>
    <HeroBg>
      <VideoBg autoPlay loop muted src={video} type="video/mp4" />
    </HeroBg>
    <HeroContent>
      <div className="hero-header">
        <h1>Make your free time count</h1>
        <p>
          You can add your favorite book list and view others favorite book lists
        </p>
      </div>
      <div className="actions">
        <Button to="./sign_up">JOIN US</Button>
        <VideoLink
          href="https://www.youtube.com/watch?v=W2ym7kCo8og"
          target="_blank"
          rel="noreferrer"
        >
          <FaPlayCircle />
          {' '}
          Step by step guide
        </VideoLink>
      </div>
    </HeroContent>
    <DownArrow to="dashboard">
      <FaChevronDown />
    </DownArrow>
  </HeroContainer>
);

export default HeroSection;
