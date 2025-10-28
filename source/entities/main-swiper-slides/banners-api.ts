import data from './data.json'

export interface Banner {
  title: string
  buttonText: string
  description?: string
  imageSrc?: string
  buttonGradient?: string,
  titleColor?: string,
}
export async function getAllBanners(): Promise<Banner[]> {
  const banners = await data.banners;
  return banners;
}
