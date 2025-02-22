﻿import { CharStreams, CommonTokenStream } from 'antlr4ts';

import { CalculationOptions, CalculationResult } from './CalculationResult';
import { CalculatorLexer } from './GeneratedAntlr/CalculatorLexer';
import { CalculatorParser } from './GeneratedAntlr/CalculatorParser';
import { FormulaErrorListener } from './FormulaErrorListener';
import { FormulaVisitor } from './FormulaVisitor';

export class Calculator {
  public static calculate(
    formula: string,
    substitutionResolver?: (substitution: string) => number,
    { includeAst = false }: CalculationOptions = {},
  ): CalculationResult {
    var result = new CalculationResult();
    if (formula == null || /^\s*$/.test(formula)) {
      result.result = 0;
      result.isValid = true;
      return result;
    }
    var inputStream = CharStreams.fromString(formula);
    var lexer = new CalculatorLexer(inputStream);
    var commonTokenStream = new CommonTokenStream(lexer);
    var parser = new CalculatorParser(commonTokenStream);
    var errorListener = new FormulaErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    if (!substitutionResolver) {
      substitutionResolver = (_) => null;
    }

    var visitor = new FormulaVisitor(substitutionResolver, errorListener);
    var parseTree = parser.calculator();
    var visitorResult = visitor.visitCalculator(parseTree);
    if (errorListener.isValid) {
      if (isNaN(visitorResult)) {
        result.isValid = false;
        result.result = NaN;
      } else {
        result.isValid = true;
        result.result = visitorResult;
      }
      return result;
    }

    if (includeAst) {
      result.ast = parseTree;
    }

    result.isValid = false;
    result.errorPosition = errorListener.errorLocation;
    result.errorMessage = errorListener.errorMessage;
    result.result = NaN;
    return result;
  }
}
