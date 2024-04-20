let listA = [1, 2, 3, 5, 6, 8, 9];
let listB = [3, 2, 1, 5, 6, 0];

function findDuplicates(listA, listB) {
    
    let duplicates = [];

    for (let i = 0 ; i < listA.length; i++) {
      if(listB.includes(listA[i]) && !duplicates.includes(listA[i]))
        {
            duplicates.push(listA[i]);
        }
    }

    return duplicates;
}

let result = findDuplicates(listA, listB);
console.log("Duplicates:", result);