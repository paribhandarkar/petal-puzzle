function checkbtn1() {
    if (document.getElementById("c11").checked) {
        document.querySelector(".c1").style.background = "green";
        document.querySelector(".c1").style.color = "white";
        document.querySelectorAll(".p1")[0].style.background = "red";
        document.getElementById("error1").innerHTML = document.getElementById("c11").value + " is wrong answer.";
        a1 = 0;
    }


    else if (document.getElementById("c12").checked) {
        document.querySelector(".c1").style.background = "green";
        document.querySelector(".c1").style.color = "white";
        document.querySelectorAll(".p1")[1].style.background = "red";
        document.getElementById("error1").innerHTML = document.getElementById("c12").value + " is wrong answer.";
        a1 = 0;
    }


    else if (document.getElementById("correct1").checked) {
        document.querySelector(".c1").style.background = "green";
        document.querySelector(".c1").style.color = "white";
        document.getElementById("disp1").innerHTML = document.getElementById("correct1").value + " is right answer.";
        a1 = 1;
    }

    else if (document.getElementById("c13").checked) {
        document.querySelector(".c1").style.background = "green";
        document.querySelector(".c1").style.color = "white";
        document.querySelectorAll(".p1")[2].style.background = "red";
        document.getElementById("error1").innerHTML = document.getElementById("c13").value + " is wrong answer.";
        a1 = 0;
    }

    else {
        document.getElementById("error1").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a10 = 0;
    }
}



function checkbtn2() {
    if (document.getElementById("c21").checked) {
        document.querySelector(".c2").style.background = "green";
        document.querySelectorAll(".p2")[0].style.background = "red";
        document.querySelector(".c2").style.color = "white";
        document.getElementById("error2").innerHTML = document.getElementById("c21").value + " is wrong answer.";
        a2 = 0;
    }


    else if (document.getElementById("c22").checked) {
        document.querySelector(".c2").style.background = "green";
        document.querySelectorAll(".p2")[1].style.background = "red";
        document.querySelector(".c2").style.color = "white";
        document.getElementById("error2").innerHTML = document.getElementById("c22").value + " is wrong answer.";
        a2 = 0;
    }


    else if (document.getElementById("correct2").checked) {
        document.querySelector(".c2").style.background = "green";
        document.querySelector(".c2").style.color = "white";
        document.getElementById("disp2").innerHTML = document.getElementById("correct2").value + " is right answer.";
        a2 = 1;
    }

    else if (document.getElementById("c23").checked) {
        document.querySelector(".c2").style.background = "green";
        document.querySelectorAll(".p2")[2].style.background = "red";
        document.querySelector(".c2").style.color = "white";
        document.getElementById("error2").innerHTML = document.getElementById("c23").value + " is wrong answer.";
        a2 = 0;
    }

    else {
        document.getElementById("error2").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a2 = 0;
    }
}





function checkbtn3() {
    if (document.getElementById("c31").checked) {
        document.querySelector(".c3").style.background = "green";
        document.querySelectorAll(".p3")[0].style.background = "red";
        document.querySelector(".c3").style.color = "white";
        document.getElementById("error3").innerHTML = document.getElementById("c31").value + " is wrong answer.";
        a3 = 0;
    }


    else if (document.getElementById("c32").checked) {
        document.querySelector(".c3").style.background = "green";
        document.querySelectorAll(".p3")[1].style.background = "red";
        document.querySelector(".c3").style.color = "white";
        document.getElementById("error3").innerHTML = document.getElementById("c32").value + " is wrong answer.";
        a3 = 0;
    }


    else if (document.getElementById("correct3").checked) {
        document.querySelector(".c3").style.background = "green";
        document.querySelector(".c3").style.color = "white";
        document.getElementById("disp3").innerHTML = document.getElementById("correct3").value + " is right answer.";
        a3 = 1;
    }

    else if (document.getElementById("c33").checked) {
        document.querySelector(".c3").style.background = "green";
        document.querySelectorAll(".p3")[2].style.background = "red";
        document.querySelector(".c3").style.color = "white";
        document.getElementById("error3").innerHTML = document.getElementById("c33").value + " is wrong answer.";
        a3 = 0;
    }

    else {
        document.getElementById("error3").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a3 = 0;
    }
}







