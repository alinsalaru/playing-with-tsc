function addAge(anAge : Number) {
    return function(targetClass) {
        return class {
            name= new targetClass().name;
            age= anAge;
        }
    }
}

@addAge(20)
class Person {
    name = "Bob"
}

console.log(new Person());