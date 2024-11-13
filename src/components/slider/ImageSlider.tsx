import { useState } from 'react';
import styles from '@/src/styles/slider.module.scss';

const ImageSlider = ({ images }: {images: string[]}) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className={styles.slider}>
      <button className={styles.leftArrow} onClick={prevSlide}>‹</button>
      <button className={styles.rightArrow} onClick={nextSlide}>›</button>
      {images.map((image, index) => (
        <div className={index === current ? styles.activeSlide : styles.slide} key={index}>
          {index === current && (<img src={image} alt={`Product Image ${index + 1}`} />)}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
