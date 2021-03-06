import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("oneRecipe") recipe: Recipe;
  @Output() clickedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected() {
    this.clickedRecipe.emit();
  }

}
