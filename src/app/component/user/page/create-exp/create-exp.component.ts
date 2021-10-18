import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExpService} from "../../../../service/exp.service";
import {Exp} from "../../../../model/exp";
import {User} from 'src/app/model/user';
import {TokenService} from "../../../../service/token.service";

@Component({
  selector: 'app-create-exp',
  templateUrl: './create-exp.component.html',
  styleUrls: ['./create-exp.component.scss']
})
export class CreateExpComponent implements OnInit {
  user: User[] = [];
  constructor(private expService: ExpService, private token: TokenService) {
  }


  expForm: FormGroup = new FormGroup({
    skill: new FormControl('', [Validators.required,Validators.minLength(6)]),
    year: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    user: new FormControl()
  })

  ngOnInit() {
  }

  submit() {
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
    console.log(exp);
    this.expService.save(exp).subscribe(result => {
      this.expForm.reset();
        alert("ok");
      }, error => {
        console.log('hello')
        console.log(error)
      }
    )
  }
}
