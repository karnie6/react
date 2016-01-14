var person = {
    name: "Jack",
    age: 23, 
    speakName: function(aName) {
        return "Hello, " + aName;
    }
};


console.log(person.speakName("Harry"));

var Vehicle = function(make, color, premium) {
    var self = this;
    this.odometer = 0;
    this.engine = "V6";
    
    this.make = make;
    this.color = color;
    
    if (premium == true) {
        this.engine = "V8";
        this.color = "Platinum";
    }
    
    this.addTrip = function(newMiles) {
        self.odometer += newMiles;
    }
};

var benz = new Vehicle("Mercedez", "white", true);
benz.addTrip(50);
console.log(benz.color);
console.log(benz.odometer);
