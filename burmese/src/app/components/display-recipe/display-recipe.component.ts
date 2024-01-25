import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router, RouterModule } from '@angular/router';
import { DetailRecipeComponent } from '../detail-recipe/detail-recipe.component';

@Component({
  selector: 'app-display-recipe',
  standalone: true,
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
  imports: [MatGridListModule , DetailRecipeComponent ,RouterModule],
})
export class DisplayRecipeComponent {
  url: string = '/assets/jsonfile/BurmeseRecipes.json';
  recipesData: any;
  defaultImage: string = '../../../assets/images/default.png'
  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.recipesData = res
    });
  }

  route(recipeID: string){
    this.router.navigate(['detailrecipe'], {queryParams: {id: recipeID}});
  }
  
}
