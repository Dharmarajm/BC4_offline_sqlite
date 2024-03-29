import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabscg.page';

const routes: Routes = [
  {
    path: 'tabsc',
    component: TabsPage,
    children: [
      {
        path: 'tab1c',
        children: [
          {
            path: '',
            loadChildren: '../tab1cg/tab1cg.module#Tab1PageModule'
          }/*,
          {
            path: 'care-giver-alerts',
            loadChildren: '../cgalerts/cgalerts.module#CgalertsPageModule'
          },
          {
            path: 'care-giver-vitals',
            loadChildren: '../cgvitals/cgvitals.module#CgvitalsPageModule'
          },
          {
            path: 'care-giver-health-diary',
            loadChildren: '../cghealth-diary/cghealth-diary.module#CghealthDiaryPageModule'
          },
          {
            path: 'care-giver-appointments',
            loadChildren: '../cgappointments/cgappointments.module#CgappointmentsPageModule'
          },
          {
            path: 'care-giver-doc-visits',
            loadChildren: '../cgdoc-visits/cgdoc-visits.module#CgdocVisitPageModule'
          },
          {
            path: 'care-giver-prescriptions',
            loadChildren: '../cgprescriptions/cgprescriptions.module#CgprescriptionsPageModule'
          },
          {
            path: 'care-giver-reports',
            loadChildren: '../cgreports/cgreports.module#CgreportsPageModule'
          },
          {
            path: 'care-giver-expenses',
            loadChildren: '../cgexpenses/cgexpenses.module#CgexpensesPageModule'
          }*/
        ]
      },
      {
        path: 'tab2c',
        children: [
          {
            path: '',
            loadChildren: '../tab2cg/tab2cg.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3c',
        children: [
          {
            path: '',
            loadChildren: '../tab3cg/tab3cg.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabsc/tab1c',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsc/tab1c',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
