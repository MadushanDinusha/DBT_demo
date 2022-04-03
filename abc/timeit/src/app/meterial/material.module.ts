import { NgModule } from '@angular/core';   

import { MatIconModule } from '@angular/material/icon'
import { MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTableModule } from '@angular/cdk/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
      A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkTableModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatRippleModule,
      MatSelectModule,
      MatTableModule, 
      MatToolbarModule,
      MatTooltipModule,
      MatNativeDateModule,
      MatPaginatorModule,  
      MatSortModule,
      MatGridListModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatToolbarModule,
      MatInputModule,
      MatSortModule

    ],
    exports: [ 
      A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkTableModule,
    MatGridListModule,
      MatIconModule,
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatToolbarModule,
      MatInputModule,
      MatSortModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatRippleModule,
      MatSelectModule,
      MatTableModule, 
      MatToolbarModule,
      MatTooltipModule,
      MatNativeDateModule,
      MatPaginatorModule,  
      MatSortModule,
    ]
})
export class MaterialModule { }