function checkbtn4() {
    if (document.getElementById("c41").checked) {
        document.querySelector(".c4").style.background = "green";
        document.querySelectorAll(".p4")[0].style.background = "red";
        document.querySelector(".c4").style.color = "white";
        document.getElementById("error4").innerHTML = document.getElementById("c41").value + " is wrong answer.";
        a4 = 0;
    }


    else if (document.getElementById("c42").checked) {
        document.querySelector(".c4").style.background = "green";
        document.querySelectorAll(".p4")[1].style.background = "red";
        document.querySelector(".c4").style.color = "white";
        document.getElementById("error4").innerHTML = document.getElementById("c42").value + " is wrong answer.";
        a4 = 0;
    }


    else if (document.getElementById("correct4").checked) {
        document.querySelector(".c4").style.background = "green";
        document.querySelector(".c4").style.color = "white";
        document.getElementById("disp4").innerHTML = document.getElementById("correct4").value + " is right answer.";
        a4 = 1;
    }

    else if (document.getElementById("c43").checked) {
        document.querySelector(".c4").style.background = "green";
        document.querySelectorAll(".p4")[2].style.background = "red";
        document.querySelector(".c4").style.color = "white";
        document.getElementById("error4").innerHTML = document.getElementById("c43").value + " is wrong answer.";
        a4 = 0;
    }

    else {
        document.getElementById("error4").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a4 = 0;
    }
}









function checkbtn5() {
    if (document.getElementById("c51").checked) {
        document.querySelector(".c5").style.background = "green";
        document.querySelectorAll(".p5")[0].style.background = "red";
        document.querySelector(".c5").style.color = "white";
        document.getElementById("error5").innerHTML = document.getElementById("c21").value + " is wrong answer.";
        a5 = 0;
    }


    else if (document.getElementById("c52").checked) {
        document.querySelector(".c5").style.background = "green";
        document.querySelectorAll(".p5")[1].style.background = "red";
        document.querySelector(".c5").style.color = "white";
        document.getElementById("error5").innerHTML = document.getElementById("c5").value + " is wrong answer.";
        a5 = 0;
    }


    else if (document.getElementById("correct5").checked) {
        document.querySelector(".c5").style.background = "green";
        document.querySelector(".c5").style.color = "white";
        document.getElementById("disp5").innerHTML = document.getElementById("correct5").value + " is right answer.";
        a5 = 1;
    }

    else if (document.getElementById("c53").checked) {
        document.querySelector(".c5").style.background = "green";
        document.querySelectorAll(".p5")[2].style.background = "red";
        document.querySelector(".c5").style.color = "white";
        document.getElementById("error5").innerHTML = document.getElementById("c53").value + " is wrong answer.";
        a5 = 0;
    }

    else {
        document.getElementById("error5").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a5 = 0;
    }
}







function checkbtn6() {
    if (document.getElementById("c61").checked) {
        document.querySelector(".c6").style.background = "green";
        document.querySelectorAll(".p6")[0].style.background = "red";
        document.querySelector(".c6").style.color = "white";
        document.getElementById("error6").innerHTML = document.getElementById("c61").value + " is wrong answer.";
        a6 = 0;
    }


    else if (document.getElementById("c62").checked) {
        document.querySelector(".c6").style.background = "green";
        document.querySelectorAll(".p6")[1].style.background = "red";
        document.querySelector(".c6").style.color = "white";
        document.getElementById("error6").innerHTML = document.getElementById("c62").value + " is wrong answer.";
        a6 = 0;
    }


    else if (document.getElementById("correct6").checked) {
        document.querySelector(".c6").style.background = "green";
        document.querySelector(".c6").style.color = "white";
        document.getElementById("disp6").innerHTML = document.getElementById("correct6").value + " is right answer.";
        a6 = 1;
    }

    else if (document.getElementById("c63").checked) {
        document.querySelector(".c6").style.background = "green";
        document.querySelectorAll(".p6")[2].style.background = "red";
        document.querySelector(".c6").style.color = "white";
        document.getElementById("error6").innerHTML = document.getElementById("c63").value + " is wrong answer.";
        a6 = 0;
    }

    else {
        document.getElementById("error6").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a6 = 0;
    }
}






