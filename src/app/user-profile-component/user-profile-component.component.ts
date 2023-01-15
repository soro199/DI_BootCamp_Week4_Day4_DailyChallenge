import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  user: User = new User("Wongniga Seydou","Soro","https://cdn.unitycms.io/images/FEVAJQFq4E8AsAZIek4OtF.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=HwBx2-fV7oM")

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
