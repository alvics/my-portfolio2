import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { HireComponent } from './components/hire/hire.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { ContentfulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ModalComponent } from './ui/components/modal/modal.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { WebDesignComponent } from './components/pages/web-design/web-design.component';
import { SeoComponent } from './components/pages/seo/seo.component';
import { ResponsiveWebsitesComponent } from './components/pages/responsive-websites/responsive-websites.component';
import { WebDevelopmetComponent } from './components/pages/web-developmet/web-developmet.component';
import { HostingComponent } from './components/pages/hosting/hosting.component';
import { HeaderComponent } from './components/header/header.component';



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
    MdToHtmlPipe,
    PortfolioComponent,
    ModalComponent,
    EcommerceComponent,
    WebDesignComponent,
    SeoComponent,
    ResponsiveWebsitesComponent,
    WebDevelopmetComponent,
    HostingComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ], 
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
