export interface MegamenuItem {
	icon: string,
	text: string,
	link: string,
	subcategories: MegamenuSubItem[],
}

interface MegamenuSubItem {
  text: string,
  link: string,
  arrow: boolean,
  subitems: MegamenuSubItem[]
}