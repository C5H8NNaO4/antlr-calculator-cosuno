import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
export class FormulaVisitor extends AbstractParseTreeVisitor {
    constructor(substitutionResolver, formulaErrorListener) {
        super();
        this.substitutionResolver = substitutionResolver;
        this.formulaErrorListener = formulaErrorListener;
    }
    defaultResult() {
        return 0;
    }
    visitSubstitution(context) {
        const substitution = context.text;
        const resolved = this.substitutionResolver(substitution);
        if (resolved != null) {
            return resolved;
        }
        this.formulaErrorListener.reportSubstitutionNotFound(context.start.tokenIndex, substitution);
        return 0;
    }
    // Visit a parse tree produced by calculatorParser#calculator.
    visitCalculator(context) {
        return context.expression().accept(this);
    }
    ;
    visitMin(context) {
        let currentMin = this.visitExpression(context._expr[0]);
        if (context._expr.length > 1) {
            for (let i = 1; i < context._expr.length; i++) {
                currentMin = Math.min(currentMin, this.visitExpression(context._expr[i]));
            }
        }
        return currentMin;
    }
    ;
    visitMax(context) {
        let currentMax = this.visitExpression(context._expr[0]);
        if (context._expr.length > 1) {
            for (let i = 1; i < context._expr.length; i++) {
                currentMax = Math.max(currentMax, this.visitExpression(context._expr[i]));
            }
        }
        return currentMax;
    }
    ;
    visitExpression(context) {
        return context.accept(this);
    }
    ;
    // Visit a parse tree produced by calculatorParser#Tan.
    visitTan(context) {
        return Math.tan(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Cosh.
    visitCosh(context) {
        return Math.cosh(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#SqRoot.
    visitSqRoot(context) {
        var nthRoot = this.visitExpression(context.expression(0));
        if (nthRoot === 0) {
            return NaN;
        }
        return Math.pow(this.visitExpression(context.expression(1)), 1 / nthRoot);
    }
    ;
    // Visit a parse tree produced by calculatorParser#NegExponent.
    visitNegExponent(context) {
        return this.visitExpression(context.expression(0)) * Math.pow(10, -1 * this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Exponent.
    visitExponent(context) {
        return this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Arctan2.
    visitArctan2(context) {
        return Math.atan2(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#MulDiv.
    visitMulDiv(context) {
        if (context._op.text === '*') {
            return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
        }
        else {
            var divisor = this.visitExpression(context.expression(1));
            if (divisor !== 0) {
                return this.visitExpression(context.expression(0)) / divisor;
            }
            return NaN;
        }
    }
    ;
    visitMult(context) {
        return this.visitExpression(context.expression(0)) * this.visitExpression(context.expression(1));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Arcsin.
    visitArcsin(context) {
        return Math.asin(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Arccot.
    visitArccot(context) {
        return Math.PI * 0.5 - Math.atan(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Arccos.
    visitArccos(context) {
        return Math.acos(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Euler.
    visitEuler(context) {
        return Math.E;
    }
    ;
    // Visit a parse tree produced by calculatorParser#Arctan.
    visitArctan(context) {
        return Math.atan(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Parenthesis.
    visitParenthesis(context) {
        return this.visitExpression(context.expression());
    }
    ;
    // Visit a parse tree produced by calculatorParser#Abs.
    visitAbs(context) {
        return Math.abs(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Number.
    visitNumber(context) {
        return Number(context.text.replace(',', '.'));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Sinh.
    visitSinh(context) {
        return Math.sinh(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Round.
    visitRound(context) {
        return Math.round(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Trunc.
    visitTrunc(context) {
        return Math.trunc(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Pi.
    visitPi(context) {
        return Math.PI;
    }
    ;
    // Visit a parse tree produced by calculatorParser#Tanh.
    visitTanh(context) {
        return Math.tanh(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Floor.
    visitFloor(context) {
        return Math.floor(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Ln.
    visitLn(context) {
        return Math.log(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Mod.
    visitMod(context) {
        return this.visitExpression(context.expression(0)) % this.visitExpression(context.expression(1));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Log.
    visitLog(context) {
        return Math.log10(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#AddSub.
    visitAddSub(context) {
        return context._op.text === '+'
            ? (this.visitExpression(context.expression(0)) + this.visitExpression(context.expression(1)))
            : (this.visitExpression(context.expression(0)) - this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Cos.
    visitCos(context) {
        return Math.cos(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Deg.
    visitDeg(context) {
        return this.visitExpression(context.expression()) * 180 / Math.PI;
    }
    ;
    // Visit a parse tree produced by calculatorParser#Sqrt.
    visitSqrt(context) {
        return Math.sqrt(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Cot.
    visitCot(context) {
        return 1 / Math.tan(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Whole.
    visitWhole(context) {
        return Math.trunc(this.visitExpression(context.expression(0)) / this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Unary.
    visitUnary(context) {
        return -1 * this.visitExpression(context.expression());
    }
    ;
    // Visit a parse tree produced by calculatorParser#UnaryPlus.
    visitUnaryPlus(context) {
        return this.visitExpression(context.expression());
    }
    ;
    // Visit a parse tree produced by calculatorParser#Rad.
    visitRad(context) {
        return this.visitExpression(context.expression()) * Math.PI / 180;
    }
    ;
    // Visit a parse tree produced by calculatorParser#Sqr.
    visitSqr(context) {
        return this.visitExpression(context.expression()) * this.visitExpression(context.expression());
    }
    ;
    // Visit a parse tree produced by calculatorParser#Sin.
    visitSin(context) {
        return Math.sin(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Eex.
    visitEex(context) {
        return Math.pow(10, this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Pow.
    visitPow(context) {
        return Math.pow(this.visitExpression(context.expression(0)), this.visitExpression(context.expression(1)));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Ceil.
    visitCeil(context) {
        return Math.ceil(this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Exp.
    visitExp(context) {
        return Math.pow(Math.E, this.visitExpression(context.expression()));
    }
    ;
    // Visit a parse tree produced by calculatorParser#Roundk.
    visitRoundk(context) {
        return Math.round(this.visitExpression(context.expression(0)) * Math.pow(10, this.visitExpression(context.expression(1)))) /
            Math.pow(10, this.visitExpression(context.expression(1)));
    }
    ;
}
//# sourceMappingURL=FormulaVisitor.js.map