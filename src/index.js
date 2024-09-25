function decode(expr) {
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let part = expr.slice(i, i + 10);
        
        if (part === "**********") {
            result += ' ';
        } else {
            let symbol = '';
            for (let k = 0; k < part.length; k += 2) {
                let part2 = part.slice(k, k + 2);
                
                if (part2 === '10') {
                    symbol += '.';
                } else if (part2 === '11') {
                    symbol += '-';
                }
            }
            result += MORSE_TABLE[symbol];
        }
    }

    return result;
}
