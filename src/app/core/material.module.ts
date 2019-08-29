import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatBadgeModule,
    MatMenuModule,
    MatInputModule,
    MatStepperModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatDialog,
    MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatSliderModule,
        MatBadgeModule,
        MatMenuModule,
        MatSnackBarModule,
        MatStepperModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule,
        MatTableModule],
    providers: [
        MatDialog,
        {   provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: { hasBackdrop: true }
        }],
})
export class MaterialModule {
}
