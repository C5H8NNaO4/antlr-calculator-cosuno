// Generated from ./src/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";
import * as Utils from "antlr4ts/misc/Utils";
export class CalculatorLexer extends Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator(CalculatorLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CalculatorLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "Calculator.g4"; }
    // @Override
    get ruleNames() { return CalculatorLexer.ruleNames; }
    // @Override
    get serializedATN() { return CalculatorLexer._serializedATN; }
    // @Override
    get channelNames() { return CalculatorLexer.channelNames; }
    // @Override
    get modeNames() { return CalculatorLexer.modeNames; }
    static get _ATN() {
        if (!CalculatorLexer.__ATN) {
            CalculatorLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorLexer._serializedATN));
        }
        return CalculatorLexer.__ATN;
    }
}
CalculatorLexer.T__0 = 1;
CalculatorLexer.T__1 = 2;
CalculatorLexer.T__2 = 3;
CalculatorLexer.T__3 = 4;
CalculatorLexer.T__4 = 5;
CalculatorLexer.T__5 = 6;
CalculatorLexer.T__6 = 7;
CalculatorLexer.T__7 = 8;
CalculatorLexer.T__8 = 9;
CalculatorLexer.NUMBER = 10;
CalculatorLexer.FLOAT = 11;
CalculatorLexer.DIGIT = 12;
CalculatorLexer.MOD = 13;
CalculatorLexer.WHOLE = 14;
CalculatorLexer.MUL = 15;
CalculatorLexer.DIV = 16;
CalculatorLexer.ADD = 17;
CalculatorLexer.SUB = 18;
CalculatorLexer.PI = 19;
CalculatorLexer.EXPONENT = 20;
CalculatorLexer.NEGEXPONENT = 21;
CalculatorLexer.EULER = 22;
CalculatorLexer.SQRT = 23;
CalculatorLexer.SQR = 24;
CalculatorLexer.FLOOR = 25;
CalculatorLexer.CEIL = 26;
CalculatorLexer.ABS = 27;
CalculatorLexer.ROUNDK = 28;
CalculatorLexer.ROUND = 29;
CalculatorLexer.TRUNC = 30;
CalculatorLexer.SIN = 31;
CalculatorLexer.COS = 32;
CalculatorLexer.TAN = 33;
CalculatorLexer.COT = 34;
CalculatorLexer.SINH = 35;
CalculatorLexer.COSH = 36;
CalculatorLexer.TANH = 37;
CalculatorLexer.ASI = 38;
CalculatorLexer.ARCCOS = 39;
CalculatorLexer.ARCTAN = 40;
CalculatorLexer.ARCTAN2 = 41;
CalculatorLexer.ARCCOT = 42;
CalculatorLexer.EXP = 43;
CalculatorLexer.LN = 44;
CalculatorLexer.EEX = 45;
CalculatorLexer.LOG = 46;
CalculatorLexer.RAD = 47;
CalculatorLexer.DEG = 48;
CalculatorLexer.MIN = 49;
CalculatorLexer.MAX = 50;
CalculatorLexer.WS = 51;
CalculatorLexer.COM = 52;
CalculatorLexer.SUBSTITUTION = 53;
CalculatorLexer.SEMICOLON = 54;
CalculatorLexer.INVALID = 55;
// tslint:disable:no-trailing-whitespace
CalculatorLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
CalculatorLexer.modeNames = [
    "DEFAULT_MODE",
];
CalculatorLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE", "MUL", "DIV", "ADD", "SUB",
    "PI", "EXPONENT", "NEGEXPONENT", "EULER", "SQRT", "SQR", "FLOOR", "CEIL",
    "ABS", "ROUNDK", "ROUND", "TRUNC", "SIN", "COS", "TAN", "COT", "SINH",
    "COSH", "TANH", "ASI", "ARCCOS", "ARCTAN", "ARCTAN2", "ARCCOT", "EXP",
    "LN", "EEX", "LOG", "RAD", "DEG", "MIN", "MAX", "WS", "COM", "SUBSTITUTION",
    "SEMICOLON", "INVALID", "COMMENT",
];
CalculatorLexer._LITERAL_NAMES = [
    undefined, "'='", "'('", "')'", "'^'", "'**'", "'%'", "'~'", "'//'", "'()'",
    undefined, undefined, undefined, undefined, undefined, "'*'", "'/'", "'+'",
    "'-'", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "';'",
];
CalculatorLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE",
    "MUL", "DIV", "ADD", "SUB", "PI", "EXPONENT", "NEGEXPONENT", "EULER",
    "SQRT", "SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", "ROUND", "TRUNC", "SIN",
    "COS", "TAN", "COT", "SINH", "COSH", "TANH", "ASI", "ARCCOS", "ARCTAN",
    "ARCTAN2", "ARCCOT", "EXP", "LN", "EEX", "LOG", "RAD", "DEG", "MIN", "MAX",
    "WS", "COM", "SUBSTITUTION", "SEMICOLON", "INVALID",
];
CalculatorLexer.VOCABULARY = new VocabularyImpl(CalculatorLexer._LITERAL_NAMES, CalculatorLexer._SYMBOLIC_NAMES, []);
CalculatorLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x029\u0176\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x03\x02\x03\x03\x03" +
    "\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
    "\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x06\v" +
    "\x8B\n\v\r\v\x0E\v\x8C\x05\v\x8F\n\v\x03\f\x06\f\x92\n\f\r\f\x0E\f\x93" +
    "\x03\f\x03\f\x07\f\x98\n\f\f\f\x0E\f\x9B\v\f\x03\f\x03\f\x06\f\x9F\n\f" +
    "\r\f\x0E\f\xA0\x05\f\xA3\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
    "\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
    "\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
    "\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
    "\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"" +
    "\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03" +
    "%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03" +
    "(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03" +
    "*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
    ",\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x030\x030\x03" +
    "0\x030\x031\x031\x031\x031\x032\x032\x032\x032\x033\x033\x033\x033\x03" +
    "4\x034\x034\x034\x035\x035\x035\x035\x036\x036\x066\u0152\n6\r6\x0E6\u0153" +
    "\x037\x037\x038\x038\x039\x039\x039\x039\x079\u015E\n9\f9\x0E9\u0161\v" +
    "9\x039\x039\x039\x039\x079\u0167\n9\f9\x0E9\u016A\v9\x039\x039\x039\x07" +
    "9\u016F\n9\f9\x0E9\u0172\v9\x039\x059\u0175\n9\x05\u015F\u0168\u0170\x02" +
    "\x02:\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
    "\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
    "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
    "\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
    "\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
    "O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02" +
    "4g\x025i\x026k\x027m\x028o\x029q\x02\x02\x03\x02\x1D\x04\x02..00\x03\x02" +
    "2;\x04\x02OOoo\x04\x02QQqq\x04\x02FFff\x04\x02KKkk\x04\x02XXxx\x04\x02" +
    "RRrr\x04\x02GGgg\x04\x02UUuu\x04\x02SSss\x04\x02TTtt\x04\x02VVvv\x04\x02" +
    "HHhh\x04\x02NNnn\x04\x02EEee\x04\x02CCcc\x04\x02DDdd\x04\x02WWww\x04\x02" +
    "PPpp\x04\x02MMmm\x04\x02JJjj\x03\x0244\x04\x02ZZzz\x04\x02IIii\x05\x02" +
    "\v\f\x0F\x0F\"\"\v\x022;C\\c|\xC6\xC6\xD8\xD8\xDE\xDE\xE6\xE6\xF8\xF8" +
    "\xFE\xFE\x02\u0180\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
    "\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
    "\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
    "\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
    "\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
    "\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
    "\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
    "\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
    "\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
    "\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02" +
    "A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02" +
    "\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02" +
    "\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03" +
    "\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02" +
    "\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02" +
    "c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02" +
    "\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02" +
    "\x03s\x03\x02\x02\x02\x05u\x03\x02\x02\x02\x07w\x03\x02\x02\x02\ty\x03" +
    "\x02\x02\x02\v{\x03\x02\x02\x02\r~\x03\x02\x02\x02\x0F\x80\x03\x02\x02" +
    "\x02\x11\x82\x03\x02\x02\x02\x13\x85\x03\x02\x02\x02\x15\x8E\x03\x02\x02" +
    "\x02\x17\xA2\x03\x02\x02\x02\x19\xA4\x03\x02\x02\x02\x1B\xA6\x03\x02\x02" +
    "\x02\x1D\xAA\x03\x02\x02\x02\x1F\xAE\x03\x02\x02\x02!\xB0\x03\x02\x02" +
    "\x02#\xB2\x03\x02\x02\x02%\xB4\x03\x02\x02\x02\'\xB6\x03\x02\x02\x02)" +
    "\xB9\x03\x02\x02\x02+\xBC\x03\x02\x02\x02-\xBF\x03\x02\x02\x02/\xC1\x03" +
    "\x02\x02\x021\xC6\x03\x02\x02\x023\xCA\x03\x02\x02\x025\xD0\x03\x02\x02" +
    "\x027\xD5\x03\x02\x02\x029\xD9\x03\x02\x02\x02;\xE0\x03\x02\x02\x02=\xE6" +
    "\x03\x02\x02\x02?\xEC\x03\x02\x02\x02A\xF0\x03\x02\x02\x02C\xF4\x03\x02" +
    "\x02\x02E\xF8\x03\x02\x02\x02G\xFC\x03\x02\x02\x02I\u0101\x03\x02\x02" +
    "\x02K\u0106\x03\x02\x02\x02M\u010B\x03\x02\x02\x02O\u010F\x03\x02\x02" +
    "\x02Q\u0114\x03\x02\x02\x02S\u0119\x03\x02\x02\x02U\u0121\x03\x02\x02" +
    "\x02W\u0128\x03\x02\x02\x02Y\u012C\x03\x02\x02\x02[\u012F\x03\x02\x02" +
    "\x02]\u0133\x03\x02\x02\x02_\u0137\x03\x02\x02\x02a\u013B\x03\x02\x02" +
    "\x02c\u013F\x03\x02\x02\x02e\u0143\x03\x02\x02\x02g\u0147\x03\x02\x02" +
    "\x02i\u014B\x03\x02\x02\x02k\u014F\x03\x02\x02\x02m\u0155\x03\x02\x02" +
    "\x02o\u0157\x03\x02\x02\x02q\u0174\x03\x02\x02\x02st\x07?\x02\x02t\x04" +
    "\x03\x02\x02\x02uv\x07*\x02\x02v\x06\x03\x02\x02\x02wx\x07+\x02\x02x\b" +
    "\x03\x02\x02\x02yz\x07`\x02\x02z\n\x03\x02\x02\x02{|\x07,\x02\x02|}\x07" +
    ",\x02\x02}\f\x03\x02\x02\x02~\x7F\x07\'\x02\x02\x7F\x0E\x03\x02\x02\x02" +
    "\x80\x81\x07\x80\x02\x02\x81\x10\x03\x02\x02\x02\x82\x83\x071\x02\x02" +
    "\x83\x84\x071\x02\x02\x84\x12\x03\x02\x02\x02\x85\x86\x07*\x02\x02\x86" +
    "\x87\x07+\x02\x02\x87\x14\x03\x02\x02\x02\x88\x8F\x05\x17\f\x02\x89\x8B" +
    "\x05\x19\r\x02\x8A\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8A" +
    "\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x88" +
    "\x03\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8F\x16\x03\x02\x02\x02\x90\x92" +
    "\x05\x19\r\x02\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x91" +
    "\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x99" +
    "\t\x02\x02\x02\x96\x98\x05\x19\r\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03" +
    "\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\xA3\x03" +
    "\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9E\t\x02\x02\x02\x9D\x9F\x05" +
    "\x19\r\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03" +
    "\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\x91\x03" +
    "\x02\x02\x02\xA2\x9C\x03\x02\x02\x02\xA3\x18\x03\x02\x02\x02\xA4\xA5\t" +
    "\x03\x02\x02\xA5\x1A\x03\x02\x02\x02\xA6\xA7\t\x04\x02\x02\xA7\xA8\t\x05" +
    "\x02\x02\xA8\xA9\t\x06\x02\x02\xA9\x1C\x03\x02\x02\x02\xAA\xAB\t\x06\x02" +
    "\x02\xAB\xAC\t\x07\x02\x02\xAC\xAD\t\b\x02\x02\xAD\x1E\x03\x02\x02\x02" +
    "\xAE\xAF\x07,\x02\x02\xAF \x03\x02\x02\x02\xB0\xB1\x071\x02\x02\xB1\"" +
    "\x03\x02\x02\x02\xB2\xB3\x07-\x02\x02\xB3$\x03\x02\x02\x02\xB4\xB5\x07" +
    "/\x02\x02\xB5&\x03\x02\x02\x02\xB6\xB7\t\t\x02\x02\xB7\xB8\t\x07\x02\x02" +
    "\xB8(\x03\x02\x02\x02\xB9\xBA\t\n\x02\x02\xBA\xBB\x07-\x02\x02\xBB*\x03" +
    "\x02\x02\x02\xBC\xBD\t\n\x02\x02\xBD\xBE\x07/\x02\x02\xBE,\x03\x02\x02" +
    "\x02\xBF\xC0\t\n\x02\x02\xC0.\x03\x02\x02\x02\xC1\xC2\t\v\x02\x02\xC2" +
    "\xC3\t\f\x02\x02\xC3\xC4\t\r\x02\x02\xC4\xC5\t\x0E\x02\x02\xC50\x03\x02" +
    "\x02\x02\xC6\xC7\t\v\x02\x02\xC7\xC8\t\f\x02\x02\xC8\xC9\t\r\x02\x02\xC9" +
    "2\x03\x02\x02\x02\xCA\xCB\t\x0F\x02\x02\xCB\xCC\t\x10\x02\x02\xCC\xCD" +
    "\t\x05\x02\x02\xCD\xCE\t\x05\x02\x02\xCE\xCF\t\r\x02\x02\xCF4\x03\x02" +
    "\x02\x02\xD0\xD1\t\x11\x02\x02\xD1\xD2\t\n\x02\x02\xD2\xD3\t\x07\x02\x02" +
    "\xD3\xD4\t\x10\x02\x02\xD46\x03\x02\x02\x02\xD5\xD6\t\x12\x02\x02\xD6" +
    "\xD7\t\x13\x02\x02\xD7\xD8\t\v\x02\x02\xD88\x03\x02\x02\x02\xD9\xDA\t" +
    "\r\x02\x02\xDA\xDB\t\x05\x02\x02\xDB\xDC\t\x14\x02\x02\xDC\xDD\t\x15\x02" +
    "\x02\xDD\xDE\t\x06\x02\x02\xDE\xDF\t\x16\x02\x02\xDF:\x03\x02\x02\x02" +
    "\xE0\xE1\t\r\x02\x02\xE1\xE2\t\x05\x02\x02\xE2\xE3\t\x14\x02\x02\xE3\xE4" +
    "\t\x15\x02\x02\xE4\xE5\t\x06\x02\x02\xE5<\x03\x02\x02\x02\xE6\xE7\t\x0E" +
    "\x02\x02\xE7\xE8\t\r\x02\x02\xE8\xE9\t\x14\x02\x02\xE9\xEA\t\x15\x02\x02" +
    "\xEA\xEB\t\x11\x02\x02\xEB>\x03\x02\x02\x02\xEC\xED\t\v\x02\x02\xED\xEE" +
    "\t\x07\x02\x02\xEE\xEF\t\x15\x02\x02\xEF@\x03\x02\x02\x02\xF0\xF1\t\x11" +
    "\x02\x02\xF1\xF2\t\x05\x02\x02\xF2\xF3\t\v\x02\x02\xF3B\x03\x02\x02\x02" +
    "\xF4\xF5\t\x0E\x02\x02\xF5\xF6\t\x12\x02\x02\xF6\xF7\t\x15\x02\x02\xF7" +
    "D\x03\x02\x02\x02\xF8\xF9\t\x11\x02\x02\xF9\xFA\t\x05\x02\x02\xFA\xFB" +
    "\t\x0E\x02\x02\xFBF\x03\x02\x02\x02\xFC\xFD\t\v\x02\x02\xFD\xFE\t\x07" +
    "\x02\x02\xFE\xFF\t\x15\x02\x02\xFF\u0100\t\x17\x02\x02\u0100H\x03\x02" +
    "\x02\x02\u0101\u0102\t\x11\x02\x02\u0102\u0103\t\x05\x02\x02\u0103\u0104" +
    "\t\v\x02\x02\u0104\u0105\t\x17\x02\x02\u0105J\x03\x02\x02\x02\u0106\u0107" +
    "\t\x0E\x02\x02\u0107\u0108\t\x12\x02\x02\u0108\u0109\t\x15\x02\x02\u0109" +
    "\u010A\t\x17\x02\x02\u010AL\x03\x02\x02\x02\u010B\u010C\t\x12\x02\x02" +
    "\u010C\u010D\t\v\x02\x02\u010D\u010E\t\x07\x02\x02\u010EN\x03\x02\x02" +
    "\x02\u010F\u0110\t\x12\x02\x02\u0110\u0111\t\x11\x02\x02\u0111\u0112\t" +
    "\x05\x02\x02\u0112\u0113\t\v\x02\x02\u0113P\x03\x02\x02\x02\u0114\u0115" +
    "\t\x12\x02\x02\u0115\u0116\t\x0E\x02\x02\u0116\u0117\t\x12\x02\x02\u0117" +
    "\u0118\t\x15\x02\x02\u0118R\x03\x02\x02\x02\u0119\u011A\t\x12\x02\x02" +
    "\u011A\u011B\t\r\x02\x02\u011B\u011C\t\x11\x02\x02\u011C\u011D\t\x0E\x02" +
    "\x02\u011D\u011E\t\x12\x02\x02\u011E\u011F\t\x15\x02\x02\u011F\u0120\t" +
    "\x18\x02\x02\u0120T\x03\x02\x02\x02\u0121\u0122\t\x12\x02\x02\u0122\u0123" +
    "\t\r\x02\x02\u0123\u0124\t\x11\x02\x02\u0124\u0125\t\x11\x02\x02\u0125" +
    "\u0126\t\x05\x02\x02\u0126\u0127\t\x0E\x02\x02\u0127V\x03\x02\x02\x02" +
    "\u0128\u0129\t\n\x02\x02\u0129\u012A\t\x19\x02\x02\u012A\u012B\t\t\x02" +
    "\x02\u012BX\x03\x02\x02\x02\u012C\u012D\t\x10\x02\x02\u012D\u012E\t\x15" +
    "\x02\x02\u012EZ\x03\x02\x02\x02\u012F\u0130\t\n\x02\x02\u0130\u0131\t" +
    "\n\x02\x02\u0131\u0132\t\x19\x02\x02\u0132\\\x03\x02\x02\x02\u0133\u0134" +
    "\t\x10\x02\x02\u0134\u0135\t\x05\x02\x02\u0135\u0136\t\x1A\x02\x02\u0136" +
    "^\x03\x02\x02\x02\u0137\u0138\t\r\x02\x02\u0138\u0139\t\x12\x02\x02\u0139" +
    "\u013A\t\x06\x02\x02\u013A`\x03\x02\x02\x02\u013B\u013C\t\x06\x02\x02" +
    "\u013C\u013D\t\n\x02\x02\u013D\u013E\t\x1A\x02\x02\u013Eb\x03\x02\x02" +
    "\x02\u013F\u0140\t\x04\x02\x02\u0140\u0141\t\x07\x02\x02\u0141\u0142\t" +
    "\x15\x02\x02\u0142d\x03\x02\x02\x02\u0143\u0144\t\x04\x02\x02\u0144\u0145" +
    "\t\x12\x02\x02\u0145\u0146\t\x19\x02\x02\u0146f\x03\x02\x02\x02\u0147" +
    "\u0148\t\x1B\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\b4\x02\x02" +
    "\u014Ah\x03\x02\x02\x02\u014B\u014C\x05q9\x02\u014C\u014D\x03\x02\x02" +
    "\x02\u014D\u014E\b5\x02\x02\u014Ej\x03\x02\x02\x02\u014F\u0151\x07%\x02" +
    "\x02\u0150\u0152\t\x1C\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152\u0153" +
    "\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02" +
    "\u0154l\x03\x02\x02\x02\u0155\u0156\x07=\x02\x02\u0156n\x03\x02\x02\x02" +
    "\u0157\u0158\v\x02\x02\x02\u0158p\x03\x02\x02\x02\u0159\u015A\x071\x02" +
    "\x02\u015A\u015B\x07,\x02\x02\u015B\u015F\x03\x02\x02\x02\u015C\u015E" +
    "\v\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02" +
    "\u015F\u0160\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0162\x03" +
    "\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0163\x07,\x02\x02\u0163" +
    "\u0175\x071\x02\x02\u0164\u0168\x07)\x02\x02\u0165\u0167\v\x02\x02\x02" +
    "\u0166\u0165\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0169\x03" +
    "\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A" +
    "\u0168\x03\x02\x02\x02\u016B\u0175\x07)\x02\x02\u016C\u0170\x07$\x02\x02" +
    "\u016D\u016F\v\x02\x02\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0172\x03" +
    "\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171" +
    "\u0173\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0175\x07$\x02" +
    "\x02\u0174\u0159\x03\x02\x02\x02\u0174\u0164\x03\x02\x02\x02\u0174\u016C" +
    "\x03\x02\x02\x02\u0175r\x03\x02\x02\x02\x0F\x02\x8C\x8E\x93\x99\xA0\xA2" +
    "\u0151\u0153\u015F\u0168\u0170\u0174\x03\b\x02\x02";
//# sourceMappingURL=CalculatorLexer.js.map