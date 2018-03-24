import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDevicesComponent } from './manage-devices.component';

const routes: Routes = [
    {
        path: '',
        component: ManageDevicesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageDevicesRoutingModule {}
