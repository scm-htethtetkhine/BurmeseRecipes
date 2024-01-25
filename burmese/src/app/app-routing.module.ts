import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailRecipeComponent } from './components/detail-recipe/detail-recipe.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'detailrecipe', component: DetailRecipeComponent},
  
  // { path: 'detailcard/:id', component: DetailCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
