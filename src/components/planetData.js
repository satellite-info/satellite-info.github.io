const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
    `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

const planetData = [];
const totalPlanets = 6;
for (let index = 0; index < totalPlanets; index++) {
    planetData.push({
        id: index,
        color: randomColor(),
        xRadius: (index + 0.3) * 3,
        zRadius: (index + 0.3) * 1.5,
        size: random(0.1, 0.4)
    });
}

export default planetData;
