//https://api.cdnjs.com/libraries/jquery


let p = fetch("https://api.cdnjs.com/libraries/jquery");
p.then((value1) =>{
    return value1.json();
}).then((value2) =>{
    console.log(value2);
})
