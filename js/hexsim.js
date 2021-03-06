      function HexSim()
      {
	this.ha = new HexAudio();
	this.hv = new HexView();
	this.hl = new HexLife();


	this.step = function() {
	  this.hl.update();
	  if (this.hl.count() == 0) {
	    this.hl.seed();
	    console.log("RESET");
	  }
	  this.ha.update(this.hl);
	  this.hv.redraw(this.hl);
	}

	this.play = function () {
	  var start = new Date().getTime();
	  this.step();
	  var end = new Date().getTime();
// 	  console.log("Execution time: " + (end-start));
	  this.timer = setTimeout("document.hs.play()", 250);
	}

	this.stop = function () {
	  clearTimeout(this.timer);
	}

	this.clear = function() {
	  this.stop();
	  this.hl.clear();
	  this.hv.redraw(this.hl);
	}	
	
      }
