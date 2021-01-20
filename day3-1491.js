var average = function(salary) {
    salary = salary.sort((a,b)=>a-b);
    let indexes= [0, salary.length-1]
    salary = salary.filter((value, index)=>indexes.indexOf(index) == -1);
    let averageValue = salary.reduce((a,b)=>a+b)/salary.length;
};
average([4000,3000,1000,2000])