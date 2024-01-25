import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DetailRecipeComponent } from '../detail-recipe/detail-recipe.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-display-recipe',
  standalone: true,
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
  imports: [
    DetailRecipeComponent,
    RouterLink,
    NgxPaginationModule],
})
export class DisplayRecipeComponent {
  url: string = '/assets/jsonfile/BurmeseRecipes.json';
  recipesData: any;
  currentPageNumber: number = 1;
  pageSize = 6;
 
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
