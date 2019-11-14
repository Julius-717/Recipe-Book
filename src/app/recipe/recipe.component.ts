import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe("Test Recipe","This is just a test description", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmChnck-LcjqL6Q1Eld6-JefHdN0rcLK3Sh1cdbWzxBv0z6Poqdg&s")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
