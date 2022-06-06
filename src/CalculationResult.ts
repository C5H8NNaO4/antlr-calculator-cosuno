import { CalculatorContext } from './GeneratedAntlr/CalculatorParser';

export type CalculationOptions = {
  includeAst?: boolean;
};
export class CalculationResult {
  public ast: CalculatorContext = null;
  public isValid: boolean = false;
  public errorPosition: number | null = null;
  public errorMessage: string | null = null;
  public result: number = NaN;
}
