import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[0px] rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Your feedback matters</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={styles.paragraph}>
            We give users needs our very first priority all the time, which
            keeps us in goodwill and always connected with our customers
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
