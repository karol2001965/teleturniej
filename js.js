$(function(){
    $answer=$(".answer_container")
    $right_side=$(".right_side")
    $right_side_all=$(".right_side_all")
    $left_side_bottom_question=$(".left_side_bottom_question")
    $A=$(".A")
    $B=$(".B")
    $C=$(".C")
    $D=$(".D")
    var counter=0

    var progi=["5zł","10zł","20zł","20zł","20zł","20zł","20zł","20zł","20zł"]
    var pytania_i_odpowiedzi=
        [
            ["pytanie1","1","2","3","4","A"],
            ["pytanie2","5","6","7","8","B"],
            ["pytanie3","5","6","7","8","C"],
            ["pytanie4","5","6","7","8","D"],
            ["pytanie5","5","6","7","8","A"],
            ["pytanie6","5","6","7","8","D"],
            ["pytanie7","5","6","7","8","D"],
            ["pytanie8","5","6","7","8","D"],
            ["pytanie9","5","6","7","8","D"],
            ["pytanie10","5","6","7","8","D"],





        ]
    for (var i=progi.length-1;i>=0;i--){
        var $newdiv1 = $( "<div class='right_append'></div>" ).text(progi[i]);



        $right_side.append( $newdiv1 );
    }






    var $newdiv2 = $( "<p class='right_append_question'></p>" ).text(pytania_i_odpowiedzi[0][0]);
    $left_side_bottom_question.append( $newdiv2 );
    $A.find("span").text(pytania_i_odpowiedzi[0][1])
    $B.find("span").text(pytania_i_odpowiedzi[0][2])
    $C.find("span").text(pytania_i_odpowiedzi[0][3])
    $D.find("span").text(pytania_i_odpowiedzi[0][4])

    $('body').keyup(function(e){

        if(e.keyCode == 32){
            // user has pressed space

          counter = counter +1;
          console.log(counter);
        }
        if (counter>=1){
   $(".right_append_question").last().remove()
            $A.find("span").text("")
            $B.find("span").text("")
            $C.find("span").text("")
            $D.find("span").text("")
        }

    var $newdiv2 = $( "<p class='right_append_question'></p>" ).text(pytania_i_odpowiedzi[counter][0]);
    $left_side_bottom_question.append( $newdiv2 );

    $A.find("span").text(pytania_i_odpowiedzi[counter][1])
    $B.find("span").text(pytania_i_odpowiedzi[counter][2])
    $C.find("span").text(pytania_i_odpowiedzi[counter][3])
    $D.find("span").text(pytania_i_odpowiedzi[counter][4])

        $(".right_append").eq(progi.length-counter).css({backgroundColor: "black"})
    });

    $answer.click(function() {
        $(this).css({ backgroundColor: "orange" , cursor:"pointer" })
        $(this).find("p").css({color:"black" , cursor:"pointer"})

        console.log()




    if(pytania_i_odpowiedzi[counter][5]===$(this).attr("data-correct")) {

        setTimeout(function(){
            // $(this).css({ backgroundColor: "green"});
            console.log("super");
        }, 1000);
    }
});

    //PROGI









    $answer.mouseenter(function() {
        $(this).css({ backgroundColor: "black" , cursor:"pointer" })
        $(this).find("p").css({color:"white" , cursor:"pointer"})
    });
    $answer.mouseleave(function() {
        $(this).css({ backgroundColor: "red" , transition :"0.5s" })
        $(this).find("p").css({color:"black" , transition: "0.5s"})
    });







});