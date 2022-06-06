export class FormulaErrorListener {
    constructor() {
        this._isValid = true;
        this._errorLocation = null;
        this._errorMessage = null;
    }
    get isValid() {
        return this._isValid;
    }
    get errorLocation() {
        return this._errorLocation;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this._isValid = false;
        this._errorLocation = column;
        this._errorMessage = msg;
    }
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
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    }
    ;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param conflictingAlts
     * @param configs
     */
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    }
    ;
    /**
     * Method stub - does nothing
     * @param recognizer
     * @param dfa
     * @param startIndex
     * @param stopIndex
     * @param prediction
     * @param configs
     */
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    }
    ;
    reportSubstitutionNotFound(errorLocation, substitution) {
        this._isValid = false;
        this._errorLocation = errorLocation;
        this._errorMessage = `The substitution '${substitution}' could not be resolved`;
    }
}
//# sourceMappingURL=FormulaErrorListener.js.map