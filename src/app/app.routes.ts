import { Routes, RouterModule } from '@angular/router'

//Components
import { StatesComponent } from './components/states/states.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsNearMeComponent } from './components/items-near-me/items-near-me.component';
import { SearchedItemsComponent } from './components/searched-items/searched-items.component';
import { DonateComponent } from './components/donate/donate.component';
import { AddItemCanActivate } from './components/donate/donate.guard';


const MY_ROUTES: Routes = [
    { path: "", component: StatesComponent },
    { path: "home", redirectTo: "", pathMatch: "full" },
    { path: "states/:state", component: CitiesComponent },
    { path: "donate", component: DonateComponent, canActivate: [AddItemCanActivate] },
    {
        path: "states/:state", component: CitiesComponent, children: [
            { path: ":city", component: ItemsComponent }
        ]
    },
    { path: 'advancedSearch', component: SearchedItemsComponent },

    { path: "nearme", component: ItemsNearMeComponent },
    { path: "itemsNearMe", component: ItemsNearMeComponent }


]

export const MyRoutesModule = RouterModule.forRoot(MY_ROUTES);