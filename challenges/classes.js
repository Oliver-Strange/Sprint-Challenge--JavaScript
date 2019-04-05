// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubeMaker{
    constructor(cubeElements){
    this.length = cubeElements.length;
    this.width = cubeElements.width;
    this.height = cubeElements.height;
  }
  volume2() {
    return this.length * this.width * this.height;
  }
  surfaceArea2() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
}

const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume2()); // 100
console.log(cube.surfaceArea2()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.