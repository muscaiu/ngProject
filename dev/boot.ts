import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {enableProdMode} from 'angular2/core';
enableProdMode();
import {ROUTER_PROVIDERS} from 'angular2/router' 

bootstrap(AppComponent, [ROUTER_PROVIDERS]);