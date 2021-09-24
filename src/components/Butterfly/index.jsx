
import { 
  scene,
  butterfly,
  body,
  posAbs,
  leftWing,
  leftWingTop,
  leftWingTopOuter,
  leftWingTopInner,
  leftWingBottom,
  leftWingBottomOuter,
  leftWingBottomInner,
  rightWing,
  rightWingTop,
  rightWingTopOuter,
  rightWingTopInner,
  rightWingBottom,
  rightWingBottomOuter,
  rightWingBottomInner,
} from './style.module.css';

const Butterfly = () => {

  return (
    <>
      <div className={scene} tabIndex="-1">
        <div className={butterfly}>
          <div className={`${body} ${posAbs}`}></div>
          <div className={`${leftWing} ${posAbs}`}>
            <div className={leftWingTop}>
              <div className={leftWingTopInner}></div>
              <div className={leftWingTopOuter}></div>
            </div>
            <div className={leftWingBottom}>
              <div className={leftWingBottomInner}></div>
              <div className={leftWingBottomOuter}></div>
            </div>
          </div>
          <div className={`${rightWing} ${posAbs}`}>
            <div className={rightWingTop}>
              <div className={rightWingTopInner}></div>
              <div className={rightWingTopOuter}></div>
            </div>
            <div className={rightWingBottom}>
              <div className={rightWingBottomInner}></div>
              <div className={rightWingBottomOuter}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )};

export default Butterfly;
