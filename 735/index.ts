function asteroidCollision(asteroids: number[]): number[] {
    let resultAsteroids: number[] = [asteroids[0]];
    asteroids.shift();

    while (asteroids.length !== 0) {
        if (resultAsteroids[resultAsteroids.length - 1] > 0) {
            let asteroid = resultAsteroids.pop();
            if (asteroids[0] < 0 && Math.abs(asteroids[0]) !== asteroid) {
                resultAsteroids.push(Math.max(asteroid, asteroids[0]));
                asteroids.shift();
            } else if (Math.abs(asteroids[0]) === asteroid) {
                asteroids.shift();
            } else {
                resultAsteroids.push(asteroid);
                resultAsteroids.push(asteroids[0]);
                asteroids.shift();
            }
        } else {
            let asteroid = resultAsteroids.pop();
            if (asteroids[0] > 0 && Math.abs(asteroids[0]) !== asteroid) {
                resultAsteroids.push(Math.max(asteroid, Math.abs(asteroids[0])));
                asteroids.shift();
            } else if (Math.abs(asteroids[0]) === asteroid) {
                asteroids.shift();
            } else {
                resultAsteroids.push(asteroid);
                resultAsteroids.push(asteroids[0]);
                asteroids.shift();
            }
        }
    }

    return resultAsteroids;
};

console.log(asteroidCollision([10,2,-5]))