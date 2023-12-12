import { LocaleParams } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import { anton } from '@/lib/fonts'
import { getDictionary } from '@/lib/dictionary'
import ImageSlider, { ImageSlide } from '@/components/ui/image-slider'
import ProjectCard from '@/components/projects/ProjectCard'

import feelFreeImage from '@/components/projects/screenshots/feelfree.png'
import rvwImage from '@/components/projects/screenshots/rvw.png'
import txogitxuImage from '@/components/projects/screenshots/txogitxu.png'

export default async function Projects({ params }: LocaleParams) {
  const t = await getDictionary(params.lang)
  const sliderItems: ImageSlide[] = [
    {
      id: 'feelfree',
      content: <ProjectCard title="Feel Free Rentals" imageSrc={feelFreeImage} url="https://feelfreerentals.com/es/" />,
    },
    {
      id: 'txogitxu',
      content: <ProjectCard title="Txogitxu" imageSrc={txogitxuImage} url="https://www.txogitxu.com/" />,
    },
    {
      id: 'rvw',
      content: <ProjectCard title="Recambios vía web" imageSrc={rvwImage} url="https://www.recambiosviaweb.com/" />,
    },
  ]

  return (
    <section id="projects" className="py-0 2xl:py-6 2xl:border-y border-green-800/60 dark:border-neutral-600">
      <div className="flex flex-col py-14 2xl:flex-row-reverse items-center bg-info px-2 md:px-8">
        <h2 className={`${anton.className} text-6xl md:text-7xl 2xl:text-8xl md:px-16 text-white text-center`}>
          {t.projects.title}
        </h2>
        <Separator className="my-12 2xl:hidden bg-white/60" />
        <div className="flex flex-1 justify-center 2xl:px-16 2xl:border-r border-white/60">
          <ImageSlider items={sliderItems} className="max-w-[100vw] w-[80%] 2xl:w-[100%]" />
        </div>
      </div>
    </section>
  )
}