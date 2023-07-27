//------------- Requiring the shape.js file -------------//
const {Triangle, Circle, Square} = require('./shapes');

//------------- Triangle Test -------------//
test('Triangle should be created with correct properties', () => {
const triangle = new Triangle(100, 50, 'blue');

expect(triangle.base).toBe(100);
expect(triangle.height).toBe(50);
expect(triangle.fillColor).toBe('blue');
});

test('Trianlge should generate a valid SVG', () => {
    const triangle = new Triangle(100, 50, 'blue');
    const svg = triangle.getSVG();

    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('width="100"');
    expect(svg).toContain('height="50"');
    expect(svg).toContain('fill="blue"');
});


//------------- Circle Test -------------//
test('Circle should be created with correct properties', () => {
    const circle = new Circle(60, 'red');
  
    expect(circle.radius).toBe(60);
    expect(circle.fillColor).toBe('red');
  });
  
  test('Circle should generate a valid SVG', () => {
    const circle = new Circle(60, 'red');
    const svg = circle.getSVG();
  
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('width="120"');
    expect(svg).toContain('height="120"');
    expect(svg).toContain('fill="red"');
  });


//------------- Square Test -------------//
  test('Square should be created with correct properties', () => {
    const square = new Square(75, 'green');
  
    expect(square.sideLength).toBe(75);
    expect(square.fillColor).toBe('green');
  });
  
  test('Square should generate a valid SVG', () => {
    const square = new Square(75, 'green');
    const svg = square.getSVG();
  
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('width="75"');
    expect(svg).toContain('height="75"');
    expect(svg).toContain('fill="green"');
  });