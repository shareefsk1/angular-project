import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

    public names : string[] = ['shareef','sai kairan','anjani']

    public states: string[] = ['telangana','andra','assam','UP','Haryana']

    public users: any = [{name:"shareef",age:9, package:15,Location :"hyd"},
                          {name:"shareef",age:12, package:10,Location :"hyd"},
                          {name:"shareef1",age:21, package:11,Location :"hyd"},
                          {name:"shareef2",age:13, package:9,Location :"hyd"},
                          {name:"shareef3",age:33, package:15,Location :"hyd"},
                          {name:"shareef5",age:25, package:5,Location :"hyd"},
                        ]


    public time: number = 20;

    public today: any = new Date();

}
