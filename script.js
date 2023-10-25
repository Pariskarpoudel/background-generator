var css=document.querySelector(`h3`)
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("body");
//body.style.background= "red" js ma html css dida "" vitrai lekhni sab

// color picker ma we can drag to change colors, its value changes constantly
// so to monitor every small change in the input Element, like colorpicker ma color change vairakhni,
// input textbox ma letters add Huni , remove huni and so on
// paila ta pura type hanesi enter or click lai matra listen garthim, aile ta we want to listen each letter to type also
// for that we can use 2 events: 1) input    2)change
// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox).
function setGradient(){
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value})` //color1 is an input element so input.value
    css.textContent=body.style.background
    // innerhtml innertext leni hunihaixa
    // aile css.appendChild(document.createTextNode(...)) garepar huni ta raixa but append history, so harek chati change garda tyo css wala line thapidai matra gayo rather than replace, 8 chati click gare 8 ota linear gradient vandai css aaye so tyo garenam
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

// <input oninput="setGradient()" type="color" class="color2" name="color2" value="#ff0000"></input>
// button onclick="myfunction()"
// esari html mai esto garna pani painnxaa
// but func haru  js ma matra rakheko ramro , dont mix html and js in one page


// we can add many event listeners to one same element 
// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);

// everytime innerhtml has been set, dom needs to parse whole page again for that inner html of a single Element, which makes website slow
// we want ki auta element ma change garda tyo element matra render Hos nakii sab website jo feri render Huni 
// so we want to minimize dom manipulation and events coz inle garda feri rerender matra hunxa ani slow
// so to avoid this , we use react, we wont use dom manipulation anymore coz we have react library