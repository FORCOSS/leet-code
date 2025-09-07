function isPalindrome(x: number): boolean {
    let xToStr: string = String(x);
    let left: number = 0;

    for (let right = xToStr.length - 1; right > left; right--) {
        if (xToStr[left] === xToStr[right]) {
            left++;
        } else {
            return false;
        }
    }

    return true;
};

// Try to reverse number

/* IN JS

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;
};

 */