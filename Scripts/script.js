/*
buttons format: [column][row][color, xPos, yPos]
*/
function mL(a){ //makeLevel with array

  //make buttons (according to a)
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a[0].length; j++){
      let b = $("<button></button>"); //button
      a[i][j].push(i);
      a[i][j].push(j);
      b.attr('class', a[i][j][0] + ' x' + (a[i][j][1] + 1) + ' y' + (a[i][j][2] + 1));
      b.click( () => {
        if(a[i][j][0] == 'w'){
          a[i][j][0] = 'b';
        }
        else{
          a[i][j][0] = 'w';
        }
        for(let k = 0; k < a.length; k++){
          for(let l = 0; l < a[0].length; l++){
            if(a[k][l][1] == a[i][j][1]){
              if(a[k][l][0] == 'w'){
                a[k][l][0] = 'b';
              }
              else{
                a[k][l][0] = 'w';
              }
            }
            if(a[k][l][2] == a[i][j][2]){
              if(a[k][l][0]== 'w'){
                a[k][l][0] = 'b';
              }
              else{
                a[k][l][0] = 'w';
              }
            }
            $('.x' + (a[k][l][1] + 1) + '.y' + (a[k][l][2] + 1)).attr('class', a[k][l][0] + ' x' + (a[k][l][1] + 1) + ' y' + (a[k][l][2] + 1));
          }
        }
      });
      a[i][j].push(b);
      $("body").append(b);
    }
  }
  let c = $("<button></button>"); //checker
  c.attr('id', 'check')
  $("body").append("<button> Check </button>");
  oA = a; //originalArray TODO add reset button
}
mL(
  [
    [['b'], ['w'], ['w']],
    [['w'], ['b'], ['w']],
    [['w'], ['w'], ['b']]
  ]
);

mL(
  [
    [['w'], ['w'], ['w'], ['w']],
    [['w'], ['w'], ['w'], ['w']],
    [['b'], ['b'], ['b'], ['b']],
    [['b'], ['b'], ['b'], ['b']]
  ]
)



//TODO make win condition (somewhere)
/* let won = true
for(let k = 0; k < a.length; k++){
  for(let l = 0; l < a[0].length; l++){
    if(a[k][l][0] == 'w'){
      won = false;
    }
  }
} */
