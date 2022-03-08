    export {}
type Product ={
    id:number;
    name:string;
}
const a: number = 20;
const b: number = 30;
const name:string | number="Nguyen xuan hiep"; // union
const age : number = 20;
const status :boolean = true;
const info : object = {}
const stringArr : string[] =["a","b","c"];
const numberArr:number[] = [1,2,3];
const objectArr: object[] = [{id:1},{id:2}]
function sum(numA : number, numB:number) : number{
    return numA + numB;
}
sum(a,b)
console.log(sum(a,b))
console.log(name)