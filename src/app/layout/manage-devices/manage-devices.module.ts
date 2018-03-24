import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDevicesRoutingModule } from './manage-devices-routing.module';
import { ManageDevicesComponent } from './manage-devices.component';

@NgModule({
    imports: [CommonModule, ManageDevicesRoutingModule],
    declarations: [ManageDevicesComponent]
})
export class ManageDevicesModule {}
