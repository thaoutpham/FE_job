import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-company-info-edit',
  templateUrl: './company-info-edit.component.html',
  styleUrls: ['./company-info-edit.component.scss']
})
export class CompanyInfoEditComponent implements OnInit {
  infoEditForm: FormGroup = new FormGroup({
    companyName: new FormControl(),
    shortName: new FormControl(),
    phone: new FormControl(),
    description: new FormControl(),
    address: new FormControl(),
    numberOfStaff: new FormControl(),
    branch: new FormControl(),
    linkGoogle: new FormControl(),
    website: new FormControl()
  });
  image? = '';
  email? : string;
  password? : string;
  message = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  isUpdated = false;

  constructor(private companyService: CompanyService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.tokenService.getToken().id;
    this.findById(id);
  }

  findById(id: string) {
    return this.companyService.findById(id).subscribe(company => {
      this.image = company.image;
      this.email = company.email;
      this.password = company.password;
      console.log("hello"+this.password);
      this.infoEditForm = new FormGroup({
        companyName: new FormControl(company.companyName, [Validators.required]),
        shortName: new FormControl(company.shortName),
        phone: new FormControl(company.phone, [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
        description: new FormControl(company.description),
        address: new FormControl(company.address),
        numberOfStaff: new FormControl(company.numberOfStaff),
        branch: new FormControl(company.branch),
        linkGoogle: new FormControl(company.linkGoogle),
        website: new FormControl(company.website)
      });
    }, error => {
      console.log(error);
    });
  }

  edit() {
    const id = this.tokenService.getToken().id;
    const company = {
      companyName: this.infoEditForm.value.companyName,
      shortName: this.infoEditForm.value.shortName,
      image: this.image,
      email: this.email,
      password: this.password,
      phone: this.infoEditForm.value.phone,
      description: this.infoEditForm.value.description,
      address: this.infoEditForm.value.address,
      numberOfStaff: this.infoEditForm.value.numberOfStaff,
      branch: this.infoEditForm.value.branch,
      linkGoogle: this.infoEditForm.value.linkGoogle,
      website: this.infoEditForm.value.website,
    };
    this.companyService.update(id, company).subscribe(company => {
      localStorage.setItem('message', 'C???p nh???t th??ng tin th??nh c??ng');

    }, error => {
      console.log(error);
    });
  }

  // @ts-ignore
  onChangeImage($event) {
    this.image = $event;
  }

  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

  reload() {
    this.router.navigate(['companies/info']);
  }
}
