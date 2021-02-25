let quantdiv;
let QOWPR;
let weightdiv;
let calculateButt;
let swapbutt;
let prerollquanttext;
let prerollWeighttext;
let prerollbutt;
let flowerbutt;
let PROF;

function pCCC()
{
  pCCCbutt.remove();
  lpEmailbutt.remove();
  lLDiffEmailButt.remove();

  prerollbutt = createButton('Pre-roll(0.75g)');
  prerollbutt.position(50, 100);
  prerollbutt.mousePressed(prerollCalc);

  flowerbutt = createButton('Flower(3.5g)');
  flowerbutt.position(200, 100);
  flowerbutt.mousePressed(flowercalc);




}

function flowercalc()
{
  prerollbutt.remove();
  flowerbutt.remove();

  PROF = "FLOWER"
  if(QOWPR == "QUANTITY")
  {
    Quantity2WeightPreRoll();
  }
  else if(QOWPR == "WEIGHT")
  {
    Weight2QuantityPreRoll();
  }
  else
  {
    Quantity2WeightPreRoll();
  }
}

function prerollCalc()
{
  prerollbutt.remove();
  flowerbutt.remove();

  PROF = "PREROLL"
  if(QOWPR == "QUANTITY")
  {
    Quantity2WeightPreRoll();
  }
  else if(QOWPR == "WEIGHT")
  {
    Weight2QuantityPreRoll();
  }
  else
  {
    Quantity2WeightPreRoll();
  }
}

function Quantity2WeightPreRoll()
{
  if(PROF == "PREROLL")
  {
    prerollquanttext = createDiv("Convert Pre-roll(.75g) Quantity to Weight");
    prerollquanttext.position(50, 10);
  }
  else if(PROF == "FLOWER")
  {
    prerollquanttext = createDiv("Convert Flower(3.5g) Quantity to Weight");
    prerollquanttext.position(50, 10);
  }

  qantinput = createInput('');
  qantinput.position(50, 50);
  quantdiv = createDiv("Quantity");
  quantdiv.position(50 + 180, 50);




  calculateButt = createButton('CALCULATE');
  calculateButt.position(50, 250);
  calculateButt.mousePressed(calcQ2W);


  swapbutt = createButton('SWAP TO WEIGHT');
  swapbutt.position(50, 85);
  swapbutt.mousePressed(S2W);


}


function Weight2QuantityPreRoll()
{
  if(PROF == "PREROLL")
  {
    prerollWeighttext = createDiv("Convert Pre-roll(.75g) Weight to Quantity");
    prerollWeighttext.position(50, 10);
  }
  else if(PROF == "FLOWER")
  {
    prerollWeighttext = createDiv("Convert Flower(3.5g) Weight to Quantity");
    prerollWeighttext.position(50, 10);
  }


      qantinput = createInput('');
      qantinput.position(50, 50);
      quantdiv = createDiv("Weight");
      quantdiv.position(50 + 180, 50);




      calculateButt = createButton('CALCULATE');
      calculateButt.position(50, 250);
      calculateButt.mousePressed(calcW2Q);


      swapbutt = createButton('SWAP TO Quantity');
      swapbutt.position(50, 85);
      swapbutt.mousePressed(S2Q);

}


function calcQ2W()
{
  if(weightdiv)
    weightdiv.remove();

    let math;
    if(PROF == "PREROLL")
    {
      math = qantinput.value() * 0.75;
    }
    else if(PROF == "FLOWER")
    {
      math = qantinput.value() * 3.5;
    }


    let WEIGHT = "WEIGHT: " + math.toString() + "g";
    weightdiv = createP(WEIGHT);
    weightdiv.position(50, 100)
}

function calcW2Q()
{
  if(weightdiv)
    weightdiv.remove();

    let math;
    if(PROF == "PREROLL")
    {
      math = qantinput.value() / 0.75;
    }
    else if(PROF == "FLOWER")
    {
        math = qantinput.value() / 3.5;
    }



    let WEIGHT = "Quantity: " + math.toString();
    weightdiv = createP(WEIGHT);
    weightdiv.position(50, 100)
}

function S2W()
{

  cleardivs();

  QOWPR = "WEIGHT";
  if(PROF == "PREROLL")
  {
      prerollCalc()
  }
  else if(PROF == "FLOWER")
  {
    flowercalc();
  }
}

function S2Q()
{
  cleardivs();
  QOWPR = "QUANTITY";
  if(PROF == "PREROLL")
  {
      prerollCalc()
  }
  else if(PROF == "FLOWER")
  {
    flowercalc();
  }
}

function cleardivs()
{
  if(quantdiv)
    quantdiv.remove();

  if(swapbutt)
    swapbutt.remove();

  if(qantinput)
    qantinput.remove();

  if(calculateButt)
    calculateButt.remove();

  if(weightdiv)
    weightdiv.remove();

  if(prerollquanttext)
    prerollquanttext.remove();

  if(prerollWeighttext)
    prerollWeighttext.remove();

}
