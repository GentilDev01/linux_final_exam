function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the button element  
const toggleButton = document.getElementById('toggle');  

// Add event listener to the button for click events  
toggleButton.addEventListener('click', () => {  
    // Toggle the 'dark-mode' class on the body  
    document.body.classList.toggle('dark-mode');  

    // Change button text based on mode  
    if (document.body.classList.contains('dark-mode')) {  
        toggleButton.textContent = 'Switch to Light Mode';  
    } else {  
        toggleButton.textContent = 'Switch to Dark Mode';  
    }  
});
// Check for saved preference and apply it  
if (localStorage.getItem('dark-mode') === 'enabled') {  
  document.body.classList.add('dark-mode');  
  toggleButton.textContent = 'Switch to Light Mode';  
}  

// Add event listener to the button for click events  
toggleButton.addEventListener('click', () => {  
  document.body.classList.toggle('dark-mode');  

  // Save the user's preference  
  if (document.body.classList.contains('dark-mode')) {  
      localStorage.setItem('dark-mode', 'enabled');  
      toggleButton.textContent = 'Switch to Light Mode';  
  } else {  
      localStorage.setItem('dark-mode', 'disabled');  
      toggleButton.textContent = 'Switch to Dark Mode';  
  }  
});
// Check for saved preference and apply it  
if (localStorage.getItem('dark-mode') === 'enabled') {  
  document.body.classList.add('dark-mode');  
  toggleButton.textContent = 'Switch to Light Mode';  
}  

// Add event listener to the button for click events  
toggleButton.addEventListener('click', () => {  
  document.body.classList.toggle('dark-mode');  

  // Save the user's preference  
  if (document.body.classList.contains('dark-mode')) {  
      localStorage.setItem('dark-mode', 'enabled');  
      toggleButton.textContent = 'Switch to Light Mode';  
  } else {  
      localStorage.setItem('dark-mode', 'disabled');  
      toggleButton.textContent = 'Switch to Dark Mode';  
  }  
});