import { getAllBanners } from '@/source/entities/main-swiper-slides/banners-api'
import { SwiperUI } from '@/source/pages/main-page/ui/title-swiper'


export const TitleSwiper = async () => {
 const banners = await getAllBanners();
 return(
   <SwiperUI banners={banners}/>
)
}