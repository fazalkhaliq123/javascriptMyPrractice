//Events in js

//The change in the state of an object is known as Event
//Events are fired to notify code of "interesting changes" that may affect code execution

//Mouse Events (click, double click etc);
//keyboard events (keypress, keyup, keydown)
//form events (submit) 
//print event & many more



//Event handling in js

//node.event = () =>{
 // handle here
// }


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//      let a = 20;
//     a++;
//     console.log(a);
// }




// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You are inside div");
// }



//Event object
//IT is a special object that has details about the event.
//All event handlers have access to the Event object's properties and methods.

// node.event = (e) =>{
    //handle here
//   }




// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) =>{
// console.log(e);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
// console.log("you are inside the div");          //browser we print Event listener object  //target //client x , client Y(horizental, vertical)
// }




// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY); 
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You are inside the div");
// }





//  btn1.onclick = (evt) =>{
//      console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY); 
//  }

//  let div = document.querySelector("div");
//  div.onmouseover = (evt) =>{
//      console.log(evt);
//      console.log(evt.type);
//      console.log(evt.target);
//        console.log(evt.clientX, evt.clientY);
//  }




//Event listener
//node.addEventListener(event, callback)
//node.removeEventListener(event,callback)

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked");
// });


// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler2")
// })

// let div = document.querySelector("div");





// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt)=>{
//     console.log("button 1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked-handler2");
// });

// let div = document.querySelector("div");








// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt)=>{
//     console.log("button1 was clicked - handler1");
// });


// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler2");
// });

// const handler3 = () =>{
//     console.log("button1 was clicked");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);






//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again.

// let modebtn = document.querySelector("#mode");

// modebtn.addEventListener("click", () =>{
//     console.log("You are trying to change mode");
// })




// let modebtn = document.querySelector("#mode");
// let currmode = "light";

// modebtn.addEventListener("click", ()=>{
//     if(currmode === "light"){
//         currmode = "dark";
//     } else{
//         currmode = "light";
//     }
//     console.log(currmode);
// })


//if we change background color

// let modebtn = document.querySelector("#mode");
// let currmode = "light";

// modebtn.addEventListener("click", ()=>{
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currmode);
// })





