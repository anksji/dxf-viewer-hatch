import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
0, 0,.15625, 0,.25
`),
  false,
);
