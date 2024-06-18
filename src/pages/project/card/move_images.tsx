import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import styles from "./move_images.module.css";

export interface MoveImagesProps {
  pictures: { image: string; name: string }[];
  count: number;
}

function MoveImages({ pictures }: MoveImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgHover, setImgHover] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!imgHover) {
        setCurrentIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imgHover, pictures.length]);

  return (
    <div>
      <div
        className={styles.carouselBox}
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <div
          className={`${styles.imageCarousel} ${
            imgHover ? styles.showButtons : ""
          }`}
        >
          {Array.isArray(pictures) &&
            pictures
              .slice(currentIndex, currentIndex + 1) // Show only one picture at a time
              .map((picture, index) => (
                <div className={styles.imageBox} key={index}>
                  <img src={picture.image} alt="carousel" />
                  <div className={styles.reviewTitle}>{picture.name}</div>
                </div>
              ))}
          <GrPrevious
            style={{ width: "20px", height: "60px" }}
            className={styles.prevButton}
            onClick={prevSlide}
          />
          <GrNext
            style={{ width: "20px", height: "60px" }}
            className={styles.nextButton}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default MoveImages;
