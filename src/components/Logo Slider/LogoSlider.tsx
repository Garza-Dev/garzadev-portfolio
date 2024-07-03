'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface LogoSliderProps {
    images: string[];
    side: string;
}

const LogoSlider: React.FC<LogoSliderProps> = ({ images, side }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1200,
        vertical: true,
        nextArrow: <></>,
        prevArrow: <></>
    };

    return (
        <div className='slider-container' style={{width: '105px', display: 'block'}}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`${index}-logo`} width='auto' height={115}
                            style={side == 'right' ? { maxHeight: '5.5rem', margin: '0 auto', display: 'block' } : { maxHeight: '5rem', margin: '0 auto', display: 'block' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LogoSlider;