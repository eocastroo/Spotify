import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/page/homepage/homepage.component';

const routes: Routes = [ // TODO  router-outlet (padre)
    {
        path: '', // todo privado 
        component:HomepageComponent,
        loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export {routes};