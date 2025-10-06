function largestAltitude(gain: number[]): number {
    let maxAltitude: number = 0;
    let currentSum: number = 0;
    for (let i = 0; i < gain.length; i++) {
        currentSum += gain[i];
        maxAltitude = Math.max(maxAltitude, currentSum);
    }

    return maxAltitude;
};