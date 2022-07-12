
// All numbers besiedes last are in ascending order. 
// Place the last number in correct position;

const sequence = [3,5,8,12,17,24,31,6];

const insertIntoSortedArray = (sequence) => {
    let key = sequence[sequence.length - 1];
    for(let i = sequence.length - 2; i >= 0; i--) {
        if(sequence[i] > key) {
            sequence[i + 1] = sequence[i];
        } else {
            sequence[i + 1] = key;
            return sequence;
        }
    }
    sequence[0] = key;
    return sequence;
}

console.log(insertIntoSortedArray(sequence));

