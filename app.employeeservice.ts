import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn:'root'
})


export class EmployeeService{
    myMethod$: Observable<any>;
    private myMethodSubject = new BehaviorSubject<any>("");
    constructor(private http:HttpClient){
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    getAllEmployee(){
        return this.http.get("assets/employee.json");
    }

    myMethod(data) {
        console.log(data);  
        this.myMethodSubject.next(data); 
    }

    
}