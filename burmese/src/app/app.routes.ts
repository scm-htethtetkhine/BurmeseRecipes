import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailRecipeComponent } from './components/detail-recipe/detail-recipe.component';


export const routes: Routes = [
  { path: '', component: AppComponent},
  {
    path: 'detailrecipe',
    // loadComponent: () => import('../components/detail-recipe/detail-recipe.component').then(mod => mod.DetailRecipeComponent),
    component: DetailRecipeComponent
  },
 
];
