"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  medias: SocialMedia[]
}

interface SocialMedia {
  name: string,
  alt: string,
  link: string
}

const SocketBar: React.FC<Props> = ({ medias }) => {
  return (
    <section className="bg-white px-10 md:px-24">
      <hr className='shadow-samen' />
      <div className='flex flex-row py-5 gap-4' dir='ltr'>
        {medias.map((media, key) => (
          <Link key={key} href={media.link}>
            <Image
              src={`/icons/${media.name}.svg`}
              alt={media.alt}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SocketBar;