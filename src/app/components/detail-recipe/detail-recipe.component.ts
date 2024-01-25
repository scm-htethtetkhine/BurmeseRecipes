import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent {
  url: string = '/assets/jsonfile/BurmeseRecipes.json';
  typeurl: string = '/assets/jsonfile/Usertype.json';
  recipesData: any;
  recipe: number;
  typeData: any;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute,) {
    this.recipe = this.actRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.recipesData = res
    });

    this.http.get(this.typeurl).subscribe(res => {
      this.typeData = res
    });
  }

}
