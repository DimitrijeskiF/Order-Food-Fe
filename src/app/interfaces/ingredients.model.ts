export interface Item {
  _id: string,
  name: string,
  imgLink:string,
  ingredients: Ingredient[]
}

export interface Ingredient {
  name: string,
  type: string
}
