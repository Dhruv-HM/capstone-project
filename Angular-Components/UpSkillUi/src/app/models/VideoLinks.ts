import { Component } from "@angular/core";

export class VideoLinks {
    VideoLinksId:number;
    CourseId:number;
    Url:string
    Duration:number;
    Title:string;
    constructor(VideoLinksId:number,CourseId:number,Url:string,Duration:number,Title:string){
        this.VideoLinksId=VideoLinksId;
        this.CourseId=CourseId;
        this.Url=Url;
        this.Duration=Duration;
        this.Title=Title;
    }
}