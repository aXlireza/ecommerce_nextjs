export interface Item {
  head: Head,
  body: Box[],
}

export interface Head {
	title: string,
	imgUrl: string,
	alt: string,
}

export interface Box {
  title: string,
  imgUrl: string,
  alt: string,
  date: string,
  link: string
}