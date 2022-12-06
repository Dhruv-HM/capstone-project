import { Component } from "@angular/core";

export class Course{
    CourseId:number;
    CategoryId:number;
    Title:string;
    price:number;
    Author:string;
    Rating:number;
    Duration:number;
    NoOfLectures:number;
    ThumbnailUrl:string;
    Description:string
    constructor(CourseId:number,CategoryId:number,Title:string,price:number,Author:string,Rating:number,Duration:number,NoOfLectures:number,ThumbnailUrl:string,Description:string){
        this.CourseId=CourseId;
        this.CategoryId=CategoryId;
        this.Title=Title;
        this.price=price;
        this.Author=Author;
        this.Rating=Rating;
        this.Duration=Duration;
        this.NoOfLectures=NoOfLectures;
        this.ThumbnailUrl=ThumbnailUrl;
        this.Description=Description;
    }
}