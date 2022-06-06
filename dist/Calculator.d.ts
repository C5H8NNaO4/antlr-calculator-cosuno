import { CalculationOptions, CalculationResult } from './CalculationResult';
export declare class Calculator {
    static calculate(formula: string, substitutionResolver?: (substitution: string) => number, { includeAst }?: CalculationOptions): CalculationResult;
}
