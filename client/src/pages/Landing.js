import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby marfa palo santo viral master cleanse DSA fashion axe
            beard, pour-over live-edge put a bird on it. Keffiyeh messenger bag
            intelligentsia, live-edge direct trade bitters gastropub kogi
            scenester hell of lumbersexual fit selfies raclette vice. Bespoke
            green juice adaptogen disrupt hexagon prism. Banh mi semiotics
            copper mug, hashtag aesthetic DIY PBR&B hot chicken. Quinoa umami
            subway tile kickstarter, banh mi heirloom snackwave taxidermy
            mixtape. Bushwick authentic raclette, mixtape mustache lomo four
            dollar toast yuccie.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        {/* image */}
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
