import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, NgForOf],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test name',
      'This is a test desc',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/440px-Recipe_logo.jpeg'
    ),
    new Recipe(
      'Vodka Sauce Pasta',
      'Just some pasta with orange sauce',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/440px-Recipe_logo.jpeg'
    ),
  ];
}
