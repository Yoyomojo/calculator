export function removeWhiteSpace(num) {
    const str = num.toString().replace(/\s/g, '');
    return str;
}