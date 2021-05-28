import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ConfirmComponent } from './confirm/confirm.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'register',
            component: RegisterComponent
            
        },
        {
            path: 'recuperar',
            component: RecuperarComponent
        },
         {
            path: 'pricing',
            component: PricingComponent
        },
        {
            path: 'confirm',
            component: ConfirmComponent
        }]
    }
];
