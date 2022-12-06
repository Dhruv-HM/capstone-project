import { Component } from "@angular/core";

export class User {
    UserId:number;
    RoleId:number;
    UserName:string;
    Password:string;
    Email:string;
    PictureUrl:string;
    constructor(UserId:number,RoleId:number,UserName:string,Password:string,Email:string,PictureUrl:string){
       this.UserId=UserId;
       this.RoleId=RoleId;
       this.UserName=UserName;
       this.Password=Password;
       this.Email=Email;
       this.PictureUrl=PictureUrl;
    }
}