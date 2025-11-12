const isString = (value: string): boolean => Object.prototype.toString.call(value) === '[object String]';
const isNumber = (value: number): boolean => Object.prototype.toString.call(value) === '[object Number]';
const isBoolean = (value: boolean): boolean => Object.prototype.toString.call(value) === '[object Boolean]';
const isDate = (value: Date): boolean => Object.prototype.toString.call(value) === '[object Date]';
const isFunction = (value: Function): boolean => Object.prototype.toString.call(value) === '[object Function]';
const isArray = (value: any[]): boolean => Object.prototype.toString.call(value) === '[object Array]';
const isObject = (value: object): boolean => Object.prototype.toString.call(value) === '[object Object]';
const isUndefined = (value: undefined): boolean => Object.prototype.toString.call(value) === '[object Undefined]';
const isNull = (value: null): boolean => Object.prototype.toString.call(value) === '[object Null]';
const isRegExp = (value: RegExp): boolean => Object.prototype.toString.call(value) === '[object RegExp]';

const WTF = (value: unknown): string => {
    const tag = Object.prototype.toString.call(value); // e.g. '[object Array]'
    return tag.slice(8, -1).toLowerCase(); // 'array'
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
    static WTF = WTF;
}