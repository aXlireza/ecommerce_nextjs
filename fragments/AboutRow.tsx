import Heading from '@/components/Heading'
import React, { useState } from 'react'

interface Props {
  description: string,
  videoUrl: string,
  poster: string
}

const AboutRow: React.FC<Props> = ({ description, videoUrl, poster }) => {

  const [showControls, setShowControls] = useState(false);

	return (
    <section className='flex bg-samen-orange px-10 lg:px-24 py-5'>
      <section className='flex flex-row flex-wrap py-8 gap-6 overflow-x-hidden w-fit'>
        <Heading color='border-white' text='درباره ثامن تجارت' underline='partial' textClasses={'text-xl'} />
        <div className='flex flex-col-reverse md:flex-row md:items-start items-center gap-5' dir='ltr'>
          <p className='samen-text' dir='rtl'>{description}</p>
          <video poster={poster} width="500" controls={showControls} onClick={() => setShowControls(true)}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </section>
    </section>
	)
}

export default AboutRow