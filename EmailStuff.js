let emailbody1;
let emailbody2;
let emailbody3;
let emailbody4;
let emailbody5;
let emaildiv1, emaildiv2, emaildiv3, emaildiv4, emaildiv5;
let recipientsdiv, ccdiv;
let filenamediv;
let onhandinput;
let emailbody6;
let emaildiv6;
let filenamediv2, filenametitle2, filenamediv1, filenametitle1;
//let LOCATION, TAGNUM1, LLCOUNT, OHCOUNT, TAGNUMCOUNT1;
let llcountinput, tagnumcountinput;



function lpEmail()
{
  lpEmailbutt.remove();
  pCCCbutt.remove();
  lLDiffEmailButt.remove();

  tagnuminput = createInput('');
  tagnuminput.position(50, 50);
  let tagnumdiv = createDiv("TAGNUM");
  tagnumdiv.position(50 + 180, 50)

  productinput = createInput('');
  productinput.position(50, 90);
  let productdiv = createDiv("PRODUCT ID");
  productdiv.position(50 + 180, 90)

  wtlfinput = createInput('');
  wtlfinput.position(50, 130);
  let wtlfdiv = createDiv("WHAT TO LOOK FOOR");
  wtlfdiv.position(50 + 180, 130)

  titleinput = createInput('');
  titleinput.position(50, 170);
  let titlediv = createDiv("PRODUCT TITLE");
  titlediv.position(50 + 180, 170)

  sel = createSelect();
  sel.position(50, 210);
  sel.option('B A');
  sel.option('B M');
  sel.option('N A');
  sel.option('N M');
  let newdiv2 = createDiv("LICENSE");
  newdiv2.position(50 + 180, 210)

  let button;
  button = createButton('GENERATE LP EMAIL');
  button.position(50, 250);
  button.mousePressed(generateLPemail);
}


function generateLPemail()
{
  if(emaildiv1)
    bodyreset();


  let LICENSE = "LICENSE: " + sel.value();
  let PKGID = "PKG ID: " + productinput.value();
  let SOURCEID = "SOURCE ID: " + tagnuminput.value();
  let PRODUCT = "PRODUCT: " + titleinput.value();
  let WTLF = "WHAT TO LOOK FOR: " + wtlfinput.value();

  emailbody1 = LICENSE;
  emailbody2 = PKGID;
  emailbody3 = SOURCEID;
  emailbody4 = PRODUCT;
  emailbody5 = WTLF;

  emaildiv1 = createP(emailbody1);
  emaildiv2 = createP(emailbody2);
  emaildiv3 = createP(emailbody3);
  emaildiv4 = createP(emailbody4);
  emaildiv5 = createP(emailbody5);

  emaildiv1.style('font-family', "Calibri");
  emaildiv2.style('font-family', "Calibri");
  emaildiv3.style('font-family', "Calibri");
  emaildiv4.style('font-family', "Calibri");
  emaildiv5.style('font-family', "Calibri");

  emaildiv1.position(50, 370);
  emaildiv2.position(50, 390);
  emaildiv3.position(50, 410);
  emaildiv4.position(50, 430);
  emaildiv5.position(50, 450);

  let temp = sel.value().split(" ");
  let filenametitle = "Transaction file name: " + temp[0] + " - " + productinput.value() + " - " + temp[1];
  console.log(filenametitle);
  filenamediv = createP(filenametitle);
  filenamediv.position(50, 500);

  recipientsdiv = createP("To: LP");
  ccdiv = createP("cc: " + temp[0] + " I S");

  recipientsdiv.position(50, 300);
  ccdiv.position(50, 320);

}

