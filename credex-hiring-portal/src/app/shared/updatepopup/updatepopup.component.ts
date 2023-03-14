import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef
 } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.scss']
})
export class UpdatepopupComponent implements OnInit{

  constructor(private builder:FormBuilder, private service:AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any, private toastr:ToastrService,
    private dialog:MatDialogRef<UpdatepopupComponent>){

    }

  editdata:any;  

  ngOnInit(): void {
    this.service.GetAllRole().subscribe(res=>{
      this.rolelist=res;
    })
    if(this.data.usercode!=null && this.data.usercode!=''){
      this.service.GetUserbyCode(this.data.usercode).subscribe(res=>{
        this.editdata = res;
        console.log(this.editdata);
        this.registerform.setValue({
          id: this.editdata.id,
          firstName: this.editdata.firstName,
          lastName: this.editdata.lastName,
          password: this.editdata.password,
          contact: this.editdata.contact,
          emailId: this.editdata.emailId,
          roleId: this.editdata.roleId
        })
        console.log(this.registerform);
      });
    }
  }

  rolelist:any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    firstName: this.builder.control(''),
    lastName: this.builder.control(''),
    password: this.builder.control(''),
    contact: this.builder.control(''),
    emailId: this.builder.control(''),
    roleId: this.builder.control('', Validators.required),
  });

  UpdateUser(){
    console.log(this.registerform.value);
    if(this.registerform.valid){
      console.log('entering loop');
      console.log(this.registerform.value.roleId);
      this.service.Updateuser(this.registerform.value.id, this.registerform.value).subscribe(res=>{
        this.toastr.success('Updated Successfully.')
        this.dialog.close();
      })

    }else{
      this.toastr.warning('Please Select Role.')
    }
  }
}
