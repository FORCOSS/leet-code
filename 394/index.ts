function decodeString(s: string): string {
    let stack: string[] = [];

    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let curS = '';
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                curS = stack.pop() + curS;
            }

            stack.pop();

            let numS = '';
            while (stack.length > 0 && stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9') {
                numS = stack.pop() + numS;
            }
            
            const repS = curS.repeat(Number(numS));

            for (const c of repS) {
                stack.push(c);
            }
        }
    }

    return stack.join('');
};

// Better solution will be with recursion