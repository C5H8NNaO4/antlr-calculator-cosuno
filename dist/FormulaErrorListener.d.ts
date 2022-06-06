export declare class FormulaErrorListener {
    private _isValid;
    private _errorLocation;
    private _errorMessage;
    get isValid(): boolean;
    get errorLocation(): number;
    get errorMessage(): string;
    syntaxError(recognizer: any, offendingSymbol: any, line: any, column: any, msg: any, e: any): void;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param exact
     * @param ambigAlts
     * @param configs
     */
    reportAmbiguity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, exact: any, ambigAlts: any, configs: any): void;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param conflictingAlts
     * @param configs
     */
    reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: any, stopIndex: any, conflictingAlts: any, configs: any): void;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param prediction
     * @param configs
     */
    reportContextSensitivity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, prediction: any, configs: any): void;
    reportSubstitutionNotFound(errorLocation: number, substitution: string): void;
}
