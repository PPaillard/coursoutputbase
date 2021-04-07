import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-com',
  templateUrl: './create-com.component.html',
  styleUrls: ['./create-com.component.css']
})
export class CreateComComponent implements OnInit {

  @Output() sendComment = new EventEmitter;

  commentaireDuComposant: string;

  constructor() { }

  ngOnInit(): void {
  }

  createComment(comment:string){
    this.sendComment.emit(comment);
  }

}
