import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,.125, .125,-.125
90, 0,0, 0,.125, .125,-.125
`),
  false,
);
