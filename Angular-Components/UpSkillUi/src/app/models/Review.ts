import { Component } from "@angular/core";

export class Review{
    ReviewId:number;
    CourseId:number;
    Author:string;
    Date:Date;
    Rating:number;
    Description:string;
    constructor(ReviewId:number,CourseId:number,Author:string,Date:Date,Rating:number,Description:string){
       this.ReviewId=ReviewId;
       this.CourseId=CourseId;
       this.Author=Author;
       this.Date=Date;
       this.Rating=Rating;
       this.Description=Description;
    }
}