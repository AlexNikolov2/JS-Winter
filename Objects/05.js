class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;

    let volume = Math.PI * (this.radius * this.radius) * this.height;
    console.log(volume.toFixed(7));
  }
}

new Cylinder(3, 2);
