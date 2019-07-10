import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/models/marker.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog} from '@angular/material';
import { MapEditComponent } from './map-edit.component';
import { MarkerLabel } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markeritem: Marker[] = [];
  lat = 45.395820;
  lng = -73.565743;
  zoom = 15;
  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog ) {
    if (localStorage.getItem('markers')) {
      this.markeritem = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event: any) {
    const coords: {lat: number, lng: number} = event.coords;
    const newmarker = new Marker(coords.lat, coords.lng);
    this.markeritem.push(newmarker);
    this.saveStorage();
    this.snackBar.open('Marker added', 'Close', {duration: 3000});

  }

  saveStorage() {
    // Only Sring key/pair.
    localStorage.setItem('markers', JSON.stringify(this.markeritem));
  }

  deleteMarker(index: number) {
    this.markeritem.splice(index, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', {duration : 3000});
  }

  editmarker(marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: {title: marker.title, desc: marker.description}
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (!result) {
        return;
      }
      marker.title = result.title;
      marker.description = result.desc;
      this.saveStorage();
      this.snackBar.open('Marker Saved', 'Close', {duration : 3000});
    });
  }

}
