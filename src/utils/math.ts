export const add = (n1: number, n2: number) => {
    return n1 + n2;
}

export const subtract = (n1: number, n2: number) => {
    return n1 - n2;
}


export const multiply = (n1: number, n2: number) => {
    return n1 * n2;
}

export const divide = (n1: number, n2: number) => {
    if (n2 === 0) throw new Error('Division By Zero');
    return n1 / n2;
}