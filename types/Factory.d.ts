export interface Factory {
  info: FactoryInfo,
  products: Product[]
}

export interface FactoryInfo {
  title: string,
  date: string,
}
export interface Product {
  title: string,
  factoryName: string,
  size: string,
  standard: string,
  price: string,
}