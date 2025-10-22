/**
 * NumberToString - A multilingual number to words converter
 * Supports English, Bangla, French, Urdu, Chinese, Hindi, and Spanish
 */
class NumberToString {
    constructor() {
        // Language dictionaries
        this.dictionaries = {
            en: {
                ones: [
                    "",
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "ten",
                    "eleven",
                    "twelve",
                    "thirteen",
                    "fourteen",
                    "fifteen",
                    "sixteen",
                    "seventeen",
                    "eighteen",
                    "nineteen",
                ],
                tens: [
                    "",
                    "",
                    "twenty",
                    "thirty",
                    "forty",
                    "fifty",
                    "sixty",
                    "seventy",
                    "eighty",
                    "ninety",
                ],
                scales: [
                    "",
                    "thousand",
                    "million",
                    "billion",
                    "trillion",
                    "quadrillion",
                    "quintillion",
                ],
                and: "and",
                zero: "zero",
                hundred: "hundred",
            },
            bn: {
                dictionary: {
                    0: "শূন্য",
                    1: "এক",
                    2: "দুই",
                    3: "তিন",
                    4: "চার",
                    5: "পাঁচ",
                    6: "ছয়",
                    7: "সাত",
                    8: "আট",
                    9: "নয়",
                    10: "দশ",
                    11: "এগারো",
                    12: "বারো",
                    13: "তেরো",
                    14: "চৌদ্দ",
                    15: "পনেরো",
                    16: "ষোল",
                    17: "সতেরো",
                    18: "আঠারো",
                    19: "উনিশ",
                    20: "বিশ",
                    21: "একুশ",
                    22: "বাইশ",
                    23: "তেইশ",
                    24: "চব্বিশ",
                    25: "পঁচিশ",
                    26: "ছাব্বিশ",
                    27: "সাতাশ",
                    28: "আঠাশ",
                    29: "ঊনত্রিশ",
                    30: "ত্রিশ",
                    31: "একত্রিশ",
                    32: "বত্রিশ",
                    33: "তেত্রিশ",
                    34: "চৌত্রিশ",
                    35: "পঁয়ত্রিশ",
                    36: "ছত্রিশ",
                    37: "সাঁইত্রিশ",
                    38: "আটত্রিশ",
                    39: "ঊনচল্লিশ",
                    40: "চল্লিশ",
                    41: "একচল্লিশ",
                    42: "বিয়াল্লিশ",
                    43: "তেতাল্লিশ",
                    44: "চুয়াল্লিশ",
                    45: "পঁয়তাল্লিশ",
                    46: "ছেচল্লিশ",
                    47: "সাতচল্লিশ",
                    48: "আটচল্লিশ",
                    49: "ঊনপঞ্চাশ",
                    50: "পঞ্চাশ",
                    51: "একান্ন",
                    52: "বাহান্ন",
                    53: "তিপ্পান্ন",
                    54: "চুয়ান্ন",
                    55: "পঞ্চান্ন",
                    56: "ছাপ্পান্ন",
                    57: "সাতান্ন",
                    58: "আটান্ন",
                    59: "ঊনষাট",
                    60: "ষাট",
                    61: "একষট্টি",
                    62: "বাষট্টি",
                    63: "তেষট্টি",
                    64: "চৌষট্টি",
                    65: "পঁয়সট্টি",
                    66: "ছেষট্টি",
                    67: "সাতষট্টি",
                    68: "আটষট্টি",
                    69: "ঊনসত্তর",
                    70: "সত্তর",
                    71: "একাত্তর",
                    72: "বাহাত্তর",
                    73: "তিয়াত্তর",
                    74: "চুয়াত্তর",
                    75: "পঁচাত্তর",
                    76: "ছিয়াত্তর",
                    77: "সাতাত্তর",
                    78: "আটাত্তর",
                    79: "ঊনআশি",
                    80: "আশি",
                    81: "একাশি",
                    82: "বিরাশি",
                    83: "তিরাশি",
                    84: "চুরাশি",
                    85: "পঁচাশি",
                    86: "ছিয়াশি",
                    87: "সাতাশি",
                    88: "আটাশি",
                    89: "ঊননব্বই",
                    90: "নব্বই",
                    91: "একানব্বই",
                    92: "বিরানব্বই",
                    93: "তিরানব্বই",
                    94: "চুরানব্বই",
                    95: "পঁচানব্বই",
                    96: "ছিয়ানব্বই",
                    97: "সাতানব্বই",
                    98: "আটানব্বই",
                    99: "নিরানব্বই",
                },
                units: {
                    10000000: "কোটি",
                    100000: "লক্ষ",
                    1000: "হাজার",
                    100: "শত",
                },
                zero: "শূন্য",
                negative: "ঋণাত্মক",
            },
            fr: {
                ones: [
                    "",
                    "un",
                    "deux",
                    "trois",
                    "quatre",
                    "cinq",
                    "six",
                    "sept",
                    "huit",
                    "neuf",
                    "dix",
                    "onze",
                    "douze",
                    "treize",
                    "quatorze",
                    "quinze",
                    "seize",
                    "dix-sept",
                    "dix-huit",
                    "dix-neuf",
                ],
                tens: [
                    "",
                    "",
                    "vingt",
                    "trente",
                    "quarante",
                    "cinquante",
                    "soixante",
                    "soixante-dix",
                    "quatre-vingts",
                    "quatre-vingt-dix",
                ],
                scales: [
                    "",
                    "mille",
                    "million",
                    "milliard",
                    "billion",
                    "billiard",
                    "trillion",
                ],
                and: "et",
                zero: "zéro",
                hundred: "cent",
            },
            ur: {
                ones: [
                    "",
                    "ایک",
                    "دو",
                    "تین",
                    "چار",
                    "پانچ",
                    "چھ",
                    "سات",
                    "آٹھ",
                    "نو",
                    "دس",
                    "گیارہ",
                    "بارہ",
                    "تیرہ",
                    "چودہ",
                    "پندرہ",
                    "سولہ",
                    "سترہ",
                    "اٹھارہ",
                    "انیس",
                ],
                tens: [
                    "",
                    "",
                    "بیس",
                    "تیس",
                    "چالیس",
                    "پچاس",
                    "ساٹھ",
                    "ستر",
                    "اسی",
                    "نوے",
                ],
                scales: ["", "ہزار", "لاکھ", "کروڑ", "ارب", "کھرب", "نیل"],
                and: "اور",
                zero: "صفر",
                hundred: "سو",
            },
            zh: {
                ones: [
                    "",
                    "一",
                    "二",
                    "三",
                    "四",
                    "五",
                    "六",
                    "七",
                    "八",
                    "九",
                    "十",
                    "十一",
                    "十二",
                    "十三",
                    "十四",
                    "十五",
                    "十六",
                    "十七",
                    "十八",
                    "十九",
                ],
                tens: [
                    "",
                    "",
                    "二十",
                    "三十",
                    "四十",
                    "五十",
                    "六十",
                    "七十",
                    "八十",
                    "九十",
                ],
                scales: ["", "千", "万", "亿", "兆", "京", "垓"],
                and: "和",
                zero: "零",
                hundred: "百",
            },
            hi: {
                ones: [
                    "",
                    "एक",
                    "दो",
                    "तीन",
                    "चार",
                    "पांच",
                    "छह",
                    "सात",
                    "आठ",
                    "नौ",
                    "दस",
                    "ग्यारह",
                    "बारह",
                    "तेरह",
                    "चौदह",
                    "पंद्रह",
                    "सोलह",
                    "सत्रह",
                    "अठारह",
                    "उन्नीस",
                ],
                tens: [
                    "",
                    "",
                    "बीस",
                    "तीस",
                    "चालीस",
                    "पचास",
                    "साठ",
                    "सत्तर",
                    "अस्सी",
                    "नब्बे",
                ],
                scales: ["", "हज़ार", "लाख", "करोड़", "अरब", "खरब", "नील"],
                and: "और",
                zero: "शून्य",
                hundred: "सौ",
            },
            es: {
                ones: [
                    "",
                    "uno",
                    "dos",
                    "tres",
                    "cuatro",
                    "cinco",
                    "seis",
                    "siete",
                    "ocho",
                    "nueve",
                    "diez",
                    "once",
                    "doce",
                    "trece",
                    "catorce",
                    "quince",
                    "dieciséis",
                    "diecisiete",
                    "dieciocho",
                    "diecinueve",
                ],
                tens: [
                    "",
                    "",
                    "veinte",
                    "treinta",
                    "cuarenta",
                    "cincuenta",
                    "sesenta",
                    "setenta",
                    "ochenta",
                    "noventa",
                ],
                scales: [
                    "",
                    "mil",
                    "millón",
                    "mil millones",
                    "billón",
                    "mil billones",
                    "trillón",
                ],
                and: "y",
                zero: "cero",
                hundred: "cien",
            },
        };
    }

