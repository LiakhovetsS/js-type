const isString = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object String]';
const isNumber = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Number]';
const isBoolean = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Boolean]';
const isDate = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Date]';
const isFunction = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Function]';
const isArray = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Array]';
const isObject = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Object]';
const isUndefined = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Undefined]';
const isNull = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Null]';
const isRegExp = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object RegExp]';
const isMap = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Map]';
const isSet = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Set]';
const isSymbol = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Symbol]';
const isError = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Error]';
const isBigInt = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object BigInt]';
const isArguments = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Arguments]';

const isTypedArray = (value: unknown): boolean => {
    if (!ArrayBuffer.isView) return false;
    return ArrayBuffer.isView(value as any) && !(value instanceof DataView);
};

const WTF = (value: unknown): string => {
    const tag = Object.prototype.toString.call(value);
    return tag.slice(8, -1).toLowerCase();
};

export {
    isString,
    isNumber,
    isBoolean,
    isDate,
    isFunction,
    isArray,
    isObject,
    isUndefined,
    isNull,
    isRegExp,
    isMap,
    isSet,
    isSymbol,
    isError,
    isBigInt,
    isArguments,
    isTypedArray,
    WTF
};

export class Type {
    static isString = isString;
    static isNumber = isNumber;
    static isBoolean = isBoolean;
    static isDate = isDate;
    static isFunction = isFunction;
    static isArray = isArray;
    static isObject = isObject;
    static isUndefined = isUndefined;
    static isNull = isNull;
    static isRegExp = isRegExp;
    static isMap = isMap;
    static isSet = isSet;
    static isSymbol = isSymbol;
    static isError = isError;
    static isBigInt = isBigInt;
    static isArguments = isArguments;
    static isTypedArray = isTypedArray;
    static WTF = WTF;
}