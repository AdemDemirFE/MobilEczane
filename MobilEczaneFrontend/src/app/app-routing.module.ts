import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'select-lang',
    loadChildren: () => import('./pages/select-lang/select-lang.module').then( m => m.SelectLangPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },

  {
    path: 'menu-page',
    loadChildren: () => import('./pages/menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'my-medicines',
    loadChildren: () => import('./pages/my-medicines/my-medicines.module').then( m => m.MyMedicinesPageModule)
  },
  {
    path: 'contac',
    loadChildren: () => import('./pages/contac/contac.module').then( m => m.ContacPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'dress',
    loadChildren: () => import('./pages/dress/dress.module').then( m => m.DressPageModule)
  },
  {
    path: 'shelter',
    loadChildren: () => import('./pages/shelter/shelter.module').then( m => m.ShelterPageModule)
  },
  {
    path: 'water-balance',
    loadChildren: () => import('./pages/water-balance/water-balance.module').then(m => m.WaterBalancePageModule)
  },
  {
    path: 'water-modal',
    loadChildren: () => import('./pages/water-modal/water-modal.module').then(m => m.WaterModalPageModule)
  },
  {
    path: 'water-balance-history',
    loadChildren: () => import('./pages/water-balance-history/water-balance-history.module').then(m => m.WaterBalanceHistoryPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
