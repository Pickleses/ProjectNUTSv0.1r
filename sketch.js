let button1, button2, button3, button4, button5;
let newSent1, newSent2, newSent3, newSent4, newSent5;

let metrcinput, productinput, wtlfinput, titleinput;
let lLDiffEmailButt;

function setup() {
  //createCanvas(windowWidth, windowHeight - 50);
  //background(51);

  pCCCbutt = createButton('pCCC');
  pCCCbutt.position(150, 100);
  pCCCbutt.mousePressed(pCCC);

  lpEmailbutt = createButton('LP Email');
  lpEmailbutt.position(50, 100);
  lpEmailbutt.mousePressed(lpEmail);

  lLDiffEmailButt = createButton('DIFF Email');
  lLDiffEmailButt.position(250, 100);
  lLDiffEmailButt.mousePressed(LLDiffEmail);




  //lpEmail();
  //pCCC();
  //LLDiffEmail()


}

function draw() {
  //background(51);



}




// function copyToClipboard(text) {
//     var dummy = document.createElement("textarea");
//
//     document.body.appendChild(dummy);
//
//     dummy.value = text;
//     dummy.select();
//     document.execCommand("copy");
//     document.body.removeChild(dummy);
// }