    /**
     * Convert a number to words in English
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertEn(number) {
        return this.convert(number, "en");
    }

    /**
     * Convert a number to words in Bangla
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertBn(number) {
        const dict = this.dictionaries.bn;

        if (number === 0) return dict.zero;
        if (number < 0)
            return dict.negative + " " + this.convertBn(Math.abs(number));

        // Split integer and decimal parts
        const parts = number.toString().split(".");
        const integerPart = parseInt(parts[0]);
        const decimalPart = parts[1];

        let result = "";
        let remaining = integerPart;

        const units = [{
                value: 10000000,
                name: "কোটি",
            },
            {
                value: 100000,
                name: "লক্ষ",
            },
            {
                value: 1000,
                name: "হাজার",
            },
            {
                value: 100,
                name: "শত",
            },
        ];

        for (const unit of units) {
            if (remaining >= unit.value) {
                const quotient = Math.floor(remaining / unit.value);
                remaining = remaining % unit.value;

                // Handle quotient - check if it exists in dictionary
                if (dict.dictionary[quotient] !== undefined) {
                    result += dict.dictionary[quotient] + " " + unit.name + " ";
                } else {
                    // If not in dictionary, recursively convert it
                    result += this.convertBn(quotient) + " " + unit.name + " ";
                }
            }
        }

        // Handle remaining 1-99
        if (remaining > 0) {
            if (dict.dictionary[remaining] !== undefined) {
                result += dict.dictionary[remaining];
            }
        }

        // Handle decimal part
        if (decimalPart) {
            result += " দশমিক ";
            for (const digit of decimalPart) {
                const digitNum = parseInt(digit);
                if (dict.dictionary[digitNum] !== undefined) {
                    result += dict.dictionary[digitNum] + " ";
                }
            }
        }

        return result.trim().normalize("NFC");
    }

    /**
     * Convert a number to words in French
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertFr(number) {
        return this.convert(number, "fr");
    }

    /**
     * Convert a number to words in Urdu
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertUr(number) {
        return this.convert(number, "ur");
    }

    /**
     * Convert a number to words in Chinese
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertZh(number) {
        return this.convert(number, "zh");
    }

    /**
     * Convert a number to words in Hindi
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertHi(number) {
        return this.convert(number, "hi");
    }

    /**
     * Convert a number to words in Spanish
     * @param {number} number - The number to convert
     * @returns {string} The number in words
     */
    convertEs(number) {
        return this.convert(number, "es");
    }

