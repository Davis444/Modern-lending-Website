import styles from "../styles";
import { arrowUp } from "../assets";
function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[25px] mr-2">
            <span className="text-gradient flex">
              Get
              <span>
                <img
                  src={arrowUp}
                  className="w-[23px] h-[23px] ml-[5px] object-contain"
                  alt=""
                />
              </span>
            </span>
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[25px]">
          <span className="text-gradient flex">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
