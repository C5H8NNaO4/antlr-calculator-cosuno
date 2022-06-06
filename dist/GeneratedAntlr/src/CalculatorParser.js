// Generated from ./src/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
export class CalculatorParser extends Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(CalculatorParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CalculatorParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Calculator.g4"; }
    // @Override
    get ruleNames() { return CalculatorParser.ruleNames; }
    // @Override
    get serializedATN() { return CalculatorParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    calculator() {
        let _localctx = new CalculatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CalculatorParser.RULE_calculator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 8;
                this.expression(0);
                this.state = 10;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CalculatorParser.T__0) {
                    {
                        this.state = 9;
                        this.match(CalculatorParser.T__0);
                    }
                }
                this.state = 13;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CalculatorParser.SEMICOLON) {
                    {
                        this.state = 12;
                        this.trailingComment();
                    }
                }
                this.state = 15;
                this.compileUnit();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 2;
        this.enterRecursionRule(_localctx, 2, CalculatorParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            _localctx = new UnaryContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 18;
                            this.match(CalculatorParser.SUB);
                            this.state = 19;
                            this.expression(45);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new UnaryPlusContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 20;
                            this.match(CalculatorParser.ADD);
                            this.state = 21;
                            this.expression(44);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new FloorContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 22;
                            this.match(CalculatorParser.FLOOR);
                            this.state = 23;
                            this.expression(43);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new CeilContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 24;
                            this.match(CalculatorParser.CEIL);
                            this.state = 25;
                            this.expression(42);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new AbsContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 26;
                            this.match(CalculatorParser.ABS);
                            this.state = 27;
                            this.expression(41);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new RoundkContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 28;
                            this.match(CalculatorParser.ROUNDK);
                            this.state = 29;
                            this.match(CalculatorParser.T__1);
                            this.state = 30;
                            this.expression(0);
                            this.state = 31;
                            this.match(CalculatorParser.SEMICOLON);
                            this.state = 32;
                            this.expression(0);
                            this.state = 33;
                            this.match(CalculatorParser.T__2);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new RoundContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 35;
                            this.match(CalculatorParser.ROUND);
                            this.state = 36;
                            this.expression(39);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new TruncContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 37;
                            this.match(CalculatorParser.TRUNC);
                            this.state = 38;
                            this.expression(38);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new SinContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 39;
                            this.match(CalculatorParser.SIN);
                            this.state = 40;
                            this.expression(37);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new CosContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 41;
                            this.match(CalculatorParser.COS);
                            this.state = 42;
                            this.expression(36);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new TanContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 43;
                            this.match(CalculatorParser.TAN);
                            this.state = 44;
                            this.expression(35);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new CotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 45;
                            this.match(CalculatorParser.COT);
                            this.state = 46;
                            this.expression(34);
                        }
                        break;
                    case 13:
                        {
                            _localctx = new SinhContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 47;
                            this.match(CalculatorParser.SINH);
                            this.state = 48;
                            this.expression(33);
                        }
                        break;
                    case 14:
                        {
                            _localctx = new CoshContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 49;
                            this.match(CalculatorParser.COSH);
                            this.state = 50;
                            this.expression(32);
                        }
                        break;
                    case 15:
                        {
                            _localctx = new TanhContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 51;
                            this.match(CalculatorParser.TANH);
                            this.state = 52;
                            this.expression(31);
                        }
                        break;
                    case 16:
                        {
                            _localctx = new ASIContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 53;
                            this.match(CalculatorParser.ASI);
                            this.state = 54;
                            this.expression(30);
                        }
                        break;
                    case 17:
                        {
                            _localctx = new ArccosContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 55;
                            this.match(CalculatorParser.ARCCOS);
                            this.state = 56;
                            this.expression(29);
                        }
                        break;
                    case 18:
                        {
                            _localctx = new ArctanContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 57;
                            this.match(CalculatorParser.ARCTAN);
                            this.state = 58;
                            this.expression(28);
                        }
                        break;
                    case 19:
                        {
                            _localctx = new Arctan2Context(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 59;
                            this.match(CalculatorParser.ARCTAN2);
                            this.state = 60;
                            this.match(CalculatorParser.T__1);
                            this.state = 61;
                            this.expression(0);
                            this.state = 62;
                            this.match(CalculatorParser.SEMICOLON);
                            this.state = 63;
                            this.expression(0);
                            this.state = 64;
                            this.match(CalculatorParser.T__2);
                        }
                        break;
                    case 20:
                        {
                            _localctx = new ArccotContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 66;
                            this.match(CalculatorParser.ARCCOT);
                            this.state = 67;
                            this.expression(26);
                        }
                        break;
                    case 21:
                        {
                            _localctx = new ExpContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 68;
                            this.match(CalculatorParser.EXP);
                            this.state = 69;
                            this.expression(25);
                        }
                        break;
                    case 22:
                        {
                            _localctx = new LnContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 70;
                            this.match(CalculatorParser.LN);
                            this.state = 71;
                            this.expression(24);
                        }
                        break;
                    case 23:
                        {
                            _localctx = new EexContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 72;
                            this.match(CalculatorParser.EEX);
                            this.state = 73;
                            this.expression(23);
                        }
                        break;
                    case 24:
                        {
                            _localctx = new LogContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 74;
                            this.match(CalculatorParser.LOG);
                            this.state = 75;
                            this.expression(22);
                        }
                        break;
                    case 25:
                        {
                            _localctx = new RadContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 76;
                            this.match(CalculatorParser.RAD);
                            this.state = 77;
                            this.expression(21);
                        }
                        break;
                    case 26:
                        {
                            _localctx = new DegContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 78;
                            this.match(CalculatorParser.DEG);
                            this.state = 79;
                            this.expression(20);
                        }
                        break;
                    case 27:
                        {
                            _localctx = new SqrtContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 80;
                            this.match(CalculatorParser.SQRT);
                            this.state = 81;
                            this.expression(19);
                        }
                        break;
                    case 28:
                        {
                            _localctx = new SqrContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 82;
                            this.match(CalculatorParser.SQR);
                            this.state = 83;
                            this.expression(18);
                        }
                        break;
                    case 29:
                        {
                            _localctx = new ParenthesisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 84;
                            this.match(CalculatorParser.T__1);
                            this.state = 85;
                            this.expression(0);
                            this.state = 86;
                            this.match(CalculatorParser.T__2);
                        }
                        break;
                    case 30:
                        {
                            _localctx = new MultContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 88;
                            this.match(CalculatorParser.T__1);
                            this.state = 89;
                            this.expression(0);
                            this.state = 90;
                            this.match(CalculatorParser.T__2);
                            this.state = 91;
                            this.expression(8);
                        }
                        break;
                    case 31:
                        {
                            _localctx = new MinContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 93;
                            this.match(CalculatorParser.MIN);
                            this.state = 94;
                            this.match(CalculatorParser.T__1);
                            this.state = 95;
                            _localctx._expression = this.expression(0);
                            _localctx._expr.push(_localctx._expression);
                            this.state = 100;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === CalculatorParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 96;
                                        this.match(CalculatorParser.SEMICOLON);
                                        this.state = 97;
                                        _localctx._expression = this.expression(0);
                                        _localctx._expr.push(_localctx._expression);
                                    }
                                }
                                this.state = 102;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 103;
                            this.match(CalculatorParser.T__2);
                        }
                        break;
                    case 32:
                        {
                            _localctx = new MaxContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 105;
                            this.match(CalculatorParser.MAX);
                            this.state = 106;
                            this.match(CalculatorParser.T__1);
                            this.state = 107;
                            _localctx._expression = this.expression(0);
                            _localctx._expr.push(_localctx._expression);
                            this.state = 112;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === CalculatorParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 108;
                                        this.match(CalculatorParser.SEMICOLON);
                                        this.state = 109;
                                        _localctx._expression = this.expression(0);
                                        _localctx._expr.push(_localctx._expression);
                                    }
                                }
                                this.state = 114;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 115;
                            this.match(CalculatorParser.T__2);
                        }
                        break;
                    case 33:
                        {
                            _localctx = new NumberContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 117;
                            this.match(CalculatorParser.NUMBER);
                        }
                        break;
                    case 34:
                        {
                            _localctx = new PiContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 118;
                            this.match(CalculatorParser.PI);
                            this.state = 120;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 119;
                                        this.match(CalculatorParser.T__8);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 35:
                        {
                            _localctx = new EulerContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 122;
                            this.match(CalculatorParser.EULER);
                        }
                        break;
                    case 36:
                        {
                            _localctx = new SubstitutionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 123;
                            this.match(CalculatorParser.SUBSTITUTION);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 157;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 155;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExponentContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 126;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 127;
                                        this.match(CalculatorParser.EXPONENT);
                                        this.state = 128;
                                        this.expression(18);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new NegExponentContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 129;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 130;
                                        this.match(CalculatorParser.NEGEXPONENT);
                                        this.state = 131;
                                        this.expression(17);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new PowContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 132;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 133;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CalculatorParser.T__3 || _la === CalculatorParser.T__4)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 134;
                                        this.expression(16);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ModContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 135;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 136;
                                        _la = this._input.LA(1);
                                        if (!(_la === CalculatorParser.T__5 || _la === CalculatorParser.MOD)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 137;
                                        this.expression(15);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new WholeContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 138;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 139;
                                        this.match(CalculatorParser.WHOLE);
                                        this.state = 140;
                                        this.expression(14);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new SqRootContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 141;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 142;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CalculatorParser.T__6 || _la === CalculatorParser.T__7)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 143;
                                        this.expression(13);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new MulDivContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 144;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 145;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CalculatorParser.MUL || _la === CalculatorParser.DIV)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 146;
                                        this.expression(12);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 147;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 148;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CalculatorParser.ADD || _la === CalculatorParser.SUB)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 149;
                                        this.expression(6);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new MultContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
                                        this.state = 150;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 151;
                                        this.match(CalculatorParser.T__1);
                                        this.state = 152;
                                        this.expression(0);
                                        this.state = 153;
                                        this.match(CalculatorParser.T__2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 159;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    trailingComment() {
        let _localctx = new TrailingCommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CalculatorParser.RULE_trailingComment);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(CalculatorParser.SEMICOLON);
                this.state = 164;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1 + 1) {
                        {
                            {
                                this.state = 161;
                                this.matchWildcard();
                            }
                        }
                    }
                    this.state = 166;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compileUnit() {
        let _localctx = new CompileUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CalculatorParser.RULE_compileUnit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(CalculatorParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 17);
            case 1:
                return this.precpred(this._ctx, 16);
            case 2:
                return this.precpred(this._ctx, 15);
            case 3:
                return this.precpred(this._ctx, 14);
            case 4:
                return this.precpred(this._ctx, 13);
            case 5:
                return this.precpred(this._ctx, 12);
            case 6:
                return this.precpred(this._ctx, 11);
            case 7:
                return this.precpred(this._ctx, 5);
            case 8:
                return this.precpred(this._ctx, 9);
        }
        return true;
    }
    static get _ATN() {
        if (!CalculatorParser.__ATN) {
            CalculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorParser._serializedATN));
        }
        return CalculatorParser.__ATN;
    }
}
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.NUMBER = 10;
CalculatorParser.FLOAT = 11;
CalculatorParser.DIGIT = 12;
CalculatorParser.MOD = 13;
CalculatorParser.WHOLE = 14;
CalculatorParser.MUL = 15;
CalculatorParser.DIV = 16;
CalculatorParser.ADD = 17;
CalculatorParser.SUB = 18;
CalculatorParser.PI = 19;
CalculatorParser.EXPONENT = 20;
CalculatorParser.NEGEXPONENT = 21;
CalculatorParser.EULER = 22;
CalculatorParser.SQRT = 23;
CalculatorParser.SQR = 24;
CalculatorParser.FLOOR = 25;
CalculatorParser.CEIL = 26;
CalculatorParser.ABS = 27;
CalculatorParser.ROUNDK = 28;
CalculatorParser.ROUND = 29;
CalculatorParser.TRUNC = 30;
CalculatorParser.SIN = 31;
CalculatorParser.COS = 32;
CalculatorParser.TAN = 33;
CalculatorParser.COT = 34;
CalculatorParser.SINH = 35;
CalculatorParser.COSH = 36;
CalculatorParser.TANH = 37;
CalculatorParser.ASI = 38;
CalculatorParser.ARCCOS = 39;
CalculatorParser.ARCTAN = 40;
CalculatorParser.ARCTAN2 = 41;
CalculatorParser.ARCCOT = 42;
CalculatorParser.EXP = 43;
CalculatorParser.LN = 44;
CalculatorParser.EEX = 45;
CalculatorParser.LOG = 46;
CalculatorParser.RAD = 47;
CalculatorParser.DEG = 48;
CalculatorParser.MIN = 49;
CalculatorParser.MAX = 50;
CalculatorParser.WS = 51;
CalculatorParser.COM = 52;
CalculatorParser.SUBSTITUTION = 53;
CalculatorParser.SEMICOLON = 54;
CalculatorParser.INVALID = 55;
CalculatorParser.RULE_calculator = 0;
CalculatorParser.RULE_expression = 1;
CalculatorParser.RULE_trailingComment = 2;
CalculatorParser.RULE_compileUnit = 3;
// tslint:disable:no-trailing-whitespace
CalculatorParser.ruleNames = [
    "calculator", "expression", "trailingComment", "compileUnit",
];
CalculatorParser._LITERAL_NAMES = [
    undefined, "'='", "'('", "')'", "'^'", "'**'", "'%'", "'~'", "'//'", "'()'",
    undefined, undefined, undefined, undefined, undefined, "'*'", "'/'", "'+'",
    "'-'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "';'",
];
CalculatorParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE",
    "MUL", "DIV", "ADD", "SUB", "PI", "EXPONENT", "NEGEXPONENT", "EULER",
    "SQRT", "SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", "ROUND", "TRUNC", "SIN",
    "COS", "TAN", "COT", "SINH", "COSH", "TANH", "ASI", "ARCCOS", "ARCTAN",
    "ARCTAN2", "ARCCOT", "EXP", "LN", "EEX", "LOG", "RAD", "DEG", "MIN", "MAX",
    "WS", "COM", "SUBSTITUTION", "SEMICOLON", "INVALID",
];
CalculatorParser.VOCABULARY = new VocabularyImpl(CalculatorParser._LITERAL_NAMES, CalculatorParser._SYMBOLIC_NAMES, []);
CalculatorParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\xAC\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x05\x02" +
    "\r\n\x02\x03\x02\x05\x02\x10\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03e\n\x03\f" +
    "\x03\x0E\x03h\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x07\x03q\n\x03\f\x03\x0E\x03t\v\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x05\x03{\n\x03\x03\x03\x03\x03\x05\x03\x7F\n\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x07\x03\x9E\n\x03\f\x03\x0E\x03\xA1\v\x03\x03\x04\x03\x04\x07\x04" +
    "\xA5\n\x04\f\x04\x0E\x04\xA8\v\x04\x03\x05\x03\x05\x03\x05\x03\xA6\x02" +
    "\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x07\x03\x02\x06\x07\x04" +
    "\x02\b\b\x0F\x0F\x03\x02\t\n\x03\x02\x11\x12\x03\x02\x13\x14\x02\xD9\x02" +
    "\n\x03\x02\x02\x02\x04~\x03\x02\x02\x02\x06\xA2\x03\x02\x02\x02\b\xA9" +
    "\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\r\x07\x03\x02\x02\f\v\x03\x02\x02" +
    "\x02\f\r\x03\x02\x02\x02\r\x0F\x03\x02\x02\x02\x0E\x10\x05\x06\x04\x02" +
    "\x0F\x0E\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02" +
    "\x11\x12\x05\b\x05\x02\x12\x03\x03\x02\x02\x02\x13\x14\b\x03\x01\x02\x14" +
    "\x15\x07\x14\x02\x02\x15\x7F\x05\x04\x03/\x16\x17\x07\x13\x02\x02\x17" +
    "\x7F\x05\x04\x03.\x18\x19\x07\x1B\x02\x02\x19\x7F\x05\x04\x03-\x1A\x1B" +
    "\x07\x1C\x02\x02\x1B\x7F\x05\x04\x03,\x1C\x1D\x07\x1D\x02\x02\x1D\x7F" +
    "\x05\x04\x03+\x1E\x1F\x07\x1E\x02\x02\x1F \x07\x04\x02\x02 !\x05\x04\x03" +
    "\x02!\"\x078\x02\x02\"#\x05\x04\x03\x02#$\x07\x05\x02\x02$\x7F\x03\x02" +
    "\x02\x02%&\x07\x1F\x02\x02&\x7F\x05\x04\x03)\'(\x07 \x02\x02(\x7F\x05" +
    "\x04\x03()*\x07!\x02\x02*\x7F\x05\x04\x03\'+,\x07\"\x02\x02,\x7F\x05\x04" +
    "\x03&-.\x07#\x02\x02.\x7F\x05\x04\x03%/0\x07$\x02\x020\x7F\x05\x04\x03" +
    "$12\x07%\x02\x022\x7F\x05\x04\x03#34\x07&\x02\x024\x7F\x05\x04\x03\"5" +
    "6\x07\'\x02\x026\x7F\x05\x04\x03!78\x07(\x02\x028\x7F\x05\x04\x03 9:\x07" +
    ")\x02\x02:\x7F\x05\x04\x03\x1F;<\x07*\x02\x02<\x7F\x05\x04\x03\x1E=>\x07" +
    "+\x02\x02>?\x07\x04\x02\x02?@\x05\x04\x03\x02@A\x078\x02\x02AB\x05\x04" +
    "\x03\x02BC\x07\x05\x02\x02C\x7F\x03\x02\x02\x02DE\x07,\x02\x02E\x7F\x05" +
    "\x04\x03\x1CFG\x07-\x02\x02G\x7F\x05\x04\x03\x1BHI\x07.\x02\x02I\x7F\x05" +
    "\x04\x03\x1AJK\x07/\x02\x02K\x7F\x05\x04\x03\x19LM\x070\x02\x02M\x7F\x05" +
    "\x04\x03\x18NO\x071\x02\x02O\x7F\x05\x04\x03\x17PQ\x072\x02\x02Q\x7F\x05" +
    "\x04\x03\x16RS\x07\x19\x02\x02S\x7F\x05\x04\x03\x15TU\x07\x1A\x02\x02" +
    "U\x7F\x05\x04\x03\x14VW\x07\x04\x02\x02WX\x05\x04\x03\x02XY\x07\x05\x02" +
    "\x02Y\x7F\x03\x02\x02\x02Z[\x07\x04\x02\x02[\\\x05\x04\x03\x02\\]\x07" +
    "\x05\x02\x02]^\x05\x04\x03\n^\x7F\x03\x02\x02\x02_`\x073\x02\x02`a\x07" +
    "\x04\x02\x02af\x05\x04\x03\x02bc\x078\x02\x02ce\x05\x04\x03\x02db\x03" +
    "\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03" +
    "\x02\x02\x02hf\x03\x02\x02\x02ij\x07\x05\x02\x02j\x7F\x03\x02\x02\x02" +
    "kl\x074\x02\x02lm\x07\x04\x02\x02mr\x05\x04\x03\x02no\x078\x02\x02oq\x05" +
    "\x04\x03\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
    "\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x07\x05\x02\x02v\x7F" +
    "\x03\x02\x02\x02w\x7F\x07\f\x02\x02xz\x07\x15\x02\x02y{\x07\v\x02\x02" +
    "zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x7F\x03\x02\x02\x02|\x7F\x07\x18" +
    "\x02\x02}\x7F\x077\x02\x02~\x13\x03\x02\x02\x02~\x16\x03\x02\x02\x02~" +
    "\x18\x03\x02\x02\x02~\x1A\x03\x02\x02\x02~\x1C\x03\x02\x02\x02~\x1E\x03" +
    "\x02\x02\x02~%\x03\x02\x02\x02~\'\x03\x02\x02\x02~)\x03\x02\x02\x02~+" +
    "\x03\x02\x02\x02~-\x03\x02\x02\x02~/\x03\x02\x02\x02~1\x03\x02\x02\x02" +
    "~3\x03\x02\x02\x02~5\x03\x02\x02\x02~7\x03\x02\x02\x02~9\x03\x02\x02\x02" +
    "~;\x03\x02\x02\x02~=\x03\x02\x02\x02~D\x03\x02\x02\x02~F\x03\x02\x02\x02" +
    "~H\x03\x02\x02\x02~J\x03\x02\x02\x02~L\x03\x02\x02\x02~N\x03\x02\x02\x02" +
    "~P\x03\x02\x02\x02~R\x03\x02\x02\x02~T\x03\x02\x02\x02~V\x03\x02\x02\x02" +
    "~Z\x03\x02\x02\x02~_\x03\x02\x02\x02~k\x03\x02\x02\x02~w\x03\x02\x02\x02" +
    "~x\x03\x02\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x9F\x03\x02" +
    "\x02\x02\x80\x81\f\x13\x02\x02\x81\x82\x07\x16\x02\x02\x82\x9E\x05\x04" +
    "\x03\x14\x83\x84\f\x12\x02\x02\x84\x85\x07\x17\x02\x02\x85\x9E\x05\x04" +
    "\x03\x13\x86\x87\f\x11\x02\x02\x87\x88\t\x02\x02\x02\x88\x9E\x05\x04\x03" +
    "\x12\x89\x8A\f\x10\x02\x02\x8A\x8B\t\x03\x02\x02\x8B\x9E\x05\x04\x03\x11" +
    "\x8C\x8D\f\x0F\x02\x02\x8D\x8E\x07\x10\x02\x02\x8E\x9E\x05\x04\x03\x10" +
    "\x8F\x90\f\x0E\x02\x02\x90\x91\t\x04\x02\x02\x91\x9E\x05\x04\x03\x0F\x92" +
    "\x93\f\r\x02\x02\x93\x94\t\x05\x02\x02\x94\x9E\x05\x04\x03\x0E\x95\x96" +
    "\f\x07\x02\x02\x96\x97\t\x06\x02\x02\x97\x9E\x05\x04\x03\b\x98\x99\f\v" +
    "\x02\x02\x99\x9A\x07\x04\x02\x02\x9A\x9B\x05\x04\x03\x02\x9B\x9C\x07\x05" +
    "\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x80\x03\x02\x02\x02\x9D\x83\x03\x02" +
    "\x02\x02\x9D\x86\x03\x02\x02\x02\x9D\x89\x03\x02\x02\x02\x9D\x8C\x03\x02" +
    "\x02\x02\x9D\x8F\x03\x02\x02\x02\x9D\x92\x03\x02\x02\x02\x9D\x95\x03\x02" +
    "\x02\x02\x9D\x98\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02" +
    "\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x05\x03\x02\x02\x02\xA1\x9F\x03\x02" +
    "\x02\x02\xA2\xA6\x078\x02\x02\xA3\xA5\v\x02\x02\x02\xA4\xA3\x03\x02\x02" +
    "\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02" +
    "\x02\xA7\x07\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x07\x02\x02" +
    "\x03\xAA\t\x03\x02\x02\x02\v\f\x0Ffrz~\x9D\x9F\xA6";
