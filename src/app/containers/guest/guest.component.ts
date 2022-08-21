import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'jquery';
import { GuestServiceService } from './services/guest-service.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  marks ={
      Overall : '',
      Direction : '',
      Story : '',
      Acting : '',
      Music : '',
      SFX : '',
      Camera : '',
      Production : '',
      _id :''
  }
  id : string = ''
  movieid : string =''
  movieName : string =''
  MarKs : []
  roleid:string =localStorage.getItem('id') || '';
  exmark:any
  GMoviedata:any;
  GMoviedatan:any;
  Reviewed:any;
  moviedata1:any;
  validMovies:any;
  validMovies2: any;
  unReviewed: any;

  constructor(
    public serve:GuestServiceService,
    public getmovie:GuestServiceService
  ) {
     this.fetchgmovie();
    }

  ngOnInit(): void {
  }
  
  Gmodal = false;
  Gmodalm = false;
  sguestmodal(movieId:string){
    this.Gmodal = !this.Gmodal;
    this.movieid = movieId;
  }
  cguestmodal(rvform:NgForm){
    this.Gmodal = !this.Gmodal;
    rvform.reset();
    window.location.reload();
  }
  sguestmodalmarks(movieId:string,moviename:string,marKs:[]){
    this.Gmodalm = !this.Gmodalm;
    this.movieid = movieId;
    this.movieName = moviename;
    this.MarKs = marKs;

    // to fetch one movie data
    return this.getmovie.getg1movie(this.movieid).subscribe((movies1:any) => {
      this.moviedata1=movies1;
      this.moviedata1.marks1=movies1.marks;
      this.roleid=localStorage.getItem('id') || '';
      for(var i in this.moviedata1.marks1){
        if(this.moviedata1.marks1[i]._id == this.roleid){
          this.exmark=this.moviedata1.marks1[i];
        }
      }
    })
  }
  cguestmodalmarks(){
    this.Gmodalm = !this.Gmodalm;
  }
  addReview(rvform:NgForm):void{
    this.marks._id = localStorage.getItem('id') || '';
    this.serve.updatemark(this.marks,this.movieid);
    this.Gmodal = false;
    rvform.reset();
    window.location.reload();
  }
  fetchgmovie(){
    this.getmovie.getGmovie().subscribe((movies) => {
      this.Reviewed=[];
      this.unReviewed=[];
      this.GMoviedata = Object.values(movies);
      this.GMoviedatan = Object.values(movies);
      this.validMovies = this.AssignedOnly(this.GMoviedatan);
      this.ReviewOrNot(this.validMovies);
    })
  }
  AssignedOnly(GMoviedatan: any){
    let counter = 0
    this.validMovies=[];
    this.validMovies2=[];
    let y:any;
    GMoviedatan.forEach((movieb:
      {guests: string[];})=>{
        counter++
      movieb.guests?.forEach((f: string)=>{
        if(f==this.roleid) {
          this.validMovies2.push(movieb);
          this.validMovies2.forEach((e: {url : string})=> {
            let x:any = e?.url?.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
            x.forEach((j:any)=>{
              let counter = 0;
              counter++;
              if(counter == 1) y = j;
            })
            this.validMovies.push({...e , urlId: `https://i.ytimg.com/vi/${y}/maxresdefault.jpg`});
          })
        }
      })
      if(counter >= this.GMoviedatan.length-2){
        this.ReviewOrNot(this.validMovies)
      }
    })
  }
  ReviewOrNot(validMovies: any){
    validMovies.map((movie: { marks: any[]; })=>{
      if(!movie.marks.length){
        this.unReviewed?.push(movie)
      }
      movie.marks.forEach((e: { _id: string; })=>{
        if(e._id==this.roleid){ 
          this.Reviewed?.push(movie)}
      })
    })
  }

}
