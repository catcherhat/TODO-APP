 ICT-KERALA FSD BATCH 7

# Case-Study #01 - TODO AppWorkshop
Simple ToDoList Web Application 

In this application, first, there is a login session. Users can log in only into the web app using the username “admin” and password “12345”. Should check the login validation and if the login is true, then using the “Callback Function” concept, redirect to the main page. 

On the main page, there is a navigation bar with menus (Todo List, LogOut). On the Todo list page, you have to retrieve the daily tasks (to-do lists) from the API (https://jsonplaceholder.typicode.com/todos) and in that mark the todos that you are already completed. If you marked 5 todos as completed, then an alert box will pop up and show “ Congrats. 5 Tasks have been Successfully Completed ” (Use the concept of Promise() for the validation of 5 Completed TodoLists ). 

When you click on the LogOut menu in the navbar, it should redirect to the login page. The whole User Interface should be responsive by using Bootstrap or any other Framework.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