export class CalculatorContext extends ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    compileUnit() {
        return this.getRuleContext(0, CompileUnitContext);
    }
    trailingComment() {
        return this.tryGetRuleContext(0, TrailingCommentContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculatorParser.RULE_calculator; }
    // @Override
    enterRule(listener) {
        if (listener.enterCalculator) {
            listener.enterCalculator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCalculator) {
            listener.exitCalculator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCalculator) {
            return visitor.visitCalculator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculatorParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class UnaryContext extends ExpressionContext {
    SUB() { return this.getToken(CalculatorParser.SUB, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnary) {
            listener.enterUnary(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnary) {
            listener.exitUnary(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnary) {
            return visitor.visitUnary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryPlusContext extends ExpressionContext {
    ADD() { return this.getToken(CalculatorParser.ADD, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryPlus) {
            listener.enterUnaryPlus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryPlus) {
            listener.exitUnaryPlus(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryPlus) {
            return visitor.visitUnaryPlus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FloorContext extends ExpressionContext {
    FLOOR() { return this.getToken(CalculatorParser.FLOOR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFloor) {
            listener.enterFloor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFloor) {
            listener.exitFloor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFloor) {
            return visitor.visitFloor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CeilContext extends ExpressionContext {
    CEIL() { return this.getToken(CalculatorParser.CEIL, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCeil) {
            listener.enterCeil(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCeil) {
            listener.exitCeil(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCeil) {
            return visitor.visitCeil(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AbsContext extends ExpressionContext {
    ABS() { return this.getToken(CalculatorParser.ABS, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAbs) {
            listener.enterAbs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAbs) {
            listener.exitAbs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAbs) {
            return visitor.visitAbs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RoundkContext extends ExpressionContext {
    ROUNDK() { return this.getToken(CalculatorParser.ROUNDK, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMICOLON() { return this.getToken(CalculatorParser.SEMICOLON, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRoundk) {
            listener.enterRoundk(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRoundk) {
            listener.exitRoundk(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRoundk) {
            return visitor.visitRoundk(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RoundContext extends ExpressionContext {
    ROUND() { return this.getToken(CalculatorParser.ROUND, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRound) {
            listener.enterRound(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRound) {
            listener.exitRound(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRound) {
            return visitor.visitRound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TruncContext extends ExpressionContext {
    TRUNC() { return this.getToken(CalculatorParser.TRUNC, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTrunc) {
            listener.enterTrunc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrunc) {
            listener.exitTrunc(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTrunc) {
            return visitor.visitTrunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SinContext extends ExpressionContext {
    SIN() { return this.getToken(CalculatorParser.SIN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSin) {
            listener.enterSin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSin) {
            listener.exitSin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSin) {
            return visitor.visitSin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CosContext extends ExpressionContext {
    COS() { return this.getToken(CalculatorParser.COS, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCos) {
            listener.enterCos(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCos) {
            listener.exitCos(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCos) {
            return visitor.visitCos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TanContext extends ExpressionContext {
    TAN() { return this.getToken(CalculatorParser.TAN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTan) {
            listener.enterTan(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTan) {
            listener.exitTan(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTan) {
            return visitor.visitTan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CotContext extends ExpressionContext {
    COT() { return this.getToken(CalculatorParser.COT, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCot) {
            listener.enterCot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCot) {
            listener.exitCot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCot) {
            return visitor.visitCot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SinhContext extends ExpressionContext {
    SINH() { return this.getToken(CalculatorParser.SINH, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSinh) {
            listener.enterSinh(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSinh) {
            listener.exitSinh(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSinh) {
            return visitor.visitSinh(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CoshContext extends ExpressionContext {
    COSH() { return this.getToken(CalculatorParser.COSH, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCosh) {
            listener.enterCosh(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCosh) {
            listener.exitCosh(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCosh) {
            return visitor.visitCosh(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TanhContext extends ExpressionContext {
    TANH() { return this.getToken(CalculatorParser.TANH, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTanh) {
            listener.enterTanh(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTanh) {
            listener.exitTanh(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTanh) {
            return visitor.visitTanh(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ASIContext extends ExpressionContext {
    ASI() { return this.getToken(CalculatorParser.ASI, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterASI) {
            listener.enterASI(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitASI) {
            listener.exitASI(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitASI) {
            return visitor.visitASI(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArccosContext extends ExpressionContext {
    ARCCOS() { return this.getToken(CalculatorParser.ARCCOS, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArccos) {
            listener.enterArccos(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArccos) {
            listener.exitArccos(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArccos) {
            return visitor.visitArccos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArctanContext extends ExpressionContext {
    ARCTAN() { return this.getToken(CalculatorParser.ARCTAN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArctan) {
            listener.enterArctan(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArctan) {
            listener.exitArctan(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArctan) {
            return visitor.visitArctan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Arctan2Context extends ExpressionContext {
    ARCTAN2() { return this.getToken(CalculatorParser.ARCTAN2, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMICOLON() { return this.getToken(CalculatorParser.SEMICOLON, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArctan2) {
            listener.enterArctan2(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArctan2) {
            listener.exitArctan2(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArctan2) {
            return visitor.visitArctan2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArccotContext extends ExpressionContext {
    ARCCOT() { return this.getToken(CalculatorParser.ARCCOT, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArccot) {
            listener.enterArccot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArccot) {
            listener.exitArccot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArccot) {
            return visitor.visitArccot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpContext extends ExpressionContext {
    EXP() { return this.getToken(CalculatorParser.EXP, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExp) {
            listener.enterExp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExp) {
            listener.exitExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExp) {
            return visitor.visitExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LnContext extends ExpressionContext {
    LN() { return this.getToken(CalculatorParser.LN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLn) {
            listener.enterLn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLn) {
            listener.exitLn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLn) {
            return visitor.visitLn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EexContext extends ExpressionContext {
    EEX() { return this.getToken(CalculatorParser.EEX, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEex) {
            listener.enterEex(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEex) {
            listener.exitEex(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEex) {
            return visitor.visitEex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogContext extends ExpressionContext {
    LOG() { return this.getToken(CalculatorParser.LOG, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLog) {
            listener.enterLog(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLog) {
            listener.exitLog(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLog) {
            return visitor.visitLog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RadContext extends ExpressionContext {
    RAD() { return this.getToken(CalculatorParser.RAD, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRad) {
            listener.enterRad(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRad) {
            listener.exitRad(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRad) {
            return visitor.visitRad(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DegContext extends ExpressionContext {
    DEG() { return this.getToken(CalculatorParser.DEG, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDeg) {
            listener.enterDeg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeg) {
            listener.exitDeg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeg) {
            return visitor.visitDeg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SqrtContext extends ExpressionContext {
    SQRT() { return this.getToken(CalculatorParser.SQRT, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSqrt) {
            listener.enterSqrt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSqrt) {
            listener.exitSqrt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSqrt) {
            return visitor.visitSqrt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SqrContext extends ExpressionContext {
    SQR() { return this.getToken(CalculatorParser.SQR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSqr) {
            listener.enterSqr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSqr) {
            listener.exitSqr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSqr) {
            return visitor.visitSqr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExponentContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    EXPONENT() { return this.getToken(CalculatorParser.EXPONENT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExponent) {
            listener.enterExponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExponent) {
            listener.exitExponent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExponent) {
            return visitor.visitExponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegExponentContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    NEGEXPONENT() { return this.getToken(CalculatorParser.NEGEXPONENT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNegExponent) {
            listener.enterNegExponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNegExponent) {
            listener.exitNegExponent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNegExponent) {
            return visitor.visitNegExponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PowContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPow) {
            listener.enterPow(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPow) {
            listener.exitPow(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPow) {
            return visitor.visitPow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MOD() { return this.getToken(CalculatorParser.MOD, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMod) {
            listener.enterMod(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMod) {
            listener.exitMod(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMod) {
            return visitor.visitMod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WholeContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    WHOLE() { return this.getToken(CalculatorParser.WHOLE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterWhole) {
            listener.enterWhole(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhole) {
            listener.exitWhole(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhole) {
            return visitor.visitWhole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SqRootContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSqRoot) {
            listener.enterSqRoot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSqRoot) {
            listener.exitSqRoot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSqRoot) {
            return visitor.visitSqRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MUL() { return this.tryGetToken(CalculatorParser.MUL, 0); }
    DIV() { return this.tryGetToken(CalculatorParser.DIV, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterMulDiv) {
            listener.enterMulDiv(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMulDiv) {
            listener.exitMulDiv(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMulDiv) {
            return visitor.visitMulDiv(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesisContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesis) {
            listener.enterParenthesis(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesis) {
            listener.exitParenthesis(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesis) {
            return visitor.visitParenthesis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMult) {
            listener.enterMult(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMult) {
            listener.exitMult(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMult) {
            return visitor.visitMult(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MinContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._expr = [];
        this.copyFrom(ctx);
    }
    MIN() { return this.getToken(CalculatorParser.MIN, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(CalculatorParser.SEMICOLON);
        }
        else {
            return this.getToken(CalculatorParser.SEMICOLON, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMin) {
            listener.enterMin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMin) {
            listener.exitMin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMin) {
            return visitor.visitMin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MaxContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._expr = [];
        this.copyFrom(ctx);
    }
    MAX() { return this.getToken(CalculatorParser.MAX, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(CalculatorParser.SEMICOLON);
        }
        else {
            return this.getToken(CalculatorParser.SEMICOLON, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMax) {
            listener.enterMax(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMax) {
            listener.exitMax(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMax) {
            return visitor.visitMax(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSubContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ADD() { return this.tryGetToken(CalculatorParser.ADD, 0); }
    SUB() { return this.tryGetToken(CalculatorParser.SUB, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterAddSub) {
            listener.enterAddSub(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddSub) {
            listener.exitAddSub(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberContext extends ExpressionContext {
    NUMBER() { return this.getToken(CalculatorParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PiContext extends ExpressionContext {
    PI() { return this.getToken(CalculatorParser.PI, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPi) {
            listener.enterPi(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPi) {
            listener.exitPi(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPi) {
            return visitor.visitPi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EulerContext extends ExpressionContext {
    EULER() { return this.getToken(CalculatorParser.EULER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEuler) {
            listener.enterEuler(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEuler) {
            listener.exitEuler(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEuler) {
            return visitor.visitEuler(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubstitutionContext extends ExpressionContext {
    SUBSTITUTION() { return this.getToken(CalculatorParser.SUBSTITUTION, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSubstitution) {
            listener.enterSubstitution(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubstitution) {
            listener.exitSubstitution(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubstitution) {
            return visitor.visitSubstitution(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TrailingCommentContext extends ParserRuleContext {
    SEMICOLON() { return this.getToken(CalculatorParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculatorParser.RULE_trailingComment; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrailingComment) {
            listener.enterTrailingComment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrailingComment) {
            listener.exitTrailingComment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTrailingComment) {
            return visitor.visitTrailingComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompileUnitContext extends ParserRuleContext {
    EOF() { return this.getToken(CalculatorParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculatorParser.RULE_compileUnit; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompileUnit) {
            listener.enterCompileUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompileUnit) {
            listener.exitCompileUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompileUnit) {
            return visitor.visitCompileUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=CalculatorParser.js.map