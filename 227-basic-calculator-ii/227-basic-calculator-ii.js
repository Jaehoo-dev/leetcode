/**
 * @param {string} s
 * @return {number}
 */
const operators = new Set(['+', '-', '*', '/']);

function calculate(s) {
    const splitByOperators = s.split(/([-+*\/])/).map(it => it.trim());
    
    const postfix = convertToPostfix(splitByOperators);
    
    return calculatePostfix(postfix);
}

function convertToPostfix(infix) {
    const priorities = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1,
    };
    const result = [];
    const stack = [];
    
    infix.forEach(item => {
        if (!operators.has(item)) {
            result.push(item);
            
            return;
        }
        
        let top = stack[stack.length - 1];
        
        while (top && (priorities[top] >= priorities[item])) {
            result.push(stack.pop());
            
            top = stack[stack.length - 1];
        }
        
        stack.push(item);
    });
    
    while (stack.length) {
        result.push(stack.pop());
    }
    
    return result;
}

function calculatePostfix(postfix) {
    const stack = [];
    
    postfix.forEach(item => {
        if (!operators.has(item)) {
            stack.push(Number(item));
            
            return;
        }
        
        const result = operate(stack.pop(), stack.pop(), item);
        
        stack.push(result);
    });
    
    return stack[0];
    
    function operate(right, left, operator) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return Math.floor(left / right);
            default:
                throw new Error('Invalid operator');
        }
    }
}