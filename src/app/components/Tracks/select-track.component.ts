import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-track',
  imports: [],
  templateUrl: './select-track.component.html',
  styleUrl: './select-track.component.css'
})
export class SelectTrackComponent {
trackName!:string
@Output() selectedTrack = new EventEmitter()

selectTrack(e:Event){
let target=e.target as HTMLSelectElement
this.trackName=target.value
this.selectedTrack.emit(this.trackName)
}
}
