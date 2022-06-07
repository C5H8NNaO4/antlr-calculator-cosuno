import { CalculatorContext } from './GeneratedAntlr/CalculatorParser';
export declare type CalculationOptions = {
    includeAst?: boolean;
};
export declare class CalculationResult {
    ast: CalculatorContext;
    isValid: boolean;
    errorPosition: number | null;
    errorMessage: string | null;
    result: number;
}
