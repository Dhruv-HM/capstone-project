import { Component } from "@angular/core";

export class Role{
    RoleId:number;
    RoleName:string;
    constructor(RoleId:number,RoleName:string){
        this.RoleId=RoleId;
        this.RoleName=RoleName;
    }
}