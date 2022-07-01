import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video1.mp4'
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>For Care Homes and Care Givers</HeroH1>
            <HeroP>
            Join a network of the world's best care givers &amp; get full-time, long-term care giving jobs with better compensation and career growth.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Apply for jobs {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection