class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;

    console.log(this.getVolume());
  }

  getVolume() {
    let volume = Math.PI * (this.radius * this.radius) * this.height;
    return volume.toFixed(7);
  }
}

new Cylinder(3, 2);
