import {User} from './user';

export class Project{
  owner:User;
  title:string;
  description:string;
  logo:string;
  step:Step;
  category:Category;
  capital:string;
}

export class Category{
  name:string
}

export class Step{
  name:string;
  description:string;
}
