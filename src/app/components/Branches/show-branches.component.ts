import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-branches',
  imports: [],
  templateUrl: './show-branches.component.html',
  styleUrl: './show-branches.component.css'
})
export class ShowBranchesComponent {
  @Input() branches:string[]=[]
}
