
import {
  scene,
  cube,
  // showFront,
  // showRight,
  // showLeft,
  // showBack,
  // showTop,
  // showBottom,
  cubeFace,
  cube_bottom,
  cube_left,
  cube_back,
  // cta,
  // featuredImage,
} from './style.module.css';

const Cube = () => {

  return (
    <>
      <article className={scene}>
        <div className={`${cube}`}>
          <svg className={`${cubeFace} ${cube_bottom}`} xmlns="http://www.w3.org/2000/svg" height="400" width="400" viewBox="0,0 300,300">
            <defs>
              <pattern id="grid1" x="-1" y="-1" viewBox="0,0 10,10" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect x="-1" width="100%" height="100%" fill="#272829" stroke="#feea7f" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid1)"/>
          </svg>

          <svg className={`${cubeFace} ${cube_left}`} xmlns="http://www.w3.org/2000/svg" height="400" width="400" viewBox="0,0 300,300">
            <defs>
              <pattern id="grid2" x="-1" y="-1" viewBox="0,0 10,10" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect x="-1" width="100%" height="100%" fill="#272829" stroke="#7fbefe" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)"/>
          </svg>

          <svg className={`${cubeFace} ${cube_back}`} xmlns="http://www.w3.org/2000/svg" height="400" width="400" viewBox="0,0 300,300">
            <defs>
              <pattern id="grid3" x="-1" y="-1" viewBox="0,0 10,10" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect x="-1" width="100%" height="100%" fill="#272829" stroke="#fe957e" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)"/>
          </svg>
        </div>
      </article>
    </>
  )};

export default Cube;
