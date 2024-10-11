import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={` flex p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className=" font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="text-dimWhite mt-2 ">{content}</p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Your Dream Home, <br className="sm:block hidden" />
          Our Financing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With NextGen Lending, you can simplify your path to
        homeownership. Our tailored private loans empower you to 
        buy your ideal property while we provide fast, flexible
        financing solutions designed to meet your needs.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
