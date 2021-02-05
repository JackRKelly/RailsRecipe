export interface IRecipe {
  id: number;
  name: string;
  ingredients: Array<string>;
  instructions: Array<string>;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface IRouteParameter {
  id: string;
}
