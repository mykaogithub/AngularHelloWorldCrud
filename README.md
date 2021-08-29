# AngularHelloWorldCrud
AngularHelloWorldCrud

In this tutorial we be creating a full stack application where we expose endpoint using Spring Boot and consume this endpoint using Angular 7 application and display the data. In the next tutorial we will be further enhancing this application and performing CRUD operations.
Previously we have seen what is PCF and how to deploy application to PCF.. I have deployed this application we are developing to PCF. What is a full stack application?
In full stack application we expose the back end point to get the data. This data can then be used by any application or device as per the need. In future even if another front end device is to be used, there will not be much change and the new device will need to consume these end points.
We will be creating a simple Spring Boot Application to expose a REST end point to return a list of employees. In a previous tutorial we had seen how to fetch the data using Spring Boot JDBC.
However for this tutorial we will be mocking the list of employees to be returned. 

you can find the backend part in springBootXML Repository https://github.com/mykaogithub/SpringBootHibernateXMLConfigurattion

Installing Angular CLI

    Install node js by downloading the installable from Install NodeJS
    install angular cli using the following command.It wll get us the latest version of angular cli.

    	npm install -g @angular/cli
    	
      
      We can check the angular cli version -

	ng version
	
  
  Next we will create a new angular project using the angular cli as follows-

	ng new employee-management
    To get the angular cli project started use the following command. We must go inside the employee-management folder and then use it.

    ng serve
    to see the result page go to http://localhost:4200/ 
    I will be using the Miscrosoft Visual Studio Code IDE for angular. So import the project we developed earlier in Miscrosoft Visual Studio Code IDE.
    Our final angular project will be as follows-
    
    
TypeScript
TypeScript is a superset of JavaScript. It is a strongly typed language. So unlike JavaScript we know if some syntax is wrong while typing itself and not at runtime. In Angular it is compiled to JavaScript while rendering application in browser.
    In angular we break complex code into reusable parts called components. Major part of the development with Angular 7 is done in the components. Components are basically classes that interact with the .html file of the component, which gets displayed on the browser.
    Service
    In angular we might have scenarios where some code needs to be reused in multiple components. For example a data connection that fetches data from database might be needed in multiple components. This is achieved using services.

    Create employee component
    We will be creating Employee Component which will fetch data from spring boot and display it. Lets begin with the employee component Open a command prompt and use the following command-

    	ng generate component employee
    	


    angular generate component
    For this angular will have created the following 4 files-
        employee.component.ts
        employee.component.spec.ts
        employee.component.html
        employee.component.css
    Next in the app-routing.module.ts we will be defining the url for accessing this component-

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { EmployeeComponent } from './employee/employee.component';

    const routes: Routes = [
      { path:'', component: EmployeeComponent},
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

    If we goto localhost:4200 and we can see the following output
    employee component works
    Create HttpClient Service
    Next we will be creating a HTTPClient Service. This service will be having the httpClient and will be responsible for calling http GET request to the backend spring boot application.
    In Angular a service is written for any cross cutting concerns and may be used by more than one components

        ng generate service service/httpClient


    angular generate service
    The following service files are created-
        http-client.service.ts
        http-client.service.spec.ts
    We will be modifying the http-client.service.ts file. In the constructor define the HTTPClient instance we will be using to make a call to the Spring Boot application. Here we will be using the Angular HTTPClient for calling the Spring Boot API to fetch the employee data. Also we will creating a method which makes call to the spring boot application using the defined httpClient.

    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    export class Employee{
      constructor(
        public empId:string,
        public name:string,
        public designation:string,
        public salary:string,
      ) {}
    }

    @Injectable({
      providedIn: 'root'
    })
    export class HttpClientService {

      constructor(
        private httpClient:HttpClient
      ) { 
         }

         getEmployees()
      {
        console.log("test call");
        return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
      }
    }

    Also we need to add the HTTPClientModule to the app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { EmployeeComponent } from './employee/employee.component';
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
      declarations: [
        AppComponent,
        EmployeeComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

    Insert HttpClient Service in Employee Component
    Next using constructor dependency injection we will be providing the EmployeeComponent an instance of HttpClientService. Using this service we make a call to spring boot application to get a list of employees.

    import { Component, OnInit } from '@angular/core';
    import { HttpClientService } from '../service/http-client.service';

    @Component({
      selector: 'app-employee',
      templateUrl: './employee.component.html',
      styleUrls: ['./employee.component.css']
    })
    export class EmployeeComponent implements OnInit {

      employees:string[];
       
      constructor(
        private httpClientService:HttpClientService
      ) { }

      ngOnInit() {
        this.httpClientService.getEmployees().subscribe(
         response =>this.handleSuccessfulResponse(response),
        );
      }

    handleSuccessfulResponse(response)
    {
        this.employees=response;
    }

    }

    In the employee.component.html we iterate over the list of employees we got in the employee.component.ts file.

    	
    <table border="1">
      <thead></thead>
      <tr>
        <th>name</th>
        <th>designation</th>
        </tr>
      
      <tbody>
          <tr *ngFor="let employee of employees">
              <td>{{employee.name}}</td>
              <td>{{employee.designation}}</td>
              </tr>
      </tbody>
        </table>

Go to localhost:4200 



