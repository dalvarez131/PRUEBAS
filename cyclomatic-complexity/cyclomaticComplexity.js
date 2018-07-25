function predictAge( age1 , age2 ){
    const agesGrandparentsArray = Array.from( arguments );
    const potencial = (agesGrandparentsArray) => Math.pow(agesGrandparentsArray,2);



    // const agesGrandparentsMultiplyitselfArray = agesGrandparentsArray.map ((parentAge) =>  parentAge * parentAge );
    // const ageGrandParentsSum = agesGrandparentsMultiplyitselfArray.reduce(function(accumulattor, nextValue){
    //   return accumulattor + nextValue;
    // }, 0);    
    // agesGrandparentsMultiplyitselfArray.forEach(age => console.log(age));
}
function accumulattor() {

}

predictAge(80,90);
