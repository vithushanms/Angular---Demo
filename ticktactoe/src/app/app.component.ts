import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr : ToastrService){}

  title = 'ticktactoe';

  winMessage : string = '';
  isCoross = false;
  itemArray : string[] = new Array(9).fill('empty');

  handleClick = (num : number) => {
    if(this.winMessage != ''){
      return this.toastr.success(this.winMessage);
    }

    if(this.itemArray[num] === 'empty'){
      this.itemArray[num] = this.isCoross ? 'cross' : 'circule'
      
      this.isCoross = !this.isCoross;
    }
    else
    {
      return this.toastr.warning("This box is already played");
    }

    this.checkIsWinner();
  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCoross = false;
    this.itemArray = new Array(9).fill('empty')
  }

  checkIsWinner = () => {
    if(
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[1] === this.itemArray[2] &&
      this.itemArray[0] != 'empty')
      {
        this.winMessage = `${this.itemArray[0]} won`
    }
    else if(
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5] &&
      this.itemArray[3] != 'empty')
      {
        this.winMessage = `${this.itemArray[3]} won`
    }
    else if(
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8] &&
      this.itemArray[6] != 'empty')
      {
        this.winMessage = `${this.itemArray[6]} won`
    }
    else if(
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6] &&
      this.itemArray[0] != 'empty')
      {
        this.winMessage = `${this.itemArray[0]} won`
    }
    else if(
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7] &&
      this.itemArray[1] != 'empty')
      {
        this.winMessage = `${this.itemArray[1]} won`
    }
    else if(
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8] &&
      this.itemArray[2] != 'empty')
      {
        this.winMessage = `${this.itemArray[2]} won`
    }
    else if(
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8] &&
      this.itemArray[0] != 'empty')
      {
        this.winMessage = `${this.itemArray[0]} won`
    }
    else if(
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6] &&
      this.itemArray[2] != 'empty')
      {
        this.winMessage = `${this.itemArray[2]} won`
    }
  }
}
