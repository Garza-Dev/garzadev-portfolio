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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        vertical: true,
        adaptiveHeight: true,
        nextArrow: <></>,
        prevArrow: <></>
    };

    return (
        <div className='slider-container' style={{width: '105px', display: 'block'}}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`${index}-logo`} //Fix this!!! height has to match the icon height
                            // style={side == 'right' ? { maxHeight: '5.5rem', margin: '0 auto', display: 'block' } : { maxHeight: '4.81rem', margin: '0 auto', display: 'block' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LogoSlider;