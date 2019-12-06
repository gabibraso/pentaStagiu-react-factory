Array.prototype.random = () =>{
  return this[Math.floor(Math.random() * this.length)];
}

class Factory{
  constructor(type){
    this.productType = type;
    this.quantity = 5;
    this.products = [];
  }

  startProduction(){

  }

  stopProduction(){

  }

  startBuildProcess(configs =[], props =[]){
    this.showCurrentProduction();

    const product = this.productType;

    for(let i =0; i< this.quantity; i++){
      const config = configs.random();
      const prop = props.random();
      this.products.push(new product(config, prop));
      console.log(`One ${this.productType.name} was produced`);
    }
    this.finishBuildProcess();
  }

  showCurrentProduction()
  {
    const product = this.productType;
    console.log(`Now the ${this.productType.name} product type is produced in ${this.quantity} quantities`)
  }

  finishBuildProcess(){
  console.log(`
  Production finished for ${this.productType.name}
  Total number of products is : ${this.products.length}
  List of ${this.productType.name}'s`);
  console.table(this.products);
  }
}

// Car object
class Car{
  constructor(color,engine){
  this.color = color;
  this.engine = engine;
  }
  startEngine(){
    console.log("vrum-vrum, the car it work's!");
  }
}

// Doll object
class Doll{
  constructor(hairColor,skin){
  this.hairColor = hairColor;
  this.skin = skin;
  }
  startTalking(){
    console.log("Hey there, i'm a barbie doll");
  }
}



const dollFactory = new Factory(Doll);
const carFactory = new Factory(Car);

dollFactory.startBuildProcess(
  ['red','yellow','brown'],
  ['white','black','green']
);

carFactory.startBuildProcess(
  ['red','blue','black'],
  ['v4','v6','v8']
);