function checkbtn7() {
    if (document.getElementById("c71").checked) {
        document.querySelector(".c7").style.background = "green";
        document.querySelectorAll(".p7")[0].style.background = "red";
        document.querySelector(".c7").style.color = "white";
        document.getElementById("error7").innerHTML = document.getElementById("c71").value + " is wrong answer.";
        a7 = 0;
    }


    else if (document.getElementById("c72").checked) {
        document.querySelector(".c7").style.background = "green";
        document.querySelectorAll(".p7")[1].style.background = "red";
        document.querySelector(".c7").style.color = "white";
        document.getElementById("error7").innerHTML = document.getElementById("c72").value + " is wrong answer.";
        a7 = 0;
    }


    else if (document.getElementById("correct7").checked) {
        document.querySelector(".c7").style.background = "green";
        document.querySelector(".c7").style.color = "white";
        document.getElementById("disp7").innerHTML = document.getElementById("correct7").value + " is right answer.";
        a7 = 1;
    }

    else if (document.getElementById("c73").checked) {
        document.querySelector(".c7").style.background = "green";
        document.querySelectorAll(".p7")[2].style.background = "red";
        document.querySelector(".c7").style.color = "white";
        document.getElementById("error7").innerHTML = document.getElementById("c73").value + " is wrong answer.";
        a7 = 0;
    }

    else {
        document.getElementById("error7").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a7 = 0;
    }
}









function checkbtn8() {
    if (document.getElementById("c81").checked) {
        document.querySelector(".c8").style.background = "green";
        document.querySelectorAll(".p8")[0].style.background = "red";
        document.querySelector(".c8").style.color = "white";
        document.getElementById("error8").innerHTML = document.getElementById("c81").value + " is wrong answer.";
        a8 = 0;
    }


    else if (document.getElementById("c82").checked) {
        document.querySelector(".c8").style.background = "green";
        document.querySelectorAll(".p8")[1].style.background = "red";
        document.querySelector(".c8").style.color = "white";
        document.getElementById("error8").innerHTML = document.getElementById("c82").value + " is wrong answer.";
        a8 = 0;
    }


    else if (document.getElementById("correct8").checked) {
        document.querySelector(".c8").style.background = "green";
        document.querySelector(".c8").style.color = "white";
        document.getElementById("disp8").innerHTML = document.getElementById("correct8").value + " is right answer.";
        a8 = 1;
    }

    else if (document.getElementById("c83").checked) {
        document.querySelector(".c8").style.background = "green";
        document.querySelectorAll(".p8")[2].style.background = "red";
        document.querySelector(".c8").style.color = "white";
        document.getElementById("error8").innerHTML = document.getElementById("c83").value + " is wrong answer.";
        a8 = 0;
    }

    else {
        document.getElementById("error8").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a8 = 0;
    }
}









function checkbtn9() {
    if (document.getElementById("c91").checked) {
        document.querySelector(".c9").style.background = "green";
        document.querySelectorAll(".p9")[0].style.background = "red";
        document.querySelector(".c9").style.color = "white";
        document.getElementById("error9").innerHTML = document.getElementById("c91").value + " is wrong answer.";
        a9 = 0;
    }


    else if (document.getElementById("c92").checked) {
        document.querySelector(".c9").style.background = "green";
        document.querySelectorAll(".p9")[1].style.background = "red";
        document.querySelector(".c9").style.color = "white";
        document.getElementById("error9").innerHTML = document.getElementById("c92").value + " is wrong answer.";
        a9 = 0;
    }


    else if (document.getElementById("correct9").checked) {
        document.querySelector(".c9").style.background = "green";
        document.querySelector(".c9").style.color = "white";
        document.getElementById("disp9").innerHTML = document.getElementById("correct9").value + " is right answer.";
        a9 = 1;
    }

    else if (document.getElementById("c93").checked) {
        document.querySelector(".c9").style.background = "green";
        document.querySelectorAll(".p9")[2].style.background = "red";
        document.querySelector(".c9").style.color = "white";
        document.getElementById("error9").innerHTML = document.getElementById("c93").value + " is wrong answer.";
        a9 = 0;
    }

    else {
        document.getElementById("error9").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a9 = 0;
    }
}






