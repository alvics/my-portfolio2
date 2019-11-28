import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './ui/components/header/header.component';
import { HeroComponent } from './ui/components/hero/hero.component';
import { HireComponent } from './components/hire/hire.component';
import { HomeComponent } from './components/home/home.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { HostingComponent } from './components/pages/hosting/hosting.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ResponsiveWebsitesComponent } from './components/pages/responsive-websites/responsive-websites.component';
import { SeoComponent } from './components/pages/seo/seo.component';
import { WebDesignComponent } from './components/pages/web-design/web-design.component';
import { WebDevelopmetComponent } from './components/pages/web-developmet/web-developmet.component';

import { FooterComponent } from './ui/components/footer/footer.component';
import { ModalComponent } from './ui/components/modal/modal.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { PaginationComponent } from './ui/components/pagination/pagination.component';
import { ContactModalComponent } from './ui/components/contact-modal/contact-modal.component';
import { GoogleMapsComponent } from './ui/components/google-maps/google-maps.component';
import { BackbtnComponent } from './ui/components/backbtn/backbtn.component';
import { BackButtonDirective } from './back-button.directive';


import { MyErrorHandler } from './myerrorhandler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HireComponent,
    ProjectsComponent,
    BlogComponent,
    PortfolioComponent,
    ModalComponent,
    EcommerceComponent,
    WebDesignComponent,
    SeoComponent,
    ResponsiveWebsitesComponent,
    WebDevelopmetComponent,
    HostingComponent,
    HeaderComponent,
    PaginationComponent,
    ContactModalComponent,
    GoogleMapsComponent,
    BackbtnComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASmiQ6q8whqNytylIhhVru_8HRkJ_-7rw'
    }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ErrorHandler, MyErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule {}
