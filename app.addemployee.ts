import {Component} from '@angular/core';
import {EmployeeService}  from './app.employeeservice'
@Component({
    selector:'add-emp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{

    

    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    status:boolean=false;
    empAll:any[]=[];
    
    flag:boolean=false;
    addEmployee():any{
        this.status=true;
        this.flag=!this.flag;
        this.empAll[0]={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}; 
        alert("Added")
    }
    public data: any = this.empAll;

    public constructor(private myService: EmployeeService) {
        this.myService.myMethod(this.data);
    }

}