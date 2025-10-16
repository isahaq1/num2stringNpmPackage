# @isahaq/numbertostring

[![npm version](https://img.shields.io/npm/v/@isahaq/numbertostring.svg)](https://www.npmjs.com/package/@isahaq/numbertostring)
[![License](https://img.shields.io/npm/l/@isahaq/numbertostring.svg)](https://github.com/yourusername/numbertostring/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@isahaq/numbertostring.svg)](https://www.npmjs.com/package/@isahaq/numbertostring)

A powerful and flexible multilingual **number-to-words converter** supporting multiple languages with an easy-to-use API.

## ✨ Features

- 🌍 **Multi-language support**: English, Bangla, French, Urdu, Chinese, Hindi, and Spanish
- 🔢 **Large number support**: Handle numbers from zero to billions
- 💱 **Currency formatting**: Built-in currency conversion support
- 🎯 **TypeScript support**: Full type definitions included
- ⚡ **Lightweight**: Minimal dependencies and small bundle size
- 🛠️ **Highly configurable**: Customize output format to your needs

## 📦 Installation

```bash
npm install @isahaq/numbertostring
```

Or using yarn:

```bash
yarn add @isahaq/numbertostring
```

Or using pnpm:

```bash
pnpm add @isahaq/numbertostring
```

## 🎯 Quick Start

```javascript
const NumberToString = require("@isahaq/numbertostring");

// Create an instance of the converter
const converter = new NumberToString();

// Convert numbers to different languages
console.log(converter.convertEn(12345)); // twelve thousand three hundred and forty five
console.log(converter.convertBn(12345)); // বারো হাজার তিন শত পঁয়তাল্লিশ
console.log(converter.convertFr(12345)); // douze mille trois cent quarante-cinq
console.log(converter.convertUr(12345)); // بارہ ہزار تین سو پینتالیس
console.log(converter.convertZh(12345)); // 一万二千三百四十五
console.log(converter.convertHi(12345)); // बारह हज़ार तीन सौ पैंतालीस
console.log(converter.convertEs(12345)); // doce mil trescientos cuarenta y cinco
```

## 🌐 Supported Languages

| Language | Code | Example (42)   |
| -------- | ---- | -------------- |
| English  | `en` | forty-two      |
| Bangla   | `bn` | বিয়াল্লিশ     |
| French   | `fr` | quarante-deux  |
| Spanish  | `es` | cuarenta y dos |
| Hindi    | `hi` | बयालीस         |
| Urdu     | `ur` | بیالیس         |
| Chinese  | `zh` | 四十二         |

## ⚙️ API Reference

### `numberToWords(number, options)`

Converts a number to its word representation.

#### Parameters

- `number` (number): The number to convert
- `options` (object, optional): Configuration options
  - `language` (string): Language code (default: `'en'`)
  - `currency` (boolean): Format as currency (default: `false`)
  - `currencyUnit` (string): Currency unit name
  - `titleCase` (boolean): Capitalize first letter (default: `false`)
  - `ordinal` (boolean): Convert to ordinal number (default: `false`)

#### Returns

- (string): The number converted to words

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Isahaq**

- GitHub: [@isahaq1](https://github.com/isahaq1)
- npm: [@isahaq](https://www.npmjs.com/~isahaq)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped with language translations
- Inspired by similar number-to-words libraries

## 📊 Support

If you found this project helpful, please give it a ⭐️!

For issues and feature requests, please use the [GitHub issue tracker](https://github.com/isahaq1/numbertostring/issues).

---

Made with ❤️ by Isahaq
