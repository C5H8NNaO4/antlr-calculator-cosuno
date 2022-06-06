type Tree = Record<string, Tree>;

export type CalculationOptions = {
  includeAst: boolean;
};
export class CalculationResult {
  public ast: Tree = null;
  public isValid: boolean = false;
  public errorPosition: number | null = null;
  public errorMessage: string | null = null;
  public result: number = NaN;
}
