import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`),
  false,
);
