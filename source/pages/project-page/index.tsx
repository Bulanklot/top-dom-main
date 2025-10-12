import { FC } from "react";
import styles from "./styles/styles.module.scss";
import ProjectSlider from "./project-slider";

const IMAGES = ["/project/slider/project-slide-1.jpg", "/project/slider/project-slide-1.jpg", "/project/slider/project-slide-1.jpg"]

export const ProjectPage: FC = () => {
    return (
        <>
            <ProjectSlider images={IMAGES} />

            <div className={styles.container}>
            </div>

        </>
    )
}