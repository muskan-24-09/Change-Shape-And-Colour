// Script.js

document.addEventListener('DOMContentLoaded', () => {
    const shapeElement = document.getElementById('shape');
    const colorBtn = document.getElementById('colorBtn');
    const shapeBtn = document.getElementById('shapeBtn');

    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime'];
    const shapes = ['square', 'circle', 'rectangle', 'triangle', 'diamond'];

    colorBtn.addEventListener('click', () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        shapeElement.style.backgroundColor = newColor;
    });

    shapeBtn.addEventListener('click', () => {
        const newShape = shapes[Math.floor(Math.random() * shapes.length)];
        changeShape(newShape);
    });

    function changeShape(shape) {
        shapeElement.style.width = '100px';
        shapeElement.style.height = '100px';
        shapeElement.style.borderRadius = '0';
        shapeElement.style.transform = 'rotate(0deg)';

        if (shape === 'circle') {
            shapeElement.style.borderRadius = '50%';
        } else if (shape === 'rectangle') {
            shapeElement.style.width = '150px';
        } else if (shape === 'triangle') {
            shapeElement.style.width = '0';
            shapeElement.style.height = '0';
            shapeElement.style.borderLeft = '50px solid transparent';
            shapeElement.style.borderRight = '50px solid transparent';
            shapeElement.style.borderBottom = '100px solid ' + shapeElement.style.backgroundColor;
        } else if (shape === 'diamond') {
            shapeElement.style.transform = 'rotate(45deg)';
        }
    }
});
