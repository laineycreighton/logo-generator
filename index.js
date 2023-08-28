const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3 || 'Please enter up to three characters only.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      default: 'Black', 
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      default: 'Blue', 
    },
  ])
  .then((answers) => {
    // The user's responses are stored in the 'answers' object
    const { text, textColor, shape, shapeColor } = answers;

    // Generate the SVG logo based on user choices and save it to a file
    const svgLogo = generateSVGLogo(text, textColor, shape, shapeColor);
    saveSVGLogo(svgLogo);

    // Print the output message in the command line
    console.log('Generated your logo!');
  })
  .catch((error) => console.error('Error occurred:', error));



function generateSVGLogo(text, textColor, shape, shapeColor) {
  let shapeSVG;
  let textX, textY;

  switch (shape) {
    case 'Circle':
      const circle = new Circle(100, shapeColor);
      shapeSVG = generateCircleSVG(100, shapeColor);
      textX = 100; // Center the text horizontally within the circle
      textY = 100; // Center the text vertically within the circle
      break;
    case 'Triangle':
      const triangle = new Triangle(300, 300, shapeColor);
      shapeSVG = generateTriangleSVG(300, 300, shapeColor);
      textX = 150; // Center the text horizontally within the triangle
      textY = 150; // Center the text vertically within the triangle
      break;
    case 'Square':
      const square = new Square(200, shapeColor);
      shapeSVG = generateSquareSVG(200, shapeColor);
      textX = 100; // Center the text horizontally within the square
      textY = 100; // Center the text vertically within the square
      break;
    default:
      throw new Error('Invalid shape selection');
  }

  // Create the full SVG logo by combining the shape and text elements
  const fullSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="${textX}" y="${textY}" font-size="40" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>
  `;

  return fullSVG;
}

function generateCircleSVG(radius, color) {
  return `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;
}

function generateTriangleSVG(base, height, color) {
  const points = `0,${height} ${base / 2},0 ${base},${height}`;
  return `<polygon points="${points}" fill="${color}" />`;
}

function generateSquareSVG(size, color) {
  return `<rect width="${size}" height="${size}" fill="${color}" />`;
}

function saveSVGLogo(svgLogo) {
  fs.writeFile('./examples/logo.svg', svgLogo, (err) => {
    if (err) throw err;
  });
}