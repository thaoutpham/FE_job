import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {Company} from '../../../model/company/company';
import {CompanyService} from '../../../service/company.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CvService} from '../../../service/cv.service';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token: string = '';
  type: string = '';
  name?: string;
  linkCv? = '';
  checkValid = false;
  UpCVForm: FormGroup = new FormGroup({
    user: new FormControl(),
    link: new FormControl(),
    nameCV: new FormControl(),
  });
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;

  constructor(private tokenService: TokenService,
              private router: Router,
              private companyService: CompanyService,
              private cvService: CvService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.token = this.tokenService.getToken().token;
      this.name = this.tokenService.getToken().name;
      this.type = this.tokenService.getToken().roles[0].authority;
    }
    console.log(this.router.url);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  next() {
    const idCompany = this.tokenService.getToken().id;
    this.companyService.findById(idCompany).subscribe(result => {
      if (!this.isValid(result)){
        this.router.navigateByUrl('/posts/create');
      }else {
        this.router.navigateByUrl('/companies/edit');
      }
    });
  }

  isValid(company?: Company) {
    const checkName = company?.companyName == ''|| company?.companyName == null;
    const checkEmail = company?.email == ''|| company?.email == null;
    const checkImage = company?.image == '' || company?.image == null;
    const checkPassword = company?.password == ''|| company?.password == null;
    return checkName && checkEmail && checkImage && checkPassword;
  }
  navigatemainsite(){
    this.router.navigateByUrl("/");
  }


  // @ts-ignore
  onChangeCv($event) {
    this.linkCv = $event
    this.checkValid = true;
  }

  check(){
    this.checkValid = false;
    this.linkCv = '';
  }

  save() {
    const id = this.tokenService.getToken().id;
    const cv = {
      name : this.UpCVForm.value.nameCV,
      link : this.linkCv,
      user:{
        id: id
      }
    }
    // @ts-ignore
    this.cvService.save(cv).subscribe(()=>{
      window.location.reload();
    })
  }
}
