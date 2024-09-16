
class Room {
    constructor (name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
    }
//you can override this.available if need be 
    getArea(){
        console.log(`Area is:  ${this.length * this.width} ${this.available}`)
    }

    getPerimeter(){
        console.log(`Perimeter is : ${(this.length + this.width) * (this.length + this.width)} ${this.available}`)
    }

}

const room1 = new Room('Sun', 30, 20, true);
const room2 = new Room('Green', 15, 20, false);

room1.getArea();
room1.getPerimeter();

room2.getArea();
room2.getPerimeter();












