export interface IRecipe {
  id: number;
  name: string;
  ingredients: Array<string>;
  instruction: Array<string>;
  image: string;
  created_at: string;
  updated_at: string;
}
