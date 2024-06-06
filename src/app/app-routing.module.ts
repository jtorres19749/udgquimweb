import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './shared'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    //redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'student/:id',
    loadChildren: () => import('./studentitem/studentitem.module').then( m => m.StudentItemPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'importsiauu',
    loadChildren: () => import('./importsiauu/importsiauu.module').then( m => m.ImportsiauuPageModule)
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
