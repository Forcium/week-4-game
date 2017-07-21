$(document).ready(function() {

  // generates random number 19-120
  var randomNum = [Math.floor(Math.random() * 100) + 19];

  var win = 0;
  var loss = 0;

  // crystal amplitutde counter
  var amp = 0;

  // value for crystals from 1-12
  var cryst1 = Math.floor((Math.random()* 12) + 1);
  var cryst2 = Math.floor((Math.random()* 12) + 1);
  var cryst3 = Math.floor((Math.random()* 12) + 1);
  var cryst4 = Math.floor((Math.random()* 12) + 1);



  // check with onkeyup to view console for script output
  document.onkeyup = function(event) {
      console.log(randomNum + " random number for round");
      console.log(cryst1 + " c1");
      console.log(cryst2 + " c2");
      console.log(cryst3 + " c3");
      console.log(cryst4 + " c4");
  };

      // Number that needs to be matched
      $("#match").html(randomNum);


      // stacking amps from crystals
      $('#c1').click(function(){
	       amp = amp + cryst1;
          console.log (amp + " c1 amped up");
        $("#cAmp").html(amp);
        clickTotal();     //run function to check if need to update win/loss
      })
      $('#c2').click(function(){
	       amp = amp + cryst2;
          console.log (amp + " c2 amped up");
        $("#cAmp").html(amp);
        clickTotal();     //run function to check if need to update win/loss
      })
      $('#c3').click(function(){
	       amp = amp + cryst3;
          console.log (amp + " c3 amped up");
        $("#cAmp").html(amp);
        clickTotal();     //run function to check if need to update win/loss
      })
      $('#c4').click(function(){
	       amp = amp + cryst4;
          console.log (amp + " c4 amped up");
         $("#cAmp").html(amp);
         clickTotal();     //run function to check if need to update win/loss
      })

          var clickTotal = function (){
            if (amp == randomNum) {
              win = win + 1;
              $("#wincount").html(win);
                setTimeout(function(){
                  alert("Winner");
                  reset();
                }, 1);
            }
            else if(amp > randomNum){
              loss = loss + 1;
              $("#losscount").html(loss);
                setTimeout(function(){
                  alert("Loser");
                  reset();
                }, 1);
            }
          }

          var reset = function(){
	           amp = 0;
             randomNum = Math.floor((Math.random()* 100) + 19);
            $('#match').html(randomNum);
          	$('#cAmp').html(0);    //Remove all child nodes of the set of matched elements from the DOM.

          	  cryst1 = Math.floor((Math.random()* 12) + 1);
              cryst2 = Math.floor((Math.random()* 12) + 1);
              cryst3 = Math.floor((Math.random()* 12) + 1);
              cryst4 = Math.floor((Math.random()* 12) + 1);
          }


});
