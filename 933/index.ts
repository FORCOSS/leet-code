class RecentCounter {
    times: number[];

    constructor() {
        this.times = [];
    }

    ping(t: number): number {
        this.times.push(t);
        while (this.times[0] < t - 3000) {
            this.times.shift();
        }
        return this.times.length;
    }       
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */