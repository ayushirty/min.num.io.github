const minimumNumber =(...array) => {
    let minNum = array[0];
    for(let i =0; i < array.length ; i++ ){
        if(array[i] < minNum)
            minNum = array[i];
    }
    return minNum;
};

let minimum1 = minimumNumber(1,2,3,4);
console.log(minimum1);

let minimum2= minimumNumber(100,98,75,200);
console.log(minimum2);

let minimum3 = minimumNumber(500,455,666,965,-111);
console.log(minimum3);

let minimum4 = minimumNumber(0, 0, 1000,-0);
console.log(minimum4);