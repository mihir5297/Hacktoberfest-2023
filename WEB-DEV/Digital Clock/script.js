function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;
  
    const timeString = `${hours12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    
    document.getElementById('clock').innerText = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the clock immediately
  updateClock();
  