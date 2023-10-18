class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4);
    }
  }
  
  const myCylinder = new Cylinder(3, 5); // Example with radius 3 and height 5
  const volume = myCylinder.getVolume();
  console.log(`Volume of the cylinder: ${volume}`);
  