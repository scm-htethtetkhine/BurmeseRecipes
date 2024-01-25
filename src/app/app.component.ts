import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';
import { DetailRecipeComponent } from './components/detail-recipe/detail-recipe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DisplayRecipeComponent,DetailRecipeComponent, HttpClientModule ,RouterModule]
})
export class AppComponent {
  title = 'demo-angular-standalone-components';
}
