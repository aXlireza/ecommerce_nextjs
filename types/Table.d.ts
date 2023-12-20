export interface Nav extends FactoryInfo {
	rateActive: boolean,
  rateFunc: () => void
}

export interface Factory {
  info: FactoryInfo,
  products: Product[]
}

export interface FactoryInfo {
  title: string,
  date: string,
  upToDate: boolean
}
export interface Product {
  title: string,
  factoryName: string,
  size: string,
  standard: string,
  price: string,
}