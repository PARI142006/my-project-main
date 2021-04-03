class Form {

  constructor() {
    this.input = createInput(" Enter Your Name Here");
    this.button = createButton('Start');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("MARATHON RACE 2021");
    
    this.title.position(220,100);

    this.input.position(220,270);
    this.button.position(220,350);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Get Ready For the Race..All The Best! " + player.name)
      this.greeting.position(80,250);
    });

  }
}
