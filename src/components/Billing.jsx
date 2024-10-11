import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        className="w-[100%] h-[100%] relative z-[5]"
        src={bill}
        alt="billing"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Effortlessly Manage <br className="sm:block hidden" /> Home Financing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      NextGen Lending simplifies your journey to homeownership
      with advanced technology, ensuring a smooth and secure
      lending experience every step of the way.
      </p>
      <div className="flex flex-wrap sm:mt-10 mt-6">
        <img
          src={google}
          alt="google play store"
          className="w-[128px] mr-5 cursor-pointer"
        />
        <img
          src={apple}
          alt="apple app store"
          className="w-[128px] cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
