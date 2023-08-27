// מחלקת צורה

class Shape {
  info(): string {
    return "This is a Shape";
  }

  draw() {
    console.log("drawing a shape");
  }
}

// מחלקת המלבן

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  area(): number {
    return this.height * this.width;
  }

  info(): string {
    return "This is a Rectangle";
  }

  draw() {
    console.log("drawing a Rectangle");
  }

  scale(change: number): Rectangle {
    this.height *= change;
    this.width *= change;
    return this;
  }

  static combineAreas(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
    const combinedWidth = rectangle1.width + rectangle2.width;
    const combinedHeight = rectangle1.height + rectangle2.height;
    return new Rectangle(combinedWidth, combinedHeight);
  }
}

const newRectangle1 = new Rectangle(100, 20);
const newRectangle2 = new Rectangle(50, 20);

const scaleArea = newRectangle1.scale(1.5).area();

console.log(scaleArea);

// מחלקת ריבוע

class Square extends Rectangle {
  LengthOfRib: number;

  constructor(LengthOfRib: number) {
    super(LengthOfRib, LengthOfRib);
    this.LengthOfRib = LengthOfRib;
  }

  draw() {
    console.log("drawing a Square");
  }
}

const AreaOfSquare = new Square(10);
const AreaSquare = AreaOfSquare.area();
console.log(AreaSquare);

class Circle extends Shape {
  draw() {
    console.log("drawing a Circle");
  }
}

// מחלקת צבע המלבן
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(height: number, width: number, color: string) {
    super(height, width);
    this.color = color;
  }

  info(): string {
    return "This is a colored rectangle " + this.color;
  }
}

const myColoredRectangle = new ColoredRectangle(4, 10, "red");
const ColorString = myColoredRectangle.info();
const Area = myColoredRectangle.area();
console.log(Area, ColorString);

function renderShapes(shapes: Shape[]): void {
  for (const shape of shapes) {
    shape.draw();
  }
}

const shapeOfRectangle = new Rectangle(1, 5);
const shapeOSquare = new Square(4);
const shapeOfCircle = new Circle();
const shape = new Shape();

const array: Shape[] = [shapeOfRectangle, shapeOSquare, shapeOfCircle, shape];

renderShapes(array);
