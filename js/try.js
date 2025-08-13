const calc = {
    taxRate: 0.2,
    calcFN: function (salary) {
        return salary * this.taxRate
    },
    calcSalary(salaryList) {
        return salaryList.map(this.calcFN)
    }
};
console.log(calc.calcSalary([0]));
console.log(calc.calcSalary([100]));
console.log(calc.calcSalary([100, 200]));