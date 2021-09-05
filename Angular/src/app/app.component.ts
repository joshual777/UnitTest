import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Investigacion1';
  resultado;

  BubbleSort(array: number[]): number[]{
    const tempArray = array;
    let volverAOrdenar = false;
    for (let i = 0; i < tempArray.length - 1 ; i++) {
        if (tempArray[i] > tempArray[i + 1]) {
            const primerNum = tempArray[i];
            const segundoNum = tempArray[i + 1];
            tempArray[i] = segundoNum;
            tempArray[i + 1] = primerNum;
            volverAOrdenar = true;
        }
    }
    if (volverAOrdenar) {
        this.BBS(tempArray);
    }
    return tempArray;
  }
}
