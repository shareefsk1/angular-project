import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

    public names : string[] = ['shareef','sai kairan','anjani']

    public states: string[] = ['telangana','andra','assam','UP','Haryana']

    public users: any = [{name:"shareef",age:20, package:10,Location :"hyd"},
    {name:"shareef",age:20, package:10,Location :"hyd"},
    {name:"shareef1",age:21, package:10,Location :"hyd"},
    {name:"shareef2",age:22, package:10,Location :"hyd"},
    {name:"shareef3",age:23, package:10,Location :"hyd"},]


    public time: number = 20;

}
