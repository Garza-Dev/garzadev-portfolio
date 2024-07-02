'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface LogoSliderProps {
    images: string[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ images }) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        vertical: true,
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} width={105} height={105} alt={`${index}-logo`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LogoSlider;