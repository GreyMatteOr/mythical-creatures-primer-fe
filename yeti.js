class Yeti {
  constructor(name, home, weight){
    this.name = name;
    this.home = home;
    this.weight = weight;
    this.reindeer_eaten = ["Rudolph"]
  }

  run_away(name) {
    this.weight -= 10;
    console.log(`We'll have to outwit the ${name} with our superior intelligence.`)
  }

  move_to_secret_location(locations){
    this.home = this.home[2].split("").reverse().join("")
  }

  number_of_reindeer_eaten() {
    this.reindeer_eaten.length
  }

  isHungry() {
    if(this.weight > 300) {
      return false
    }
    else {
      return true
    }
  }

  bounce(){
    return "Boing Boing!"
  }
}

yeti = new Yeti("Bumble", "Colorado", 400)
yeti.number_of_reindeer_eaten()
yeti.isHungry()
yeti.bounce()
yeti.move_to_secret_location(["California", "Oregon"])
console.log(yeti.home);
yeti.run_away('Bumble')
