import { Component } from "@angular/core";
import { User } from "./User";

export class EnrolledCourses{
    EnrolledCoursesId:number;
    UserId:number;
    CourseID:number;
    constructor(EnrolledCoursesId:number,UserId:number,CourseID:number){
        this.EnrolledCoursesId=EnrolledCoursesId;
        this.UserId=UserId;
        this.CourseID=CourseID;
    }
}