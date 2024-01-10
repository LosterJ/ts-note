let car: { type?: string, model?: string, year?: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}
car.model = "Oke";
console.log("🚀 ~ car:", car)
car = {};

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Kai = 12;
console.log("🚀 ~ nameAgeMap:", nameAgeMap);