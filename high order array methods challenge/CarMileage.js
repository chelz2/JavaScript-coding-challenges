function analyzeCarMileage(cars) {
  //
  const totalMileage = cars.reduce((total, car) => total + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage).toFixed(2),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020, mileage: 25000 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
  { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
];

const carAnalyzed = analyzeCarMileage(cars);

console.log(carAnalyzed);
