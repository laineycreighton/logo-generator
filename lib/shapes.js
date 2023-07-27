class Triangle {
    constructor(base, height, fillColor) {
        this.base = base;
        this.height = height;
        this.fillColor = fillColor;
    }

    getSVG() {
        return `
        <svg width="${this.base}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,${this.height} ${this.base / 2},0 ${this.base},${this.height}" fill="${this.fillColor}" />
        </svg>
      `;
    }
}

module.exports = {Triangle};

class Circle {
    constructor(radius, fillColor) {
        this.radius = radius;
        this.fillColor = fillColor;
    }

    getSVG() {
        return  `
        <svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.fillColor}" />
        </svg>
      `;
    }
}

module.exports = {Triangle, Circle};

class Square {
    constructor(sideLength, fillColor) {
        this.sideLength = sideLength;
        this.fillColor = fillColor;
    }

    getSVG() {
        return  `
        <svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.fillColor}" />
      </svg>
    `;
    }
}