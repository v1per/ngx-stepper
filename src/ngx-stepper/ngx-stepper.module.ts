import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgxStepActionsComponent } from "./ngx-step-actions.component";
import { NgxStepBodyComponent } from "./ngx-step-body.component";
import { NgxStepComponent } from "./ngx-step.component";
import { NgxStepperComponent } from "./ngx-stepper.component";

@NgModule({
  declarations: [
    NgxStepperComponent,
    NgxStepComponent,
    NgxStepBodyComponent,
    NgxStepActionsComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  exports: [
    NgxStepperComponent,
    NgxStepComponent,
    NgxStepBodyComponent,
    NgxStepActionsComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NgxStepperModule {}
