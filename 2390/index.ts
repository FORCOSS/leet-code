function removeStars(s: string): string {
    const stack = new Stack<string>();
    let newS: string = "";

    for (const char of s) {
        if (char === "*") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    while (stack.size() > 0) {
        newS += stack.pop();
    }

    return [...newS].reverse().join('');
};