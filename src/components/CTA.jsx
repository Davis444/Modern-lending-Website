import styles from "../styles";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Start using our services now!!</h2>
        <p className={`{styles.paragraph} max-w-[470px] mt-3 text-dimWhite`}>
          Everything you find in this digital world is all you can use our
          services with
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
