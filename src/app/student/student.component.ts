import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../stdudent';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GrtConfirmComponent } from '../grt-confirm/grt-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  uuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};
  studentArr=[

  {
    id: "101",
    fname: "Alex",
    lname: "Johnson",
    email: "alex.johnson@example.com",
    contact: "9876543210"
  },
  {
    id: "102",
    fname: "Mia",
    lname: "Smith",
    email: "mia.smith@example.com",
    contact: "9876543211"
  },
  {
    id: "103",
    fname: "Liam",
    lname: "Brown",
    email: "liam.brown@example.com",
    contact: "9876543212"
  },
  {
    id:"104",
    fname: "Sophia",
    lname: "Davis",
    email: "sophia.davis@example.com",
    contact: "9876543213"
  },
  {
    id:"105",
    fname: "Noah",
    lname: "Wilson",
    email: "noah.wilson@example.com",
    contact: "9876543214"
  }
];

@ViewChild('fname') fname !: ElementRef
@ViewChild('lname') lname !: ElementRef
@ViewChild('email') email !: ElementRef
@ViewChild('contact') contact !: ElementRef
editId!:string;
isInEditMode:boolean = false;

  constructor(
    private _matDialog:MatDialog,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  onAddStudent(){
    if(this.fname.nativeElement.value  && this.lname.nativeElement.value && this.email.nativeElement.value && this.contact.nativeElement.value > 0){
      let stdObj:Istudent={
        fname:this.fname.nativeElement.value,
        lname:this.lname.nativeElement.value,
        email:this.email.nativeElement.value,
        contact:this.contact.nativeElement.value,
        id:this.uuid()
      }
      this._snackBar.open(`The student with id ${stdObj.id} is added successfully!!!`,'close',
        {
          horizontalPosition:'left',
          verticalPosition:'top',
          duration:3000
        }
      )
      this.fname.nativeElement.value ="";
      this.lname.nativeElement.value="";
      this.email.nativeElement.value ="";
      this.contact.nativeElement.value="";

     this.studentArr.push(stdObj)
    }
  }

  trackById(index:number,std:Istudent){
    return std.id;
  }

  onStdRemove(id:string){
    let matConfig = new MatDialogConfig()
    matConfig.disableClose = true
    matConfig.width = "500px"
    let  matDialogRef = this._matDialog.open(GrtConfirmComponent,matConfig)
    matDialogRef.afterClosed()
      .subscribe(res=>{
        if(res){
          let getIndex = this.studentArr.findIndex(s=> s.id === id)
          this.studentArr.splice(getIndex,1)

          this._snackBar.open(`The student with id ${id} is removed successfully!!!`, 'close',
            {
              horizontalPosition:'left',
              verticalPosition:'top',
              duration:3000
            }

          )
        }
      })
  }

  onEdit(data:Istudent){
    this.fname.nativeElement.value = data.fname;
    this.lname.nativeElement.value = data.lname;
    this.email.nativeElement.value = data.email;
    this.contact.nativeElement.value = data.contact;

    this.editId = data.id
    this.isInEditMode = true
  }

  onUpdateStudent(){
    let updatedObj:Istudent={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      id:this.editId
    }
    
    this._snackBar.open(`The student with id ${this.editId} is updated successfully!!!`,'close',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
    this.fname.nativeElement.value=""
    this.lname.nativeElement.value=""
    this.email.nativeElement.value=""
    this.contact.nativeElement.value=""

    let getIndex = this.studentArr.findIndex(s=>s.id === this.editId)
    this.studentArr[getIndex] = updatedObj;

    this.isInEditMode = false

  }

}
