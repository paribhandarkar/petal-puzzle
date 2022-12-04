// document.getElementById('submit1').onclick = function() {
//     var radios = document.getElementsByName('a');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a1= radio.value;
//             document.querySelector(".c1").style.background="green";

//             if (radio.value == 'right' ) {
//                a1= 1;
//             } else {
//                a1= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit2').onclick = function() {
//     var radios = document.getElementsByName('b');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a2= radio.value;
//             document.querySelector(".c2").style.background="green";

//             if (radio.value == 'right' ) {
//                a2= 1;
//             } else {
//                a2= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit3').onclick = function() {
//     var radios = document.getElementsByName('c');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a3= radio.value;
//             document.querySelector(".c3").style.background="green";

//             if (radio.value == 'right' ) {
//                a3= 1;
//             } else {
//                a3= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit4').onclick = function() {
//     var radios = document.getElementsByName('d');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a4= radio.value;
//             document.querySelector(".c4").style.background="green";

//             if (radio.value == 'right' ) {
//                a4= 1;
//             } else {
//                a4= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit5').onclick = function() {
//     var radios = document.getElementsByName('e');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a5= radio.value;
//             document.querySelector(".c5").style.background="green";

//             if (radio.value == 'right' ) {
//                a5= 1;
//             } else {
//                a5= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit6').onclick = function() {
//     var radios = document.getElementsByName('f');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a6= radio.value;
//             document.querySelector(".c6").style.background="green";

//             if (radio.value == 'right' ) {
//                a6= 1;
//             } else {
//                a6= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit7').onclick = function() {
//     var radios = document.getElementsByName('g');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a7= radio.value;
//             document.querySelector(".c7").style.background="green";

//             if (radio.value == 'right' ) {
//                a7= 1;
//             } else {
//                a7= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit8').onclick = function() {
//     var radios = document.getElementsByName('h');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a8= radio.value;
//             document.querySelector(".c8").style.background="green";

//             if (radio.value == 'right' ) {
//                a8= 1;
//             } else {
//                a8= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit9').onclick = function() {
//     var radios = document.getElementsByName('i');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a9= radio.value;
//             document.querySelector(".c9").style.background="green";

//             if (radio.value == 'right' ) {
//                a9= 1;
//             } else {
//                a9= 0;
//             }
//         }
//     }
// }

// document.getElementById('submit10').onclick = function() {
//     var radios = document.getElementsByName('j');
//     for (var radio of radios)
//     {
//         if (radio.checked) {
//             a10= radio.value;
//             document.querySelector(".c10").style.background="green";

//             if (radio.value == 'right' ) {
//                a10= 1;
//             } else {
//                a10= 0;

//             }
//         }
//     }
// }

// document.getElementById('result').onclick = function() {
//     tright= a1 +a2+ a3+ a4+ a5 +a6+ a7+ a8 +a9+ a10  ;
//     document.write('your total right is: '+tright );

//     twrong= 10 - tright;
//     document.write('your total wrong is: '+tright);

// }

document.getElementById('submit1').onclick = function () {
    var radios = document.getElementsByName('a');
    for (var radio of radios) {
        if (radio.checked) {
            a1 = radio.value;
            document.querySelector(".c1").style.background = "green";

            if (radio.value == 'right') {
                a1 = 1;
            } else {
                a1 = 0;
            }
        }
    }
}

document.getElementById('submit2').onclick = function () {
    var radios = document.getElementsByName('b');
    for (var radio of radios) {
        if (radio.checked) {
            a2 = radio.value;
            document.querySelector(".c2").style.background = "green";

            if (radio.value == 'right') {
                a2 = 1;
            } else {
                a2 = 0;
            }
        }
    }
}

document.getElementById('submit3').onclick = function () {
    var radios = document.getElementsByName('c');
    for (var radio of radios) {
        if (radio.checked) {
            a3 = radio.value;
            document.querySelector(".c3").style.background = "green";

            if (radio.value == 'right') {
                a3 = 1;
            } else {
                a3 = 0;
            }
        }
    }
}

document.getElementById('submit4').onclick = function () {
    var radios = document.getElementsByName('d');
    for (var radio of radios) {
        if (radio.checked) {
            a4 = radio.value;
            document.querySelector(".c4").style.background = "green";

            if (radio.value == 'right') {
                a4 = 1;
            } else {
                a4 = 0;
            }
        }
    }
}

document.getElementById('submit5').onclick = function () {
    var radios = document.getElementsByName('e');
    for (var radio of radios) {
        if (radio.checked) {
            a5 = radio.value;
            document.querySelector(".c5").style.background = "green";

            if (radio.value == 'right') {
                a5 = 1;
            } else {
                a5 = 0;
            }
        }
    }
}

document.getElementById('submit6').onclick = function () {
    var radios = document.getElementsByName('f');
    for (var radio of radios) {
        if (radio.checked) {
            a6 = radio.value;
            document.querySelector(".c6").style.background = "green";

            if (radio.value == 'right') {
                a6 = 1;
            } else {
                a6 = 0;
            }
        }
    }
}

document.getElementById('submit7').onclick = function () {
    var radios = document.getElementsByName('g');
    for (var radio of radios) {
        if (radio.checked) {
            a7 = radio.value;
            document.querySelector(".c7").style.background = "green";

            if (radio.value == 'right') {
                a7 = 1;
            } else {
                a7 = 0;
            }
        }
    }
}

document.getElementById('submit8').onclick = function () {
    var radios = document.getElementsByName('h');
    for (var radio of radios) {
        if (radio.checked) {
            a8 = radio.value;
            document.querySelector(".c8").style.background = "green";

            if (radio.value == 'right') {
                a8 = 1;
            } else {
                a8 = 0;
            }
        }
    }
}

document.getElementById('submit9').onclick = function () {
    var radios = document.getElementsByName('i');
    for (var radio of radios) {
        if (radio.checked) {
            a9 = radio.value;
            document.querySelector(".c9").style.background = "green";

            if (radio.value == 'right') {
                a9 = 1;
            } else {
                a9 = 0;
            }
        }
    }
}

document.getElementById('submit10').onclick = function () {
    var radios = document.getElementsByName('j');
    for (var radio of radios) {
        if (radio.checked) {
            a10 = radio.value;
            document.querySelector(".c10").style.background = "green";

            if (radio.value == 'right') {
                a10 = 1;
            } else {
                a10 = 0;

            }
        }
    }
}

document.getElementById('result').onclick = function () {
    tright = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;

    // function passvalues(){
    //     var n = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
    //     localStorage.setItem("textvalue", n);
    //     return false;
    // }

    document.write('your total right is: '+tright +'<br>'   );

    twrong = 10 - tright;
    document.write('your total wrong is: ' + twrong);

}
