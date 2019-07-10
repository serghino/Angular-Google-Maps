import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  form: FormGroup;
  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<MapEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
              this.form = fb.group({
                title : data.title,
                desc : data.desc
              });
               }

  ngOnInit() {
  }

  savechanges() {
    this.closeDialog(this.form.value);
  }
  closeDialog(data: any = ''): void {
    this.dialogRef.close(data);
  }

}
