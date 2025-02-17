import { Pattern, RegisterPattern } from "../../Pattern";

RegisterPattern(
  Pattern.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`),
);
