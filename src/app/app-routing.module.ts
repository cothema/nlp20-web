import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./pages/links/links.module').then(m => m.LinksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then(m => m.PricingModule),
  },
  {
    path: 'dictionary',
    loadChildren: () =>
      import('./pages/dictionary/dictionary.module').then(m => m.DictionaryModule),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./pages/learn/learn.module').then(m => m.LearnModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
  },
  {
    path: 'datasets',
    loadChildren: () =>
      import('./pages/datasets/datasets.module').then(m => m.DatasetsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}