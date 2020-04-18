function boxBlur(image) {
  let returnBox= [];
  //initialize coordinates of first central point of pixel
  let x = 1;
  let y = 1;
  
  while(x+1 <= image.length-1){//this refers to the start index as it moves through whole matrix
  let newRow = makeRow(image,x,y);
  returnBox.push(newRow);
  x++; 
  }
  
  return returnBox;
      }

  //////HELPER FUNCTIONS:
  function makeRow(image,x,y){
    let row = [];
    while(y+1 <= image[0].length-1){//move along the length of a row
    //then we need to repass the focus
      let newFocus = constructFocus(image,x,y);
      let pixel= sumBlock(newFocus);
      row.push(pixel);//push rows until you get to end of element
      y++;
      } 
      return row;
    }
  
   function constructFocus(image,x,y){//this is how we are grabbing the grid
        let r1 = x-1;
        let r2 = x;
        let r3 = x+1;
        let c1= y-1;
        let c2=y;
        let c3 = y+1;  

        var imageInternal = [];

            let innerOne = [];
            innerOne.push(image[r1][c1])
            innerOne.push(image[r1][c2])
            innerOne.push(image[r1][c3])
            imageInternal.push(innerOne);
            
            let innerTwo = [];
            innerTwo.push(image[r2][c1])
            innerTwo.push(image[r2][c2])
            innerTwo.push(image[r2][c3])
            imageInternal.push(innerTwo);
    
            let innerThree = [];
            innerThree.push(image[r3][c1])
            innerThree.push(image[r3][c2])
            innerThree.push(image[r3][c3])
           
            imageInternal.push(innerThree);
            return imageInternal;
    
          }

          function sumBlock(frame){
            let rowOne = frame[0].reduce((total, num)=>{return total + num});
            let rowTwo = frame[1].reduce((total,num)=>{return total + num});
            let rowThree = frame[2].reduce((total,num)=>{return total+num});
            
            let sumVal = rowOne+rowTwo+rowThree;//Sum of all three row integers in grid
            let numberofPixels = 9; //9 elements in one sum Block!
            
            return Math.floor(sumVal/numberofPixels);
          }
      

