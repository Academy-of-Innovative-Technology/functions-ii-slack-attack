
// Basic Operations
document.addEventListener('DOMContentLoaded', function() {
  // Basic Operations
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const basicResult = document.getElementById('basicResult');

  const buttons = document.querySelectorAll('.card-body .btn');
  buttons[0].addEventListener('click', () => calculate('add'));
  buttons[1].addEventListener('click', () => calculate('subtract'));
  buttons[2].addEventListener('click', () => calculate('multiply'));
  buttons[3].addEventListener('click', () => calculate('divide'));
  buttons[4].addEventListener('click', () => calculate('modulus'));

  function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      basicResult.textContent = 'Please enter valid numbers';
      return;
    }

    switch(operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      case 'modulus':
        result = num2 !== 0 ? num1 % num2 : 'Cannot modulus by zero';
        break;
    }

    basicResult.textContent = `Result: ${result}`;
  }

  // Area of Rectangle
  document.querySelectorAll('.btn-outline-primary')[0].addEventListener('click', function() {
    const length = parseFloat(document.getElementById('rectLength').value);
    const width = parseFloat(document.getElementById('rectWidth').value);
    if (!isNaN(length) && !isNaN(width)) {
      document.getElementById('rectResult').textContent = `Area: ${length * width}`;
    } else {
      document.getElementById('rectResult').textContent = 'Please enter valid numbers';
    }
  });

  // Circle Area
  document.querySelectorAll('.btn-outline-primary')[1].addEventListener('click', function() {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    if (!isNaN(radius)) {
      document.getElementById('circleResult').textContent = `Area: ${Math.PI * radius * radius}`;
    } else {
      document.getElementById('circleResult').textContent = 'Please enter valid number';
    }
  });

  // Pythagorean Theorem
  document.querySelectorAll('.btn-outline-primary')[2].addEventListener('click', function() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    if (!isNaN(a) && !isNaN(b)) {
      document.getElementById('pythagoreanResult').textContent = `Hypotenuse: ${Math.sqrt(a * a + b * b)}`;
    } else {
      document.getElementById('pythagoreanResult').textContent = 'Please enter valid numbers';
    }
  });

  // Simple Interest
  document.querySelectorAll('.btn-outline-primary')[3].addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
      document.getElementById('interestResult').textContent = `Interest: ${(principal * rate * time) / 100}`;
    } else {
      document.getElementById('interestResult').textContent = 'Please enter valid numbers';
    }
  });

  // Power
  document.querySelectorAll('.btn-outline-primary')[4].addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    if (!isNaN(base) && !isNaN(exponent)) {
      document.getElementById('powerResult').textContent = `Result: ${Math.pow(base, exponent)}`;
    } else {
      document.getElementById('powerResult').textContent = 'Please enter valid numbers';
    }
  });

  // Perimeter of Rectangle
  document.querySelectorAll('.btn-outline-primary')[5].addEventListener('click', function() {
    const length = parseFloat(document.getElementById('periLength').value);
    const width = parseFloat(document.getElementById('periWidth').value);
    if (!isNaN(length) && !isNaN(width)) {
      document.getElementById('perimeterResult').textContent = `Perimeter: ${2 * (length + width)}`;
    } else {
      document.getElementById('perimeterResult').textContent = 'Please enter valid numbers';
    }
  });

  // Circumference of Circle
  document.querySelectorAll('.btn-outline-primary')[6].addEventListener('click', function() {
    const radius = parseFloat(document.getElementById('circRadius').value);
    if (!isNaN(radius)) {
      document.getElementById('circumferenceResult').textContent = `Circumference: ${2 * Math.PI * radius}`;
    } else {
      document.getElementById('circumferenceResult').textContent = 'Please enter valid number';
    }
  });

  // Triangle Area
  document.querySelectorAll('.btn-outline-primary')[7].addEventListener('click', function() {
    const base = parseFloat(document.getElementById('triangleBase').value);
    const height = parseFloat(document.getElementById('triangleHeight').value);
    if (!isNaN(base) && !isNaN(height)) {
      document.getElementById('triangleAreaResult').textContent = `Area: ${0.5 * base * height}`;
    } else {
      document.getElementById('triangleAreaResult').textContent = 'Please enter valid numbers';
    }
  });

  // Volume of Cube
  document.querySelectorAll('.btn-outline-primary')[8].addEventListener('click', function() {
    const side = parseFloat(document.getElementById('cubeSide').value);
    if (!isNaN(side)) {
      document.getElementById('cubeVolumeResult').textContent = `Volume: ${side * side * side}`;
    } else {
      document.getElementById('cubeVolumeResult').textContent = 'Please enter valid number';
    }
  });

  // Volume of Prism
  document.querySelectorAll('.btn-outline-primary')[9].addEventListener('click', function() {
    const length = parseFloat(document.getElementById('prismLength').value);
    const width = parseFloat(document.getElementById('prismWidth').value);
    const height = parseFloat(document.getElementById('prismHeight').value);
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
      document.getElementById('prismVolumeResult').textContent = `Volume: ${length * width * height}`;
    } else {
      document.getElementById('prismVolumeResult').textContent = 'Please enter valid numbers';
    }
  });

  // Volume of Cylinder
  document.querySelectorAll('.btn-outline-primary')[10].addEventListener('click', function() {
    const radius = parseFloat(document.getElementById('cylRadius').value);
    const height = parseFloat(document.getElementById('cylHeight').value);
    if (!isNaN(radius) && !isNaN(height)) {
      document.getElementById('cylinderVolumeResult').textContent = `Volume: ${Math.PI * radius * radius * height}`;
    } else {
      document.getElementById('cylinderVolumeResult').textContent = 'Please enter valid numbers';
    }
  });

  // Speed
  document.querySelectorAll('.btn-outline-primary')[11].addEventListener('click', function() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    if (!isNaN(distance) && !isNaN(time) && time !== 0) {
      document.getElementById('speedResult').textContent = `Speed: ${distance / time}`;
    } else {
      document.getElementById('speedResult').textContent = 'Please enter valid numbers (time cannot be 0)';
    }
  });

  // Density
  document.querySelectorAll('.btn-outline-primary')[12].addEventListener('click', function() {
    const mass = parseFloat(document.getElementById('mass').value);
    const volume = parseFloat(document.getElementById('volume').value);
    if (!isNaN(mass) && !isNaN(volume) && volume !== 0) {
      document.getElementById('densityResult').textContent = `Density: ${mass / volume}`;
    } else {
      document.getElementById('densityResult').textContent = 'Please enter valid numbers (volume cannot be 0)';
    }
  });

  // BMI
  document.querySelectorAll('.btn-outline-primary')[13].addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!isNaN(weight) && !isNaN(height) && height !== 0) {
      document.getElementById('bmiResult').textContent = `BMI: ${weight / (height * height)}`;
    } else {
      document.getElementById('bmiResult').textContent = 'Please enter valid numbers (height cannot be 0)';
    }
  });

  // Discriminant
  document.querySelectorAll('.btn-outline-primary')[14].addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      document.getElementById('discriminantResult').textContent = `Discriminant: ${b * b - 4 * a * c}`;
    } else {
      document.getElementById('discriminantResult').textContent = 'Please enter valid numbers';
    }
  });
});
