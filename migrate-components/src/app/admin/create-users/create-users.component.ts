import { Component, OnInit } from '@angular/core';
import { NameParserService } from '../name-parser.service';
import { UsersService } from 'src/app/security/users.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
})
export class CreateUsersComponent implements OnInit {
  namesblob: string = '';

  constructor(
    private nameParser: NameParserService,
    private users: UsersService, // @Inject('toastr') toastr
    private fb: FormBuilder
  ) {}

  userForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.userForm = this.fb.group({
      namesblob: ['', Validators.required],
    });
  }

  import() {
    var people = this.nameParser.parse(this.userForm.get('namesblob')?.value);
    people.forEach((person) => {
      this.users
        .createNewUser({
          id: 0,
          email: person.email,
          firstName: person.firstName,
          lastName: person.lastName,
          password: 'pass',
          isAdmin: false,
        })
        .pipe(
          catchError((error: any) => {
            // toastr.error('User already exists: ' + person.email);
            return throwError('User already exists');
          })
        )
        .subscribe();
    });

    // toastr.success('Users Created!');
  }
}
