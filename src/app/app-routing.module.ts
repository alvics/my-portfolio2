import { HostingComponent } from './components/pages/hosting/hosting.component';
import { WebDevelopmetComponent } from './components/pages/web-developmet/web-developmet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';

import { ContactComponent } from './components/contact/contact.component';
import { HireComponent } from './components/hire/hire.component';
import { HomeComponent } from './components/home/home.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { SeoComponent } from './components/pages/seo/seo.component';
import { WebDesignComponent } from './components/pages/web-design/web-design.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ResponsiveWebsitesComponent } from './components/pages/responsive-websites/responsive-websites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  // { path: 'blog-details/:slug', component: BlogDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hire', component: HireComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'seo', component: SeoComponent },
  { path: 'responsive-websites', component: ResponsiveWebsitesComponent },
  { path: 'web-development', component: WebDevelopmetComponent },
  { path: 'web-hosting', component: HostingComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
