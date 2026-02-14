// Math helper for dust particle calculations
export const degToRad = (degrees) => degrees * (Math.PI / 180);

export const calculateDustPosition = (angleDeg, distance) => {
  const angleRad = degToRad(angleDeg);
  return {
    x: Math.cos(angleRad) * distance,
    y: Math.sin(angleRad) * distance
  };
};