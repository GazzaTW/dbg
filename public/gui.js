function drawHand(hand) {
      for(var i = 0; i < hand.length; i++) {
        var img = document.createElement("img");
        img.src = images.get(hand[i].name);
        img.id = i;
        img.onclick=function(){
          socket.emit('debug', this.id);
        };
        document.getElementById("hand").appendChild(img);
      }
    }
    function drawInPlay(inPlay) {
      for(var i = 0; i < inPlay.length; i++) {
        var img = document.createElement("img");
        img.src = images.get(inPlay[i].name);
        img.id = i;
        document.getElementById("inPlay").appendChild(img);
      }
    }
    function drawOppHand(oppHand) {
      for(var i = 0; i < oppHand.length; i++) {
        var img = document.createElement("img");
        img.src = images.get("CardBack");
        img.id = i;
        document.getElementById("oppHand").appendChild(img);
      }
    }
    function drawOppInPlay(oppInPlay) {
      for(var i = 0; i < oppInPlay.length; i++) {
        var img = document.createElement("img");
        img.src = images.get(oppInPlay[i].name);
        img.id = i;
        document.getElementById("oppInPlay").appendChild(img);
      }
    }