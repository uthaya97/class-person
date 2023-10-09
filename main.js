class Person{
    constructor(number,name,age,country){
      this.name=name;
      this.age=age;
      this.country=country;
      this.number=number;
    }
  
    details(){
      document.write(`Person ${this.number} details <br>Name : ${this.name} <br> Age:${this.age}<br>Country:${this.country}<br><br>`)
    }
  }
  
  let person1=new Person(prompt("Enter the number"),prompt("Enter your name"),prompt("Enter your age"),prompt("Enter your country"));
  let person2=new Person(prompt("Enter the number"),prompt("Enter your name"),prompt("Enter your age"),prompt("Enter your country"))
  
  person1.details()
  person2.details()