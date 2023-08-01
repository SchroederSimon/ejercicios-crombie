function solution(a) {
  const people = [];
  const trees = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      trees.push(a[i]);
    } else {
      people.push(a[i]);
    }
  }
//   console.log("people before sort:", people);
//   console.log("trees before sort:", trees);
  people.sort((a, b) => a - b);
//   console.log("people after sort:", people);

  const result = [];
  let personIndex = 0;
  let treeIndex = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      result.push(trees[treeIndex]);
      treeIndex++;
    } else {
      result.push(people[personIndex]);
      personIndex++;
    }
  }

//   console.log("person index:", personIndex);
//   console.log("tree index:", treeIndex);
//   console.log("result:", result);

  return result;
}

//juani
function solution2(a) {
    let people2 = a.filter(e => e > 0).sort(( a, b )=> a - b);
    a.forEach((element, index) => {
        if(element < 0) {people2.splice(index , 0, element)};
    })
    return people2;
}
//giuliano
function solution(array) {
    const aOriginal=[...array]
    const aOrder=aOriginal.filter(item=>item!==-1).sort((a,b)=>a-b)
    
    return aOriginal.map((item,index)=>{
        if(item!==-1){
            return aOrder.shift()
        }else{
            return -1
        }
    })
    
}