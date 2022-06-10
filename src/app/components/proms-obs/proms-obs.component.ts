import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-proms-obs',
  templateUrl: './proms-obs.component.html',
  styleUrls: ['./proms-obs.component.scss']
})
export class PromsObsComponent implements OnInit, OnDestroy {

  private mySubscription: Subscription
    // constructor(  private mySubscription: Subscription) { }
    = new Subscription;
  // constructor(  private mySubscription: Subscription) { }

  ngOnInit(): void {
    // promise
      // const promise = new Promise(resolve => {
      //   console.log('1 promise without specific order')
      //   console.log('2 promise without specific order')
      //   setTimeout(() => {
      //     resolve('Promise working1');
      //     resolve('Promise working2');
      //     resolve('Promise working3');
      //     resolve('Promise working4');
      //   }, 1000)
      // })
      // promise.then(result => document.body.append(JSON.stringify(result))
      //   // console.log(result)
      //   )

    //observable
    const observable = new Observable(sub => {
      console.log('obsrvable call ...');
      // console.log('1.0 Observable without specific order')
      // console.log('2.0 Observable without specific order')
      // setTimeout(() => {
      //   sub.next(`<p>Observable working1</P>`)
      //   sub.next(`<p>Observable working2</P>`)
      //   sub.next(`<p>Observable working3</P>`)
      //   sub.next(`<p>Observable working4</P>`)
      // }, 1000)

      let counter = 0;
      setInterval(() => {

        // counter = counter + 1;
        counter++
        sub.next(counter);
      }, 1000)
    });
    // observable.pipe(
    //   filter(data => data === '<p>Observable working2</P>')
    // )
    // this.mySubscription = observable.subscribe(result => document.body.append(JSON.stringify(result))
    this.mySubscription = observable.subscribe(result => document.body.append(JSON.stringify('Subscriber count: ' + result))
    // this.mySubscription = observable.subscribe(result => console.log('Subscriber count: ' + result))
      //  console.log(result)
       )
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
