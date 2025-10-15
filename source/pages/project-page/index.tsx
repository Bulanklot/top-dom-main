import { FC } from "react";
import styles from "./styles/styles.module.scss";
import ProjectSlider from "./project-slider";
import ProjectPrice from "./project-price";
import projectSlide1 from "@/public/project/slider/project-slide-1.jpg";

const IMAGES = [projectSlide1.src, projectSlide1.src, projectSlide1.src]

export const ProjectPage: FC = () => {
    return (
        <>
            <ProjectSlider images={IMAGES} />
            <ProjectPrice startPrice={19500000} oldPrice={20500000} discountPrice={500000} />

            <div className={styles.container}>
            </div>

        </>
    )
}