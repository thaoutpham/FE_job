import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {Router} from '@angular/router';
import {error} from 'protractor';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL: string = '';
  checkUploadFile = false;
  @Output()
  givenURLtoCreate = new EventEmitter<string>();
  message: string = '';


  constructor(private angularFireStore: AngularFireStorage,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileChange($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files[0];
  }

  onUpload(): any {
    // @ts-ignore
    const name = this.selectedFile.name;
    const allowedExtensions =
      /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(name)) {
      this.message = 'Đây không phải là file ảnh';
    } else {
      this.checkUploadFile = true;
      this.message = 'Đăng ảnh thành công';
      this.ref = this.angularFireStore.ref(name);
      this.ref.put(this.selectedFile)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
          this.downloadURL = downloadURL;
          this.givenURLtoCreate.emit(this.downloadURL);
          this.checkUploadFile = false;
          return downloadURL;
        })
        .catch(error => {
          console.log(`Failed to upload avatar and get link ${error}`);
        });
    }
  }

  reload() {
    if (!this.checkUploadFile) {
      this.router.navigate(['companies/edit-info']).then(() => {
        location.reload();
      }, error => {
        console.log(error);
      });
    } else {
      return;
    }
  }
}
