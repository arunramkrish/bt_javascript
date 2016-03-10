Function.prototype.mybind = function(){ 
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift(); 
  return function(){ 
    return fn.apply(object, 
      args.concat(Array.prototype.slice.call(arguments))); 
  }; 
};

var name = "i am a window";

function display() {
    console.log("inside display " + this.name);
    
    for (arg in arguments) {
        console.log(arguments[arg]);
    }
}

var training = {name : "Adv Javasript"};

var resultingFunction = display.mybind(training, 1,2,3);

resultingFunction("while invoking", 4, 5);

function checkMandatory() {
    if (this.value == "") {
        this.value = "Please enter a value for this field";
    }
}