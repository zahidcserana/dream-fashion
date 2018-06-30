import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

// import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { CustomerAddComponent } from './component/customer-add/customer-add.component';
// import { CustomerListComponent } from './component/customer-list/customer-list.component';
// import { StockAddComponent } from './component/stock-add/stock-add.component';
// import { CarEntranceComponent } from './component/car-entrance/car-entrance.component';
// import { StockListComponent } from './component/stock-list/stock-list.component';
// import { CarListComponent } from './component/car-list/car-list.component';
// import { CarLeaveComponent } from './component/car-leave/car-leave.component';
// import { GarageEmployeeListComponent } from './component/garage-employee-list/garage-employee-list.component';
// import { AuthGuardService } from '../shared/services/auth-guard.service';


const route: Routes = [
    {
        path: '', component: ProductListComponent,
    },
    {
        path: 'dashboard', component: DashboardComponent,
    },
    {
        path: 'product-details', component: ProductDetailsComponent,
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
