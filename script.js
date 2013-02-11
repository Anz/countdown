/*******************************************************************************
 * Copyright (c) 2013, Roger S. Knecht
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met: 
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer. 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution. 
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * The views and conclusions contained in the software and documentation are those
 * of the authors and should not be interpreted as representing official policies, 
 * either expressed or implied, of the FreeBSD Project.
 ***********************************************************************************/

// CONTANTS
var endDate = new Date(2013, 7, 23, 17, 0);

window.requestAnimationFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
})();

$(document).ready(function() {
	daysElement = $('.box:eq(0)>p:eq(0)');
	hoursElement = $('.box:eq(1)>p:eq(0)');
	minutesElement = $('.box:eq(2)>p:eq(0)');
	secondsElement = $('.box:eq(3)>p:eq(0)');
	millisElement = $('.box:eq(4)>p:eq(0)');
	i = 0;
	requestAnimationFrame(step);
});

function step() {
	i++;
	var now = new Date();
	var millis = endDate.getTime() - now.getTime();
	var seconds = Math.floor(millis / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);

	daysElement.text(format(days, 3, 2));
	hoursElement.text(format(hours % 24, 2));
	minutesElement.text(format(minutes % 60, 2));
	secondsElement.text(format(seconds % 60, 2));
	millisElement.text(format(millis % 1000, 3));
	requestAnimationFrame(step);
}

function format(number, digits) {
	var str = '' + number;
	for (var i = str.length; i < digits; i++) {
		str = '0' + str;
	}
	return str;
}
