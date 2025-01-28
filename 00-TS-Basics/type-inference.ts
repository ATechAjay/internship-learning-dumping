let z = 54; // inferred as number, thi is type inference.

let y: number = 43;
// explicit type declaration
// this is type annotation

let variableName: number | string | boolean; // union type and number,string, and boolean is anotations.

//we can also anotate in functions
function test(t: number): number {
  return t;
}
