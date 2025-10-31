import {getAllProjects} from "@/source/shared/api/fake-projects/fake-api";
import {GalleryUI} from "@/source/pages/main-page/ui/gallery";

export const ProjectsGalleryFeature = async ()=> {
   const projects = await getAllProjects();
   return(
           <GalleryUI projects={projects}/>
       )


}