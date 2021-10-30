$(function(){
    $answer=$(".answer_container")
    $right_side=$(".right_side")
    $right_side_all=$(".right_side_all")
    $left_side_bottom_question=$(".left_side_bottom_question")
    $right_append_question=$(".right_append_question")
    $answer_append=$(".answer_append")
    $left_side_bottom=$(".left_side_bottom")
    $kola=$(".kola")

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
            ["pytanie1","Dobra","zła","zła","zła","A"],
            ["pytanie2","5","2","7","8","B"],
            ["pytanie3","5","6","3","8","C"],
            ["pytanie4","4","6","7","8","A"],
            ["pytanie5","5","6","7","tak","A"],
            ["pytanie6","5","6","7","8","B"],
            ["pytanie7","5","6","7","8","C"],
            ["pytanie7","5","6","7","8","C"],
            ["pytanie10","5","6","7","10","D"],
            ["pytanie7","5","6","7","8","D"],
            ["pytanie7","5","6","7","8","D"],
            ["pytanie7","5","6","7","8","D"],
            ["pytanie7","5","6","7","8","D"],






        ]

    console.log(pytania_i_odpowiedzi[9][0]);
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


    var czas=1000;//5000

    $answer.click(function() {
        $(this).css({ backgroundColor: "orange" , cursor:"pointer" })
        $(this).find("p").css({color:"black" , cursor:"pointer"})
        // $answer.mouseleave(function() {
        //     $(this).css({ backgroundColor: "orange" , transition :"0.5s" })
        //     $(this).find("p").css({color:"black" , transition: "0.5s"})
        // });
answer_count=-2
answer_count_answer=0
        console.log()




    if(pytania_i_odpowiedzi[counter][5]===$(this).attr("data-correct")) {
console.log(counter);
        // setTimeout(function()=>{
        //
        // }, 1000);
        //css({ backgroundColor: "green"}
console.log($(this));
        const explode = () => { return $(this).css(


            // { animation: "pulseAnim 0.5s 0s 1 alternate ease-in-out"}
            {backgroundColor:"darkgreen",transition:"2s"}

        );
        }
        setTimeout(explode, czas);
        const next = () => {
            console.log($(this));
            $(this).css(


                // { animation: "pulseAnim 0.5s 0s 1 alternate ease-in-out"}
                {backgroundColor:"black"}

            );
            $(this).find("p").css(


                // { animation: "pulseAnim 0.5s 0s 1 alternate ease-in-out"}
                {color:"gold"}

            );

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

            $(".right_append").eq(progi.length-counter).css({backgroundColor: "blue"})}
        setTimeout(next, czas+1000);


        // $(this).css({ backgroundColor: "green"})
        // console.log("brawo");
    }else{
        const fail = () => { return $(this).css(


            { animation: "pulseAnimfail 0.5s 0s 10 alternate ease-in-out"}


        );
        }
        setTimeout(fail, czas);
        // const fail_result = () => { return $(".left_side_bottom_none").css({ display:"none"})
        //     var $newdiv3 = $( "<p class='right_append_win'></p>" ).text(progi[counter]);
        //     $(".left_side_bottom_all").append( $newdiv3 );``
        //
        // }
        // setTimeout(fail_result, czas+2000);
        setTimeout(function(){
             $(".left_side_bottom_none").css({ display:"none"})
                var $newdiv3 = $( "<p class='right_append_win'></p>" ).text("WYGRANA:"+progi[counter]);
                $(".left_side_bottom_all").append( $newdiv3 );
            $(".left_side_bottom_all").css({display:"flex",justifyContent:"center",alignItems:"center"})

        }, czas+2000);




    }
});


    $kola.find("div").find("div").mouseenter(function () {
        $(this).find("i").css({color:"black",cursor:"pointer"});
        $(this).find("p").css({color:"black",cursor:"pointer"});
        $(this).css({backgroundColor:"#024873",cursor:"pointer"});
    })
    $kola.find("div").find("div").mouseleave(function () {
        $(this).find("i").css({color:"white",cursor:"pointer"});
        $(this).find("p").css({color:"white",cursor:"pointer"});
        $(this).css({backgroundColor:"black",cursor:"pointer"});
    })
    $kola.find("div").find("div").click(function () {
        $(this).find("i").css({color:"black",cursor:"pointer"});
        $(this).find("p").css({color:"black",cursor:"pointer"});
        $(this).css({backgroundColor:"orange",cursor:"pointer"});
    })
    $kola.find(".fifty").click(function () {
        $(this).find("p").css({color:"black",cursor:"pointer"});
        $(this).css({backgroundColor:"orange",cursor:"pointer"});

        $kola.find(".fifty").mouseleave(function () {
            $(this).find("p").css({color:"white",cursor:"pointer"});
            $(this).css({backgroundColor:"black",cursor:"pointer"});

        })



    })

    //PROGI









    $answer.mouseenter(function() {
        $(this).css({ backgroundColor: "#024873" , cursor:"pointer" })
        $(this).find("p").css({color:"gold" , cursor:"pointer"})
    });
    $answer.mouseleave(function() {
        $(this).css({ backgroundColor: "black" , transition :"0.5s" })
        $(this).find("p").css({color:"gold" , transition: "0.5s"})
    });


// array = [2, 9]
$(".fifty").click(function () {
    var fifty_array=[0,1,2,3]
    if(pytania_i_odpowiedzi[counter][5]==="A"){
        console.log("A");
        let index = fifty_array.indexOf(0);
        if (index > -1) {
            fifty_array.splice(index, 1);
        }
        console.log(fifty_array);
        let fifty_random=Math.floor((Math.random() * 3));

        let index_1 = fifty_array.indexOf(fifty_array[fifty_random]);
        if (index_1 > -1) {
            fifty_array.splice(index_1, 1);
            }

        setTimeout(function(){

          $(".times_wasted").css({display:"inline-block"})
$answer_append.eq(fifty_array[0]).css({display:"none"})
$answer_append.eq(fifty_array[1]).css({display:"none"})


        }, 0);


    }
    if(pytania_i_odpowiedzi[counter][5]==="B"){
        console.log("B");
        let index = fifty_array.indexOf(1);
        if (index > -1) {
            fifty_array.splice(index, 1);
        }
        console.log(fifty_array);


        let fifty_random=Math.floor((Math.random() * 3));

        let index_1 = fifty_array.indexOf(fifty_array[fifty_random]);
        if (index_1 > -1) {
            fifty_array.splice(index_1, 1);
        }
        setTimeout(function(){

            $(".times_wasted").css({display:"inline-block"})
            $answer_append.eq(fifty_array[0]).css({display:"none"})
            $answer_append.eq(fifty_array[1]).css({display:"none"})


        }, 5000);


    }
    if(pytania_i_odpowiedzi[counter][5]==="C"){
        console.log("C");
        let index = fifty_array.indexOf(2);
        if (index > -1) {
            fifty_array.splice(index, 1);
        }
        console.log(fifty_array);
        let fifty_random=Math.floor((Math.random() * 3));

        let index_1 = fifty_array.indexOf(fifty_array[fifty_random]);
        if (index_1 > -1) {
            fifty_array.splice(index_1, 1);
        }
        setTimeout(function(){

            $(".times_wasted").css({display:"inline-block"})
            $answer_append.eq(fifty_array[0]).css({display:"none"})
            $answer_append.eq(fifty_array[1]).css({display:"none"})


        }, 5000);
    }
    if(pytania_i_odpowiedzi[counter][5]==="D"){
        console.log("D");
        let index = fifty_array.indexOf(3);
        if (index > -1) {
            fifty_array.splice(index, 1);
        }
        console.log(fifty_array);
        let fifty_random=Math.floor((Math.random() * 3));

        let index_1 = fifty_array.indexOf(fifty_array[fifty_random]);
        if (index_1 > -1) {
            fifty_array.splice(index_1, 1);
        }
        setTimeout(function(){

            $(".times_wasted").css({display:"inline-block"})
            $answer_append.eq(fifty_array[0]).css({display:"none"})
            $answer_append.eq(fifty_array[1]).css({display:"none"})


        }, 5000);
    }


})
    $(".phone").click(function () {
        $(".phone_wasted").css({display:"inline-block"})
    })









});
