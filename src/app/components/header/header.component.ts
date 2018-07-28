import { ProjectsComponent } from './../pages/projects/projects.component';
import { HeaderService } from './../../header.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  


  
  constructor( private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.currentTitle.subscribe(title => this.title = title);
    }

    onEvent(event) {
      event.hide();
      }

  }
