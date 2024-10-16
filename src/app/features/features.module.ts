import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBrandComponent } from './pages/add-brand/add-brand.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ListBrandsComponent } from './pages/list-brands/list-brands.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { LayoutComponent } from './templates/layout/layout.component';



@NgModule({
  declarations: [
    AddBrandComponent,
    AddCategoryComponent,
    ListBrandsComponent,
    ListCategoriesComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