    /**
     * Convert a number to words in the specified language
     * @param {number} number - The number to convert
     * @param {string} lang - The language code ('en', 'bn', 'fr', 'ur', 'zh', 'hi', 'es')
     * @returns {string} The number in words
     */
    convert(number, lang) {
        // Validate input
        if (typeof number !== "number" && typeof number !== "string") {
            throw new Error("Input must be a number or a numeric string");
        }

        // Convert to number if string
        number = typeof number === "string" ? parseFloat(number) : number;

        // Check if valid number
        if (isNaN(number)) {
            throw new Error("Invalid number");
        }

        // Check if language is supported
        if (!this.dictionaries[lang]) {
            throw new Error(`Language '${lang}' is not supported`);
        }

        // Get dictionary for the language
        const dict = this.dictionaries[lang];

        // Handle zero
        if (number === 0) {
            return dict.zero;
        }

        // Handle negative numbers
        if (number < 0) {
            return `minus ${this.convert(Math.abs(number), lang)}`;
        }

        // Handle decimal numbers
        if (number % 1 !== 0) {
            const parts = number.toString().split(".");
            const integerPart = parseInt(parts[0]);
            const decimalPart = parts[1];

            let result = this.convert(integerPart, lang);
            result += " point ";

            // Convert each digit in decimal part
            for (let i = 0; i < decimalPart.length; i++) {
                const digit = parseInt(decimalPart[i]);
                result += i > 0 ? " " : "";
                result += digit === 0 ? dict.zero : dict.ones[digit];
            }

            return result;
        }

        return this.convertWholeNumber(number, lang);
    }

    /**
     * Convert a whole number to words
     * @private
     * @param {number} number - The number to convert
     * @param {string} lang - The language code
     * @returns {string} The number in words
     */
    convertWholeNumber(number, lang) {
        const dict = this.dictionaries[lang];
        let result = "";

        // Process number in groups of 3 digits
        let groupIndex = 0;

        while (number > 0) {
            const group = number % 1000;

            if (group !== 0) {
                const groupText = this.convertGroup(group, lang);
                const scale = dict.scales[groupIndex];

                result =
                    groupText + (scale ? " " + scale : "") + (result ? " " + result : "");
            }

            number = Math.floor(number / 1000);
            groupIndex++;
        }

        return result;
    }

    /**
     * Convert a group of up to 3 digits to words
     * @private
     * @param {number} number - The number to convert (0-999)
     * @param {string} lang - The language code
     * @returns {string} The number in words
     */
    convertGroup(number, lang) {
        const dict = this.dictionaries[lang];
        let result = "";

        // Handle hundreds
        const hundreds = Math.floor(number / 100);
        if (hundreds > 0) {
            result += dict.ones[hundreds] + " " + dict.hundred;
        }

        // Handle tens and ones
        const remainder = number % 100;
        if (remainder > 0) {
            // Add 'and' if we already have some result
            if (result !== "") {
                result += " " + dict.and + " ";
            }

            // Handle 1-19
            if (remainder < 20) {
                result += dict.ones[remainder];
            } else {
                // Handle 20-99
                const tens = Math.floor(remainder / 10);
                const ones = remainder % 10;

                result += dict.tens[tens];

                if (ones > 0) {
                    // Some languages use hyphens, others use spaces
                    const connector = lang === "fr" || lang === "es" ? "-" : " ";
                    result += connector + dict.ones[ones];
                }
            }
        }

        return result;
    }
}

module.exports = NumberToString;