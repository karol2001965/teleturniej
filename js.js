$(function(){
    $answer=$(".answer_container")
    $right_side=$(".right_side")
    $right_side_all=$(".right_side_all")
    $left_side_bottom_question=$(".left_side_bottom_question")
    $right_append_question=$(".right_append_question")
    $answer_append=$(".answer_append")
    $left_side_bottom=$(".left_side_bottom")

    $A=$(".A")
    $B=$(".B")
    $C=$(".C")
    $D=$(".D")
    var counter=0
    var answer_count=-2
    var answer_count_answer=0

console.log($left_side_bottom.children().eq(-2).children().eq(0).children().eq(0));

    console.log($left_side_bottom.children().eq(1).children().eq(0));




    var progi=["5zł","10zł","20zł","20zł","20zł","20zł","20zł","20zł","20zł","10","11","12"]
    var pytania_i_odpowiedzi=
        [
            ["W którym roku urodził się Kononowicz","płot wyższy od mego","1961","1967","1962","A"],
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
            //$answer.css({ backgroundColor: "black" , cursor:"pointer" })
            answer_count++
            answer_count_answer++
        }
        if(answer_count_answer===1){
        $(".right_append_question").css({display:"inline"})
        }
        if(answer_count>=0){
       $left_side_bottom.children().eq(answer_count).children().eq(0).children().eq(0).css({display:"inline"})
        console.log(answer_count);
        }
    });


    var czas=5000;

    $answer.click(function() {
        $(this).css({ backgroundColor: "orange" , cursor:"pointer" })
        $(this).find("p").css({color:"black" , cursor:"pointer"})
        // $answer.mouseleave(function() {
        //     $(this).css({ backgroundColor: "orange" , transition :"0.5s" })
        //     $(this).find("p").css({color:"black" , transition: "0.5s"})
        // });
answer_count=-1
answer_count_answer=0
        console.log()




    if(pytania_i_odpowiedzi[counter][5]===$(this).attr("data-correct")) {

        // setTimeout(function()=>{
        //
        // }, 1000);
        //css({ backgroundColor: "green"}
        const explode = () => { return $(this).css(


            { animation: "pulseAnim 0.5s 0s 10 alternate ease-in-out"}


        );
        }
        setTimeout(explode, czas);
        setTimeout(function(){

            counter++
            if (counter>=1){
            $(".right_append_question").last().remove()
            $A.find("span").text("")
            $B.find("span").text("")
            $C.find("span").text("")
            $D.find("span").text("")
        }



            console.log("elod");

            var $newdiv2 = $( "<p class='right_append_question'></p>" ).text(pytania_i_odpowiedzi[counter][0]);
            $left_side_bottom_question.append( $newdiv2 );

            $A.find("span").text(pytania_i_odpowiedzi[counter][1])
            $B.find("span").text(pytania_i_odpowiedzi[counter][2])
            $C.find("span").text(pytania_i_odpowiedzi[counter][3])
            $D.find("span").text(pytania_i_odpowiedzi[counter][4])

            $(".right_append_question").css({display:"none"});
            $answer_append.css({display:"none"});

            $(".right_append").eq(progi.length-counter).css({backgroundColor: "blue"})}, czas+5000);


        // $(this).css({ backgroundColor: "green"})
        // console.log("brawo");
    }else{
        const fail = () => { return $(this).css(


            { animation: "pulseAnimfail 0.5s 0s infinite alternate ease-in-out"}


        );
        }
        setTimeout(fail, czas);




    }
});

    //PROGI









    $answer.mouseenter(function() {
        $(this).css({ backgroundColor: "#024873" , cursor:"pointer" })
        $(this).find("p").css({color:"gold" , cursor:"pointer"})
    });
    $answer.mouseleave(function() {
        $(this).css({ backgroundColor: "black" , transition :"0.5s" })
        $(this).find("p").css({color:"gold" , transition: "0.5s"})
    });







});