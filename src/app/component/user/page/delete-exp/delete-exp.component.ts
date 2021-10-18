import { Component, OnInit } from '@angular/core';
import {Exp} from "../../../../model/exp";
import {ExpService} from "../../../../service/exp.service";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../../../service/token.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-delete-exp',
  templateUrl: './delete-exp.component.html',
  styleUrls: ['./delete-exp.component.scss']
})
export class DeleteExpComponent implements OnInit {
  user: User[] = [];
  exp: Exp | undefined;
  id: string | undefined;
  constructor(private expService: ExpService, private ac: ActivatedRoute, private token: TokenService) {
  }
  expForm: FormGroup = new FormGroup({
    skill: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    salary: new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.ac.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      // @ts-ignore
      this.expService.getById(this.id).subscribe(result => {
          this.exp = result;
          this.expForm = new FormGroup({
            skill: new FormControl(this.exp.skill),
            year: new FormControl(this.exp.year),
            salary: new FormControl(this.exp.salary)
          });
          // console.log(result);
        }, error => {
          console.log(error);
        }
      );
    });
    this.exp = {
      skill: 'hello',
      year: 'hello',
      salary: 'hello'
    }
  }
  delete(){
    const user_id = this.token.getToken().id;
    const exp = {
      skill: this.expForm.value.skill,
      year: this.expForm.value.year,
      salary: this.expForm.value.salary,
      user: this.user = {
        // @ts-ignore
        id: user_id
      }
    }
    console.log(exp)

    // @ts-ignore
    this.expService.delete(this.id).subscribe(abc =>{
      alert('Edit Ok')
      history.back()
    })
  }
}
