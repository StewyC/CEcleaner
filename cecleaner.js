var findsetup;
var findand;
var scramble;
var cleanscramble;
var cleanscramble2;
var solution;
var okfinal;
var okfinalfinal;

function thingone(a) {
    var storige = [];
    var findcomment;
    var cleanit;
    var bckwrdsarray = [];
    var bckwrdsarray2 = [];
    var k = 0;
    var e = 0;
    var bckscram = [];

    findsetup = a.indexOf("setup=");
    findand = a.indexOf("&", findsetup);
    if (findand == -1) {
    findand = a.length;
    }
    
    scramble = a.substring(findsetup + 6, findand);
    cleanscramble = scramble.replace(/_/g, " ");
    cleanscramble2 = cleanscramble.replace(/-/g, "'");
    var scrambreak = cleanscramble2.split(" ");

    for (var j=scrambreak.length-1;j>-1;j--) {
      if (scrambreak[j].substring(1,2) == "'") {
        scrambreak[j] = scrambreak[j].slice(0,scrambreak[j].length-1);
      }
      else if (scrambreak[j].substring(1,3) == "2'") {
        scrambreak[j] = scrambreak[j].slice(0,scrambreak[j].length-1);
      }
      else if (scrambreak[j].substring(1,2) == "") {
        scrambreak[j] = scrambreak[j]+"'";
      }
      bckscram[e] = scrambreak[j];
      e++;
    }

    var setupfinal = bckscram.join(" ");

    var findalg = a.indexOf("alg=");
    var findand2 = a.indexOf("&", findalg);
    if (findand2 == -1) {
      findand2 = a.length;
    }
    
    solution = a.substring(findalg + 4, findand2);
    var cleansolution = solution.replace(/_/g, " ");
    var cleansolution2 = cleansolution.replace(/-/g, "'");
    var cleansolution3 = cleansolution2.replace(/%2F/g, "\/");
    var splitup = cleansolution3.split("%0A");
    
    for (var i=0;i<splitup.length;i++) {
      findcomment = splitup[i].indexOf("\/");
      cleanit = splitup[i].substring(0,findcomment-1);
      storige[i] = cleanit;
    }
    
    var oknow = storige.join(" ");
    
    var hmmso = oknow.split(" ");
    
    for (var j=hmmso.length-1;j>-1;j--) {
      if (hmmso[j].substring(0,2) == "r") {
        hmmso[j] = hmmso[j].replace("r","L x");
      }
      else if (hmmso[j].substring(0,2) == "r'") {
        hmmso[j] = hmmso[j].replace("r'","L' x'");
      }
      if (hmmso[j].substring(0,2) == "f") {
        hmmso[j] = hmmso[j].replace("f","B z");
      }
      else if (hmmso[j].substring(0,2) == "f'") {
        hmmso[j] = hmmso[j].replace("f'","B' z'");
      }
      if (hmmso[j].substring(0,2) == "u") {
        hmmso[j] = hmmso[j].replace("u","y d");
      }
      else if (hmmso[j].substring(0,2) == "u'") {
        hmmso[j] = hmmso[j].replace("u'","y' d'");
      }
      if (hmmso[j].substring(0,2) == "l") {
        hmmso[j] = hmmso[j].replace("l","R x'");
      }
      else if (hmmso[j].substring(0,2) == "l'") {
        hmmso[j] = hmmso[j].replace("l'","R' x");
      }
      if (hmmso[j].substring(0,2) == "b") {
        hmmso[j] = hmmso[j].replace("b","F z'");
      }
      else if (hmmso[j].substring(0,2) == "b'") {
        hmmso[j] = hmmso[j].replace("b'","F' z");
      }
      if (hmmso[j].substring(0,2) == "d") {
        hmmso[j] = hmmso[j].replace("d","U y'");
      }
      else if (hmmso[j].substring(0,2) == "d'") {
        hmmso[j] = hmmso[j].replace("d'","U' y");
      }
      bckwrdsarray[k] = hmmso[j];
      k++;
    }
    
    var nowagain = bckwrdsarray.join(" ");
    
    var nowagain2 = nowagain.split(" ");
    
    
    for (var j=0;j<nowagain2.length;j++) {
      if (nowagain2[j].substring(1,2) == "'") {
        nowagain2[j] = nowagain2[j].slice(0,nowagain2[j].length-1);
      }
      else if (nowagain2[j].substring(1,3) == "2'") {
        nowagain2[j] = nowagain2[j].slice(0,nowagain2[j].length-1);
      }
      else if (nowagain2[j].substring(1,2) == "") {
        nowagain2[j] = nowagain2[j]+"'";
      }
      bckwrdsarray2[j] = nowagain2[j];
    }
  
  okfinal = bckwrdsarray2.join(" ");
  okfinalfinal = setupfinal+" "+okfinal;
  
}



var inpoot = window.location.href;

thingone(inpoot);


  var replaceit = inpoot.replace(solution,okfinalfinal);
  window.location.href=replaceit;