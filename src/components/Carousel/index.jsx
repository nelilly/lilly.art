import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { keyChange } from 'src/shared/functions/keyChange';
import Card from 'src/components/Card';
import {
  scene,
  carousel,
  slide,
  buttonGroup,
  prevRow,
  nextRow,
  prevItem,
  nextItem,
  activeSlide,
  slideTitle,
  slideImage,
} from './style.module.css';

const Carousel = ({slides}) => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselRotation, setCarouselRotation] = useState('translateZ(-14.5rem) rotateY(10deg)`');

// var carousel = document.querySelector('.carousel');
// var cells = carousel.querySelectorAll('.carousel__cell');
// var cellCount; // cellCount set from cells-range input value
// var selectedIndex = 0;
// var cellWidth = carousel.offsetWidth;
// var cellHeight = carousel.offsetHeight;
// var isHorizontal = true;
// var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
// var radius, theta;
// // console.log( cellWidth, cellHeight );

// function rotateCarousel() {
//   var angle = theta * selectedIndex * -1;
//   carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
//     rotateFn + '(' + angle + 'deg)';
// }

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener( 'click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener( 'click', function() {
//   selectedIndex++;
//   rotateCarousel();
// });

// var cellsRange = document.querySelector('.cells-range');
// cellsRange.addEventListener( 'change', changeCarousel );
// cellsRange.addEventListener( 'input', changeCarousel );



// function changeCarousel() {
//   cellCount = cellsRange.value;
//   theta = 360 / cellCount;
//   var cellSize = isHorizontal ? cellWidth : cellHeight;
//   radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
//   for ( var i=0; i < cells.length; i++ ) {
//     var cell = cells[i];
//     if ( i < cellCount ) {
//       // visible cell
//       cell.style.opacity = 1;
//       var cellAngle = theta * i;
//       cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
//     } else {
//       // hidden cell
//       cell.style.opacity = 0;
//       cell.style.transform = 'none';
//     }
//   }

//   rotateCarousel();
// }

// var orientationRadios = document.querySelectorAll('input[name="orientation"]');
// ( function() {
//   for ( var i=0; i < orientationRadios.length; i++ ) {
//     var radio = orientationRadios[i];
//     radio.addEventListener( 'change', onOrientationChange );
//   }
// })();

// function onOrientationChange() {
//   var checkedRadio = document.querySelector('input[name="orientation"]:checked');
//   isHorizontal = checkedRadio.value == 'horizontal';
//   rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
//   changeCarousel();
// }

// // set initials
// onOrientationChange();
  const isHorizontal = true;
  const rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  const cellCount = slides.length;
  const cellWidth = 190;
  const cellHeight = 120;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  let radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) ); 
  let theta = 360 / cellCount;

  useEffect(() => {
    let angle = theta * currentRotation * -1;
    setCarouselRotation(`translateZ(${-radius}px) ${rotateFn}(${angle}deg)`);
  }, [currentSlide, radius, rotateFn, theta]);


  const advanceCarousel = (number) => {
    setCurrentRotation(currentRotation + number);
    if (number < 0 && currentSlide === 0) {
      return setCurrentSlide(slides.length - 1);
    }
    if (number > 0 && currentSlide === slides.length - 1) {
      return setCurrentSlide(0);
    }
    setCurrentSlide(currentSlide + number);
  };

  return (
    <>
      <div className={buttonGroup}>
        <button className={prevRow}>&uarr;</button>
        <button className={prevItem} onClick={() => advanceCarousel(-1)} >&larr;</button>
        <button className={nextItem} onClick={() => advanceCarousel(1)} >&rarr;</button>
        <button className={nextRow}>&darr;</button>
      </div>
      <div className={scene}>
        <article className={carousel} style={{transform: carouselRotation}}>
          {slides.map((item, index) =>
            <section key={`slide_${keyChange(item.title)}`} className={`${slide} ${index === currentSlide ? activeSlide : ''}`}>
              <div className={slideImage} style={{backgroundImage: 'url(' + item.image + ')'}}></div>
              <p className={slideTitle}>{item.title}</p>
            </section>)
          }
        </article>
      </div>
      <div>
        {slides.map((work, index) => <Card key={`dev_${keyChange(work.title)}`} currentSlide={currentSlide} index={index} {...work} />)}
      </div>
    </>
  )};

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
};
