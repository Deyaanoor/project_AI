let array=[];
var arr=[];
let result =[];
let myArray=[];
let y;
let flagSearch=false;
 let stringRepresentation="";
let flag =true
function removeDuplicateNumbers(array) {
    // Create a Set to store unique values
    const uniqueNumbers = new Set();

    // Function to get sorted string representation of a number
    function getSortedString(num) {
        return num.toString().split('').sort().join('');
    }

    // Filter the array to keep only unique numbers
    const resultArray = array.filter((num) => {
        const sortedString = getSortedString(num);

        // Check if the sorted string is already in the set
        if (uniqueNumbers.has(sortedString)) {
            return false; // Duplicate, exclude from the result
        }

        // Add the sorted string to the set and include the number in the result
        uniqueNumbers.add(sortedString);
        return true;
    });

    return resultArray;
}
function con(j){
  for(let k=0;k<ip.length;k++){
    
     if(ip.length>1){
     if(j==k){
         continue;
     }
     array=arr;
     
    array.push(ip[k]);
     }
     else{
         array.push(arr);
     }
  
  }
  stringRepresentation = array.toString();
    
    array = stringRepresentation.split(',').join('');
      myArray.push(array);
      arr=[];
      array=[];
    
  
  
}
function divnum(ip){
    arr=[];
    myArray=[];
    
for(let j=0;j<ip.length;j++){
  arr=[];
    
  let x=ip[j]*10;
  let y=3;
  if(ip[j]===1){
    continue;

  }
  while( y!=0){
     x-=9;
     let ss = x.toString();
      
        let result = ss.split(',').join('');
      
         y=result[0]-result[1];
    if(y===1) {
         arr.push(x);
         con(j);

        
         break;
    }
    else if(y==0){
      break;
    }
    
    arr.push(x);
    con(j);
    
  }
}
 myArray = removeDuplicateNumbers(myArray);
 
}
function Search(z){
flagSearch=false;
 stringRepresentation = array.toString();
 array = stringRepresentation.split('').join(',');
for(let i=0;i<myArray.length;i++){
   if(z==myArray[i]){
        let u = z.toString().split('').map(Number);
        ip=u;
        
        flagSearch=true
      //  break;
       return flagSearch ;
       //ip=myArray[i];
   } 
   else{
       continue;
   }
}
}
/*
let ip=[3,1,3];
divnum(ip);
console.log("myArray1",myArray);
Search('2113');
console.log("flag",flagSearch);debugger
divnum(ip);
console.log("myArray2",myArray);
*/