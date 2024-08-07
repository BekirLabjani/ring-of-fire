import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-e73eb","appId":"1:648441431626:web:9811d297e70165409b48b3","storageBucket":"ring-of-fire-e73eb.appspot.com","apiKey":"AIzaSyAMdLw8e3QYx-i12_DXbMLG-7d-eyFRRLk","authDomain":"ring-of-fire-e73eb.firebaseapp.com","messagingSenderId":"648441431626","measurementId":"G-TG78TK8NXY"})), provideFirestore(() => getFirestore())]
};
