import React from "react";
import styles from "./Banner.module.css";
import { DiReact } from "react-icons/di";
import {
  SiExpo,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiStorybook,
  SiStyledcomponents,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiFramer,
  SiJest,
  SiCypress,
  SiWebpack,
  SiNpm,
  SiGit,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import useWindowSize from "@/hooks/useWindowSize";

const Banner: React.FC = () => {
  const { width } = useWindowSize();

  const RenderLogo: React.FC = () => {
    if (width && width <= 767) {
      return (
        <div className={styles.allContainer}>
          <div className={styles.container}>
            <div className={styles.icon} id={styles.react}>
              <DiReact size={65} color={"#60dafb"} />
            </div>
            <div className={styles.icon} id={styles.expo}>
              <SiExpo size={50} color={"white"} />
            </div>
            <div className={styles.icon} id={styles.redux}>
              <SiRedux size={50} color={"#9D6ECD"} />
            </div>
            <div className={styles.icon} id={styles.next}>
              <SiNextdotjs size={50} color={"#fff"} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.icon} id={styles.javascript}>
              <SiJavascript size={50} color={"#EFD81A"} />
            </div>
            <div className={styles.icon} id={styles.typescript}>
              <SiTypescript size={50} color={"#2F73BF"} />
            </div>
            <div className={styles.icon} id={styles.sass}>
              <FaSass size={65} color={"#C76394"} />
            </div>
            <div className={styles.icon} id={styles.storybook}>
              <SiStorybook size={50} color={"#FE4685"} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.icon} id={styles.styledComponents}>
              <SiStyledcomponents size={50} color={"#FC92DD"} />
            </div>
            <div className={styles.icon} id={styles.mui}>
              <SiMaterialui size={50} color={"#027FFE"} />
            </div>
            <div className={styles.icon} id={styles.tailwind}>
              <SiTailwindcss size={50} color={"#05B6D3"} />
            </div>
            <div className={styles.icon} id={styles.graphql}>
              <SiGraphql size={50} color={"#E535AB"} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.icon} id={styles.framer}>
              <SiFramer size={65} color={"#fff"} />
            </div>
            <div className={styles.icon} id={styles.jest}>
              <SiJest size={50} color={"#BE3C19"} />
            </div>
            <div className={styles.icon} id={styles.cypress}>
              <SiCypress size={50} color={"#22E99D"} />
            </div>
            <div className={styles.icon} id={styles.webpack}>
              <SiWebpack size={50} color={"#95d5fa"} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <div className={styles.icon} id={styles.react}>
            <DiReact size={65} color={"#60dafb"} />
          </div>
          <div className={styles.icon} id={styles.expo}>
            <SiExpo size={50} color={"white"} />
          </div>
          <div className={styles.icon} id={styles.redux}>
            <SiRedux size={50} color={"#9D6ECD"} />
          </div>
          <div className={styles.icon} id={styles.next}>
            <SiNextdotjs size={50} color={"#fff"} />
          </div>
          <div className={styles.icon} id={styles.javascript}>
            <SiJavascript size={50} color={"#EFD81A"} />
          </div>
          <div className={styles.icon} id={styles.typescript}>
            <SiTypescript size={50} color={"#2F73BF"} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.icon} id={styles.sass}>
            <FaSass size={65} color={"#C76394"} />
          </div>
          <div className={styles.icon} id={styles.storybook}>
            <SiStorybook size={50} color={"#FE4685"} />
          </div>
          <div className={styles.icon} id={styles.styledComponents}>
            <SiStyledcomponents size={50} color={"#FC92DD"} />
          </div>
          <div className={styles.icon} id={styles.mui}>
            <SiMaterialui size={50} color={"#027FFE"} />
          </div>
          <div className={styles.icon} id={styles.tailwind}>
            <SiTailwindcss size={50} color={"#05B6D3"} />
          </div>
          <div className={styles.icon} id={styles.graphql}>
            <SiGraphql size={50} color={"#E535AB"} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.icon} id={styles.framer}>
            <SiFramer size={65} color={"#fff"} />
          </div>
          <div className={styles.icon} id={styles.jest}>
            <SiJest size={50} color={"#BE3C19"} />
          </div>
          <div className={styles.icon} id={styles.cypress}>
            <SiCypress size={50} color={"#22E99D"} />
          </div>
          <div className={styles.icon} id={styles.webpack}>
            <SiWebpack size={50} color={"#95d5fa"} />
          </div>
          <div className={styles.icon} id={styles.npm}>
            <SiNpm size={50} color={"#bf3635"} />
          </div>
          <div className={styles.icon} id={styles.git}>
            <SiGit size={50} color={"#F0502F"} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.banner}>
      <div className={styles.mainTitle}>
        <div className={styles.title}>
          <h1 className={styles.aeonik1}>
            <span>T</span>
          </h1>
          <h1 className={styles.aeonik2}>
            <span>E</span>
          </h1>
          <h1 className={styles.aeonik3}>
            <span>C</span>
          </h1>
          <h1 className={styles.aeonik4}>
            <span>H</span>
          </h1>
        </div>
        <div className={styles.title}>
          <h1 className={styles.aeonik5}>
            <span>S</span>
          </h1>
          <h1 className={styles.aeonik6}>
            <span>T</span>
          </h1>
          <h1 className={styles.aeonik7}>
            <span>A</span>
          </h1>
          <h1 className={styles.aeonik8}>
            <span>C</span>
          </h1>
          <h1 className={styles.aeonik9}>
            <span>K</span>
          </h1>
          <h1 className={styles.aeonik9}>
            <span>.</span>
          </h1>
        </div>
      </div>
      {<RenderLogo />}
    </div>
  );
};

export default Banner;
