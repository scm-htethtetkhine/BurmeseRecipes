import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailRecipeComponent } from './components/detail-recipe/detail-recipe.component';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';

export const routes: Routes = [
  { path: '', component: DisplayRecipeComponent},
  {
    path: 'detailrecipe/:id',
    // loadComponent: () => import('../components/detail-recipe/detail-recipe.component').then(mod => mod.DetailRecipeComponent),
    component: DetailRecipeComponent
  },
 
];
