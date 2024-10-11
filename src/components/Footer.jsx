import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../styles";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A Faster, Easier Way to Secure Your Home Financing!
          </p>
        </div>
        <div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((fl) => (
            <div
              key={fl.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-medium text-[18px] leading-[27px] text-white">
                {fl.title}
              </h4>
              <ul className="list-none mt-4">
                {fl.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center md:flex-row pt-6 border-t-[WHITE]">
        <div className="flex md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] cursor-pointer m-3`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
