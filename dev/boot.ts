import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {enableProdMode} from 'angular2/core';
enableProdMode();
import {ROUTER_PROVIDERS} from 'angular2/router' 
import {HTTP_PROVIDERS} from 'angular2/http'

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);