function checkbtn10() {
    if (document.getElementById("c101").checked) {
        document.querySelector(".c10").style.background = "green";
        document.querySelectorAll(".p10")[0].style.background = "red";
        document.querySelector(".c10").style.color = "white";
        document.getElementById("error10").innerHTML = document.getElementById("c101").value + " is wrong answer.";
        a10 = 0;
    }


    else if (document.getElementById("c102").checked) {
        document.querySelector(".c10").style.background = "green";
        document.querySelectorAll(".p10")[1].style.background = "red";
        document.querySelector(".c10").style.color = "white";
        document.getElementById("error10").innerHTML = document.getElementById("c102").value + " is wrong answer.";
        a10 = 0;
    }


    else if (document.getElementById("correct10").checked) {
        document.querySelector(".c10").style.background = "green";
        document.querySelector(".c10").style.color = "white";
        document.getElementById("disp10").innerHTML = document.getElementById("correct10").value + " is right answer.";
        a10 = 1;
    }

    else if (document.getElementById("c103").checked) {
        document.querySelector(".c10").style.background = "green";
        document.querySelectorAll(".p10")[2].style.background = "red";
        document.querySelector(".c10").style.color = "white";
        document.getElementById("error10").innerHTML = document.getElementById("c103").value + " is wrong answer.";
        a10 = 0;
    }

    else {
        document.getElementById("error10").innerHTML = "*You have not selected any option" + "<br>" + "   Refresh your page Again!!";
        a10 = 0;
    }
}


// document.getElementById('result').onclick = function() {

//     tright= a1 +a2+ a3+ a4+ a5 +a6+ a7+ a8 +a9+ a10  ;
//     twrong= 10 - tright;

//     swal("your total right is: "+tright, "your total wrong is: "+twrong,{

//         icon:'https://static.thenounproject.com/png/729-200.png',
//   });

// }

document.getElementById('h1').onclick = function () {
    swal("  a perennial plant species in the genus Jacobaea native to the Mediterranean region ", {
        icon: 'https://d1nfcimmipiaw0.cloudfront.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/u/dusty_miller_flat_leaf.jpg',
    });
}

document.getElementById('h2').onclick = function () {
    swal(" These are also known as gillyflowers.  ", {
        icon: 'https://i.etsystatic.com/9817393/r/il/422538/1202540192/il_570xN.1202540192_eacl.jpg',
    });
}

document.getElementById('h3').onclick = function () {
    swal(" Orchids in this genus are native to India, Taiwan, China, Southeast Asia, New Guinea and Australia with the majority in Indonesia and the Philippines.  ", {
        icon: 'https://www.growjoy.com/store/pc/catalog/white_orchid_plant__703_detail.jpg',
    });
}

document.getElementById('h4').onclick = function () {
    swal("These blossoms are also the official State Flower of Indiana.  ", {
        icon: 'https://images.unsplash.com/photo-1575178094668-132dc931ad35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvbnl8ZW58MHx8MHx8&w=1000&q=80',
    });
}

document.getElementById('h5').onclick = function () {
    swal(" These blossoms are also the official State Flower of Indiana.", {
        icon: 'https://images.unsplash.com/photo-1588834747799-82f691b36ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZmxvd2Vyc3xlbnwwfHwwfHw%3D&w=1000&q=80',
    });
}

document.getElementById('h6').onclick = function () {
    swal(" These garden perennials can be grown from seeds but can take more than one season to flower so are more commonly started with tubers/bulbs.  ", {
        icon: 'https://www.gardenbythesea.org/site/assets/files/1912/bonnie_and_scott_married_tammie_gilchrist-0204.jpg',
    });
}

document.getElementById('h7').onclick = function () {
    swal(" Mackinac Island hosts an annual festival dedicated to this flower. ", {
        icon: 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-11/hgic_shrubs_common_lilac_MT_1400.jpg?itok=gN_9SpYe"',
    });
}

document.getElementById('h8').onclick = function () {
    swal(" The flowers open with the first light of dawn and they take their name from the Anglo Saxon for “day’s eye.” ", {
        icon: 'https://static.onecms.io/wp-content/uploads/sites/34/2020/04/16/gerbera-daisies-getty-0420.jpg',
    });
}

document.getElementById('h9').onclick = function () {
    swal(" It is a small genus of flowering bulbs, with two species. ", {
        icon: 'https://b3n8a3n8.rocketcdn.me/wp-content/uploads/2021/12/amaryllis-hippeastrum-01-1140x1710.jpg',
    });
}

document.getElementById('h10').onclick = function () {
    swal("The genus is native to the area of the eastern Mediterranean from the south of Turkey to Palestine, although naturalized more widely.  ", {
        icon: 'https://gardenerspath.com/wp-content/uploads/2018/03/Everything-You-Need-to-Know-to-Grow-Hyacinths.jpg',
    });
}


// tanishqa code

