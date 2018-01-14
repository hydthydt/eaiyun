// $.fn.extend(function () {
//     animationF:function(obj) {
//         console.log(obj);
//         switch (obj.effect){
//             case"a":
//
//                 this.children(":first").addClass("");
//                 break;
//             case"b":
//                 this.children(":first").addClass();
//                 break;
//             default:
//                 alert("没有特效了");
//         }
//     }
//     // window.animationF = animationF;
// });

$.fn.extend({
    animationF:function (obj) {

        switch(obj.effect){
            case "a":
                //给grid的第一个儿子增加一个class
                this.children(":first").addClass("effect-lily");
                break;
            case "b":
                this.children(":first").addClass("effect-sadie");
                break;
            case "c":
                this.children(":first").addClass("effect-honey");
                break;
            case "d":
                this.children(":first").addClass("effect-layla");
                break;
            case "e":
                this.children(":first").addClass("effect-zoe");
                break;
            case "f":
                this.children(":first").addClass("effect-oscar");
                break;
            case "g":
                this.children(":first").addClass("effect-marley");
                break;
            case "h":
                this.children(":first").addClass("effect-ruby");
                break;
            case "i":
                this.children(":first").addClass("effect-roxy");
                break;
            case "j":
                this.children(":first").addClass("effect-bubba");
                break;
            case "k":
                this.children(":first").addClass("effect-romeo");
                break;
            case "l":
                this.children(":first").addClass("effect-dexter");
                break;
            case "m":
                this.children(":first").addClass("effect-sarah");
                break;
            case "n":
                this.children(":first").addClass("effect-chico");
                break;
            case "o":
                this.children(":first").addClass("effect-milo");
                break;
            default:
                alert("已经没有特效了")
        }
    }
});