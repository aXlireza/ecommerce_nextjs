export interface NavSource {
  date: string,
  title: string,
}
export interface Nav extends NavSource {
	rateActive: boolean,
  rateFunc: () => void
}