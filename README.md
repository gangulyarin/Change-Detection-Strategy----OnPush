Performance Optimization in Angular. Part 2 — Change Detection Strategy, OnPush
This series of articles will mainly focus on Angular Performance Optimization and on the way we hope to learn a lot of technical concepts and tricks. Some of you will be already knowing some of these techniques. I have tried putting all of the techniques together step by step (article by article) like an algorithm. The targeted audience are people who already have an Angular Application and want to make it performance efficient and people who are on the road of building an Angular application alike.
Here is the link to the first part of the series for people who have not read it yet.
https://medium.com/@arindamganguly_14424/performance-optimization-in-angular-part-1-trackby-6d18a68b417a
In the first part we learned to check all ngFors and put trackBy so decrement reloading of all the htmls.
In this part we will learn something more complex and interesting.
Here in this article we will learn what is ChangeDetectionStrategy and OnPush, where can it be used and how to use it exactly in layman terms.
Let us start creating an app. I name my app onpush (obviously!)
ng new onpush
We are going to have an app similar to the app we built in part one. Very basic and simple. Open up app.component.ts. Let us two arrays this time. One having important superheroes and another having unimportant heroes. We will initialize these in OnInit. Also, we will have refresh button to add a hero in both the arrays. Hence a refresh function as well. So copy the following code in app.component.ts.
importantItems:string[];
  unImportantItems:string[];

  ngOnInit(){
    this.importantItems = ['Superman', 'Batman', 'Wonder Woman'];
    this.unImportantItems=['Arrow', 'Flash', 'Supergirl'];
  }

  refresh(){
    this.importantItems.push('Aquaman');
    this.unImportantItems.push('Batgirl');
  }

Now let us have two child components. One important one and another unimportant one.
ng g c important-child
ng g c unimportant-child
Both the child components are just used to show the contents of an input array. So both the component typescript files will just have an input array as follows:
@Input() item:string[];
Open up the html files for both the children component(important-child.component.html and unimportant-child.component.html) and place the following code for both:
<ul>
  <li *ngFor="let i of items">
    {{i}}
  </li>
</ul>
Both the components are just showing the contents of input arrays.
Now open up the parent app component view app.component.html and add the child view template tags and a refresh button.
<p>
  Important Heroes:
  <app-important-child [items]="importantItems"></app-important-child>
</p>
<p>
  Not so Important Heroes:
  <app-unimportant-child [items]="unImportantItems"></app-unimportant-child> 
</p>
<button (click)="refresh()">Refresh</button>

Run the App. You will see the list of important and unimportant heroes. 
 
Click on refresh and a hero will be added to both the lists.
 
But when is Change Detection Strategy used? We can use Change Detection Strategy when we have some components where we might not need to trigger change detection for change in input reference variables. We are going to do the same with the unimportant superhero component.
Open up unimportant-child.component.ts file and changeDetection in the component decorator.
@Component({
  selector: 'app-unimportant-child',
  templateUrl: './unimportant-child.component.html',
  styleUrls: ['./unimportant-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

Setting Change Detection to OnPush will prevent all input reference variable updates to trigger change detection.
Now Run the app and click on Refresh button.
 
As you can see we will find that the important child component gets the updates of reference variable through change detection but the unimportant one does not although the array is updated (you can check this by adding a console.log in the parent for unImportantItem array).
There might be places where you do not need to trigger change detection for every array or list reference updates. There you can use change detection and save a lot of resources. Because triggering change detection will cause the whole DOM tree to be parsed from child to parent for every child component. Hence here Angular will check for input reference updates for both cycles:
1.	Important-child DOM -> AppComponent DOM
2.	UnImportant-child DOM -> AppComponent DOM
Setting Change Detection Strategy to OnPush will prevent the 2nd cycle from taking place. One less cycle saves one resource and makes your UI run faster.
We are not yet done and we have barely scratched the surface. We just know the use case and the usability. 
To go in depth, try replacing the array with a primitive variable. Keep an importantValue and unImportantValue of number type (or any other primitive type like string, Boolean, etc). Use input for child components and alter the Change Detection Strategy to OnPush. Check the behaviour you get with this. 
We will continue this discussion of Change Detection Strategy in the next part of the series where we will go more in depth with this.
Thanks for reading.
I will be back with the part 3 from the kitchen soon. ;-)




