const a1 = document.getElementById('txtSideA');
const a2 = document.getElementById('txtSideB');
const a3 = document.getElementById('txtSideC');
const triangle = document.getElementById('triangle');

a1.addEventListener('focus', () => {
  triangle.style.borderBottomColor = 'red'; 
  triangle.style.borderLeftColor = 'transparent';
  triangle.style.borderRightColor = 'transparent';
});

a2.addEventListener('focus', () => {
  triangle.style.borderLeftColor = 'red';
  triangle.style.borderBottomColor = 'transparent';
  triangle.style.borderRightColor = 'transparent';
});

a3.addEventListener('focus', () => {
  triangle.style.borderRightColor = 'red';
  triangle.style.borderBottomColor = 'transparent';
  triangle.style.borderLeftColor = 'transparent';
});