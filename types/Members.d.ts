export interface Team {
  title: string,
  members: Member[]
}

export interface Member {
  imgUrl: string,
  alt: string,
  name: string,
  role: string,
  tel: string,
}