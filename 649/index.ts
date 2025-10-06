function predictPartyVictory(senate: string): string {
    const radiant = new Queue<number>();
    const dire = new Queue<number>();

    for (const [index, value] of senate.split('').entries()) {
        if (value === 'R') radiant.enqueue(index)
        else dire.enqueue(index)
    }

    while (radiant.size() > 0 && dire.size() > 0) {
        let radiant_index = radiant.dequeue();
        let dire_index = dire.dequeue();

        if (radiant_index < dire_index) {
            radiant.enqueue(radiant_index + senate.length);
        } else {
            dire.enqueue(dire_index + senate.length);
        }
    }

    return radiant.size() > 0 ? "Radiant" : "Dire";
};