function LLDiffEmail()
{
  lpEmailbutt.remove();
  pCCCbutt.remove();
  lLDiffEmailButt.remove();

  tagnuminput = createInput('');
  tagnuminput.position(50, 50);
  let tagnumdiv = createDiv("TAGNUM"); // need
  tagnumdiv.position(50 + 180, 50)

  productinput = createInput('');
  productinput.position(50, 90);
  let productdiv = createDiv("PRODUCT ID");  // need
  productdiv.position(50 + 180, 90)

  llcountinput = createInput('');
  llcountinput.position(50, 130);
  let llcountdiv = createDiv("LL COUNT");  // need
  llcountdiv.position(50 + 180, 130);

  tagnumcountinput = createInput('');
  tagnumcountinput.position(50, 170);
  let tagnumcountdiv = createDiv("TAGNUM COUNT");  // need
  tagnumcountdiv.position(50 + 180, 170);

  onhandinput = createInput('');
  onhandinput.position(50, 210);
  let onhanddiv = createDiv("ON HAND");  // need
  onhanddiv.position(50 + 180, 210);

  sel = createSelect();
  sel.position(50, 250);
  sel.option('B A');
  sel.option('B M');
  sel.option('N A');
  sel.option('N M');
  let newdiv2 = createDiv("LOCATION");
  newdiv2.position(50 + 180, 250)

  let button;
  button = createButton('GENERATE LL/TAGNUM DIFF EMAIL');
  button.position(50, 290);
  button.mousePressed(generateLLDiffEmail);
}

function generateLLDiffEmail()
{
  if(emaildiv1)
    bodyreset();


  let LOCATION = "LICENSE: " + sel.value();
  let PKGID = "PKG ID: " + productinput.value();
  let TAGNUM1 = "TAG # " + tagnuminput.value();
  let LLCOUNT = "LL: " + llcountinput.value();
  let TAGNUMCOUNT1 = "TAG: " + tagnumcountinput.value();
  let OHCOUNT = "OH: " + onhandinput.value();

  emailbody1 = LOCATION;
  emailbody2 = PKGID;
  emailbody3 = TAGNUM1;
  emailbody4 = LLCOUNT;
  emailbody5 = TAGNUMCOUNT1;
  emailbody6 = OHCOUNT;

  emaildiv1 = createP(emailbody1);
  emaildiv2 = createP(emailbody2);
  emaildiv3 = createP(emailbody3);
  emaildiv4 = createP(emailbody4);
  emaildiv5 = createP(emailbody5);
  emaildiv6 = createP(emailbody6);

  emaildiv1.style('font-family', "Calibri");
  emaildiv2.style('font-family', "Calibri");
  emaildiv3.style('font-family', "Calibri");
  emaildiv4.style('font-family', "Calibri");
  emaildiv5.style('font-family', "Calibri");
  emaildiv6.style('font-family', "Calibri");

  emaildiv1.position(50, 370);
  emaildiv2.position(50, 390);
  emaildiv3.position(50, 410);
  emaildiv4.position(50, 430);
  emaildiv5.position(50, 450);
  emaildiv6.position(50, 470);

  let temp1 = sel.value().split(" ");
  let filenametitle1 = "Tagnum Transaction file name: " + temp1[0] + " - " + productinput.value() + " - " + temp1[1] + " TAGNUM TRANS";
  console.log(filenametitle1);
  filenamediv1 = createP(filenametitle1);
  filenamediv1.position(50, 500);


  let filenametitle2 = "LL Transaction file name: " + temp1[0] + " - " + productinput.value() + " - " + temp1[1] + " LL TRANS";
  console.log(filenametitle2);
  filenamediv2 = createP(filenametitle2);
  filenamediv2.position(50, 530);

  recipientsdiv = createP("To: LP");
  ccdiv = createP("cc: " + temp1[0] + " I S");

  recipientsdiv.position(50, 300);
  ccdiv.position(50, 320);

}

function bodyreset()
{
  emaildiv1.remove();
  emaildiv2.remove();
  emaildiv3.remove();
  emaildiv4.remove();
  emaildiv5.remove();
  recipientsdiv.remove();
  ccdiv.remove();
  filenamediv1.remove();
  filenamediv2.remove();
  llcountinput.remove();
  tagnumcountinput.remove();
}
