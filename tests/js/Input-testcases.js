/*
* @project YASMIJ.js, "Yet another simplex method implementation in Javascript"
* @author Larry Battle
* @license MIT License <http://www.opensource.org/licenses/mit-license>
* @date 07/02/2012
*/

tests.runInputTests = function(){
	module( "Input Class" );
	test( "test parse", function(){
		var x = Input.parse( "maximize", "x1 + 2x2 - x3", [
			"2x1+x2+x3 <= 14",
			"4x1+2x2+3x3<=28",
			"2x1+5x2+5x3<=30"
		]);
		equal( x.type, "maximize" );
		equal( x.z, "x1 + 2x2 - x3" );
		equal( x.constraints.length, 3 );
		deepEqual( x.terms.join(", "), "14, 28, 30, x1, x2, x3" );
	});
}