import { Component } from '@angular/core';
import { SelectTrackComponent } from './components/Tracks/select-track.component';
import { ShowBranchesComponent } from './components/Branches/show-branches.component';

@Component({
  selector: 'app-root',
  imports: [SelectTrackComponent,ShowBranchesComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SelectTrack';
  trackSelected:string=''

  flag:boolean=false
  tracks:{ trackName:string,branches:string[]}[]=[]
  filteredTracks:any[]=[]
  filteredBranches:any[]=[]
  constructor(){
    this.tracks=[{
      trackName:"Front",
      branches:["Benha","Menoufia"]
    },
    {
      trackName:"Mearn",
      branches:["Alex","Smart Village","Minya"]
    },
    {
      trackName:"Testing",
      branches:["Tanta","Ismailia"]
    },
    {
      trackName:"2D Graphics",
      branches:[]
    }]
    this.filteredTracks=this.tracks
  }
  getTrack(track:string){
    this.trackSelected=track
    this.flag=true
    this.filteredTracks=this.tracks.filter((track)=>track.trackName===this.trackSelected)
    if(this.filteredTracks.length===0)
      this.filteredBranches=[]
    else
      this.filteredBranches=this.filteredTracks[0].branches
  }
}

