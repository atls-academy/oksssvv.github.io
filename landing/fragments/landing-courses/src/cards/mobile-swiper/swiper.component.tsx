import React           from 'react'

import { Card }        from '@ui/card'
import { Box }         from '@ui/layout'
import { Swiper }      from '@ui/swiper'
import { SwiperSlide } from '@ui/swiper'

import { useCourses }  from '../../data'

export const MobileSwiper = () => {
  const courses = useCourses()

  const getIdCourses = (id) => courses?.data?.courses.nodes.find((obj) => obj.id === id)?.course

  const library = getIdCourses('cG9zdDoyMzk=')
  const materials = getIdCourses('cG9zdDoyNDY=')

  return (
    <Box width={354}>
      <Swiper spaceBetween={20} slidesPerView={1.35} slidesOffsetAfter={24} className='CardSlider'>
        <SwiperSlide>
          <Card
            widthCategory={135}
            сategory={library?.label[0].title}
            gap={62}
            widthContent={220}
            title={library?.title}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            widthCategory={135}
            сategory={materials?.label[0].title}
            gap={62}
            widthContent={220}
            title={materials?.title}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
