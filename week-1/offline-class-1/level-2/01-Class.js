
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


let dog=new Animal("dogie",4); //create object
console.log(dog.describe()); //call function on object