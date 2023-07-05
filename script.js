
// let res = document.getElementById("firstTitle");
// let res1 = document.getElementById("hello");
// let res2 = document.getElementsByTagName("a");
// let res3 = document.getElementsByTagName("h3");
// let res4 = document.getElementsByClassName("more");
// let res5 = document.querySelectorAll("div.container"); //css selector method
// let res6 = document.querySelector("div.container"); //select only first element
// let res7 = document.forms["contact-form"];
// let res8 = document.images["Image"];




// console.log(res);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// // console.log(res6);
// console.log(res7[0].value);
// console.log(res7[1].value);
// console.log(res7[2].value);
// console.log(res8);

function validateContactForm(){  //function defined

    let fullName = document.forms["contact-form"]["fullName"].value;

    if(isNaN(fullName)){    //not a number
        return true

    }else{
    return false; 
    
    }

}

function changeTextColor(){
    let elem = document.querySelector("#p1"); //or getElementById("p1")
    elem.style.color = 'red';
    elem.style.backgroundColor = '#ccc';
    elem.style.paddingTop = '10px';
    elem.style.paddingBottom = '10px';
    elem.style.paddingLeft = '10px';
}

document.getElementById("HideP").addEventListener("click",hideElement)
document.getElementById("ShowP").addEventListener("click",showElement)
document.getElementById("colorChange").addEventListener("mouseover",changeColor)

function changeColor(){
    this.style.color = 'green';
}

function hideElement(){
    let elem = document.getElementById("p1");
    elem.style.visibility = 'hidden';
}

function showElement(){
    let elem = document.getElementById("p1");
    elem.style.visibility = 'visible';
}



// let animateEle = document.getElementById("animateDiv");

let rotate = 0;

var id = null;
function animateDiv(){

    // rotate++; //0 + 1
    // animateEle.style.rotate = `${rotate}deg`;
    var animateEle = document.getElementById("animateDiv");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frames, 10);

    function frames(){
        if(pos == 350){
            clearInterval(id);
        } else{
            pos++;
            animateEle.style.top = `${top}px`;
            animateEle.style.left = `${left}px`;

        }
    }
   
    
 
    requestAnimationFrame(animateDiv);

}

animateDiv();

function getFullname(){

   let val = document.getElementById("fullNameFormField").value

   console.log(val);
}






