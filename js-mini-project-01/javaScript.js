let string = "";
let butto = document.querySelectorAll(".button");
Array.from(butto).forEach((button) => {
  button.addEventListener("click", (e) => {
if(e.target.innerHTML == "="){
  string = eval(string);
  document.querySelector("input").value = string;

}
else if(e.target.innerHTML == "AC"){
  string = "";
  document.querySelector("input").value = string;

}
else if(e.target.innerHTML == "."){
  string = string + ".";
  document.querySelector("input").value = string;
}
else if(e.target.innerHTML == "%"){
  string = string/100 + "%";
  document.querySelector("input").value = string;
}
else if(e.target.innerHTML == "M+"){
   if (string) {
        memory += parseFloat(string);
        string = "";
        document.querySelector("input").value = memory;
      }
}
else if(e.target.innerHTML == "M-"){
    if (string) {
        memory -= parseFloat(string);
        string = "";
        document.querySelector("input").value = memory;
      }
}

else{

    console.log(e.target);
    string =string + e.target.innerHTML;
    document.querySelector("input").value = string;
}
    });
});