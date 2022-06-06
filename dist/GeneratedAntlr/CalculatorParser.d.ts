import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { CalculatorListener } from "./CalculatorListener";
import { CalculatorVisitor } from "./CalculatorVisitor";
export declare class CalculatorParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly NUMBER = 10;
    static readonly FLOAT = 11;
    static readonly DIGIT = 12;
    static readonly MOD = 13;
    static readonly WHOLE = 14;
    static readonly MUL = 15;
    static readonly DIV = 16;
    static readonly ADD = 17;
    static readonly SUB = 18;
    static readonly PI = 19;
    static readonly EXPONENT = 20;
    static readonly NEGEXPONENT = 21;
    static readonly EULER = 22;
    static readonly SQRT = 23;
    static readonly SQR = 24;
    static readonly FLOOR = 25;
    static readonly CEIL = 26;
    static readonly ABS = 27;
    static readonly ROUNDK = 28;
    static readonly ROUND = 29;
    static readonly TRUNC = 30;
    static readonly SIN = 31;
    static readonly COS = 32;
    static readonly TAN = 33;
    static readonly COT = 34;
    static readonly SINH = 35;
    static readonly COSH = 36;
    static readonly TANH = 37;
    static readonly ARCSIN = 38;
    static readonly ARCCOS = 39;
    static readonly ARCTAN = 40;
    static readonly ARCTAN2 = 41;
    static readonly ARCCOT = 42;
    static readonly EXP = 43;
    static readonly LN = 44;
    static readonly EEX = 45;
    static readonly LOG = 46;
    static readonly RAD = 47;
    static readonly DEG = 48;
    static readonly MIN = 49;
    static readonly MAX = 50;
    static readonly WS = 51;
    static readonly COM = 52;
    static readonly SUBSTITUTION = 53;
    static readonly SEMICOLON = 54;
    static readonly INVALID = 55;
    static readonly RULE_calculator = 0;
    static readonly RULE_expression = 1;
    static readonly RULE_trailingComment = 2;
    static readonly RULE_compileUnit = 3;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    calculator(): CalculatorContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    trailingComment(): TrailingCommentContext;
    compileUnit(): CompileUnitContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class CalculatorContext extends ParserRuleContext {
    expression(): ExpressionContext;
    compileUnit(): CompileUnitContext;
    trailingComment(): TrailingCommentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class UnaryContext extends ExpressionContext {
    SUB(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class UnaryPlusContext extends ExpressionContext {
    ADD(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class FloorContext extends ExpressionContext {
    FLOOR(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class CeilContext extends ExpressionContext {
    CEIL(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class AbsContext extends ExpressionContext {
    ABS(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class RoundkContext extends ExpressionContext {
    ROUNDK(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMICOLON(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class RoundContext extends ExpressionContext {
    ROUND(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class TruncContext extends ExpressionContext {
    TRUNC(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SinContext extends ExpressionContext {
    SIN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class CosContext extends ExpressionContext {
    COS(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class TanContext extends ExpressionContext {
    TAN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class CotContext extends ExpressionContext {
    COT(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SinhContext extends ExpressionContext {
    SINH(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class CoshContext extends ExpressionContext {
    COSH(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class TanhContext extends ExpressionContext {
    TANH(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ArcsinContext extends ExpressionContext {
    ARCSIN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ArccosContext extends ExpressionContext {
    ARCCOS(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ArctanContext extends ExpressionContext {
    ARCTAN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class Arctan2Context extends ExpressionContext {
    ARCTAN2(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMICOLON(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ArccotContext extends ExpressionContext {
    ARCCOT(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ExpContext extends ExpressionContext {
    EXP(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class LnContext extends ExpressionContext {
    LN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class EexContext extends ExpressionContext {
    EEX(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class LogContext extends ExpressionContext {
    LOG(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class RadContext extends ExpressionContext {
    RAD(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class DegContext extends ExpressionContext {
    DEG(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SqrtContext extends ExpressionContext {
    SQRT(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SqrContext extends ExpressionContext {
    SQR(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ExponentContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EXPONENT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class NegExponentContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NEGEXPONENT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class PowContext extends ExpressionContext {
    _op: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ModContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MOD(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class WholeContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    WHOLE(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SqRootContext extends ExpressionContext {
    _op: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MulDivContext extends ExpressionContext {
    _op: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ParenthesisContext extends ExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MultContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MinContext extends ExpressionContext {
    _expression: ExpressionContext;
    _expr: ExpressionContext[];
    MIN(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MaxContext extends ExpressionContext {
    _expression: ExpressionContext;
    _expr: ExpressionContext[];
    MAX(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class AddSubContext extends ExpressionContext {
    _op: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ADD(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class NumberContext extends ExpressionContext {
    NUMBER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class PiContext extends ExpressionContext {
    PI(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class EulerContext extends ExpressionContext {
    EULER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class SubstitutionContext extends ExpressionContext {
    SUBSTITUTION(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class TrailingCommentContext extends ParserRuleContext {
    SEMICOLON(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class CompileUnitContext extends ParserRuleContext {
    EOF(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
