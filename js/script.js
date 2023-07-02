function switchDivs() {
  const div1 = document.getElementById('div1');
  const div2 = document.getElementById('div2');
  
  if (window.innerWidth <= 575) {
    // Checken van viewport

    const parent = div1.parentNode;
    parent.insertBefore(div2, div1);
  } else {
    // If the viewport width is greater than 575px, revert the original order
    const parent = div1.parentNode;
    parent.insertBefore(div1, div2);
  }
}

switchDivs();

//switchDivs function listener
window.addEventListener('resize', switchDivs);