function score() {

    var c = 0;
    var bg = document.getElementById("bgf");
    var full = document.getElementById('final-box');

    r1 = document.getElementById("correct1");
    if (r1.checked) { c++ }

    r2 = document.getElementById("correct2");
    if (r2.checked) { c++ }

    r3 = document.getElementById("correct3");
    if (r3.checked) { c++ }

    r4 = document.getElementById("correct4");
    if (r4.checked) { c++ }

    r5 = document.getElementById("correct5");
    if (r5.checked) { c++ }

    r6 = document.getElementById("correct6");
    if (r6.checked) { c++ }

    r7 = document.getElementById("correct7");
    if (r7.checked) { c++ }

    r8 = document.getElementById("correct8");
    if (r8.checked) { c++ }

    r9 = document.getElementById("correct9");
    if (r9.checked) { c++ }

    r10 = document.getElementById("correct10");
    if (r10.checked) { c++ }

    full.style.display = "none";
    bg.style.width = "30%";
    bg.style.height = "40vh";
    bg.style.color = "black";
    bg.style.textAlign = "center";
    bg.style.alignItems = "center";
    bg.style.backgroundColor = "#FBEEDF";
    bg.style.fontSize = "larger";
    bg.style.display = "flex";
    bg.style.alignItems = "center";
    bg.style.justifyContent = "center";

    bg.style.border = "1px solid black";
    bg.style.padding = "3%";
    bg.style.borderRadius = "40px";
    bg.style.margin = "5% auto";

    bg.style.boxShadow = "0 0 0 10px #FBEEDF, 0 0 0 11px black";

    if (c < 5) {
        bg.textContent = "Your final score is : " + c + ". Poor Performance. Try to improve your score. Play again to improve your score."

        var button = document.createElement("button");
        button.innerHTML = "Play Again.";
        button.style.padding = "1% 2%";
        button.style.backgroundColor = "#FBEEDF"
        button.style.margin = "0 0 0 45%";
        button.style.cursor = "pointer";
        button.style.borderRadius = "40px";
        button.style.display = "inline";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener("click", function () {
            window.location.href = "main-quiz.html";
        });

        var button1 = document.createElement("button");
        button1.innerHTML = "Meet the creators.";
        button1.style.padding = "1% 2%";
        button1.style.backgroundColor = "#FBEEDF"
        button1.style.margin = "1% 0 3% 43%";
        button1.style.cursor = "pointer";
        button1.style.borderRadius = "40px";
        button1.style.display = "inline";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button1);

        button1.addEventListener("click", function () {
            window.location.href = "bts-quiz.html";
        });
    }

    else if (c >= 5 && c < 8) {
        bg.textContent = "Your final score is : " + c + ". Good Performance. Try to improve more. Play again to improve your score."

        var button = document.createElement("button");
        button.innerHTML = "Play Again";
        button.style.padding = "1% 2%";
        button.style.backgroundColor = "#FBEEDF"
        button.style.margin = "0 0 0 45%";
        button.style.cursor = "pointer";
        button.style.borderRadius = "40px";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener("click", function () {
            window.location.href = "main-quiz.html";
        });

        var button1 = document.createElement("button");
        button1.innerHTML = "Meet the creators.";
        button1.style.padding = "1% 2%";
        button1.style.backgroundColor = "#FBEEDF"
        button1.style.margin = "1% 0 3% 43%";
        button1.style.cursor = "pointer";
        button1.style.borderRadius = "40px";
        button1.style.display = "inline";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button1);

        button1.addEventListener("click", function () {
            window.location.href = "bts-quiz.html";
        });

    }

    else {
        bg.textContent = "Your final score is : " + c + ". Excellent Performance!!!"

        var button = document.createElement("button");
        button.innerHTML = "Play Again";
        button.style.padding = "1% 2%";
        button.style.backgroundColor = "#FBEEDF"
        button.style.margin = "0 0 0 45%";
        button.style.cursor = "pointer";
        button.style.borderRadius = "40px";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener("click", function () {
            window.location.href = "main-quiz.html";
        });

        var button1 = document.createElement("button");
        button1.innerHTML = "Meet the creators.";
        button1.style.padding = "1% 2%";
        button1.style.backgroundColor = "#FBEEDF"
        button1.style.margin = "1% 0 3% 43%";
        button1.style.cursor = "pointer";
        button1.style.borderRadius = "40px";
        button1.style.display = "inline";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button1);

        button1.addEventListener("click", function () {
            window.location.href = "bts-quiz.html";
        });
    }


}