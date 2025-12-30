import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grt-confirm',
  templateUrl: './grt-confirm.component.html',
  styleUrls: ['./grt-confirm.component.scss']
})
export class GrtConfirmComponent implements OnInit {

  constructor(
    private _matDialogRef : MatDialogRef<GrtConfirmComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matDialogRef.close(flag)
  }

}
