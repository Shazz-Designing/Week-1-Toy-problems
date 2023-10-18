function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
    if (demeritPoints >= 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
  
  const carSpeed = parseFloat(prompt("Enter car speed (in km/h):"));
  const result = speedDetector(carSpeed);
  console.log(result);
  