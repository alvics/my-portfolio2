import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent {
  lat = -27.94016130179952;
  lng = 153.39853176469876;

  constructor() { }

  ngOnInit() {
    // this.getUserLocation();

  }

  /*  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  } */

  onChoseLocation(event) {
    console.log(event);
  }
}
