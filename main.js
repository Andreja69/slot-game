let lines = [
    [0,0,0,0,0],
    [1,1,1,1,1],
    [2,2,2,2,2],

    [0,1,2,1,0],
    [2,1,0,1,2],



];

$("button").on("click",  fillColumns);

 function fillColumns(){
     $(".col").each(function(i,col){
         let text = `<div class="holder holder-${i+1}">`;
         for (let j = 0; j < 20; j++) {
             console.log(icons.length);
             let rand = Math.floor(Math.random() *41);
             text += `<div class="box"><img src="icons/${icons[rand]}" alt=""></div>`;
         }
         text += "</div>";
         // console.log(text);
         $(col).prepend(text);
     })
     spin();
 }

 function spin(){
    let spinTime =3000;
     $(".holder").each(function(i,holder){
         spinTime +=200;
         $(holder).animate({
             top: "+=4000px"
         },spinTime, function(){
             // if($(`.col${i+1}`).find(".holder").length === 2){
             //     $(`.col${i+1}`).find(".holder").last().remove();
             // }

         })
     })
     $(".holder").promise().done(function(){
         checkWinner();
         $(".col").each(function(i,col){
             if($(col).find(".holder").length === 2){
                 $(col).find(".holder").last().remove();
             }
         })

     })
 }

 function checkWinner(){
     let matrix = [];
     $(".holder").each(function(i,holder){
         let treeIcons =[$(holder).find(".box").eq(0),$(holder).find(".box").eq(1),$(holder).find(".box").eq(2)];
         matrix.push(treeIcons);
         // treeIcons.forEach(icon=>{
         //     icon.css("background","red");
         // })
     })
     // console.log(matrix);
     // // let sorc ="";
     // // let pomoc = "";
     matrix.forEach((row,i)=>{
         row.forEach((col,j)=>{
             if(j ===0){
                 // sorc = matrix[i][0].find("img").attr("src");
                 // if(sorc === pomoc){
                 //     console.log("alal vera");
                 // }
                 // pomoc = sorc;

                 col.css("background","red");
             }
         })
     })


 }


