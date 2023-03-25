/* eslint-disable no-continue */
import createError from 'http-errors';

export default class CaesarEncryption {
  private static readonly ALPHABET_SIZE = 26;

  public static encrypt(str: string, shift: number): string {
    if (shift <= 0 || shift >= 26) {
      throw new createError.NotAcceptable(
        'The caesar encryption algorithm shift option must be greater than 0 and less than 26'
      );
    }

    shift %= CaesarEncryption.ALPHABET_SIZE;
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      const charCode = str.charCodeAt(i);

      if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
        result += char;
        continue;
      }

      const alphabetStart = charCode >= 97 ? 97 : 65;
      const shiftedCharCode =
        ((charCode - alphabetStart + shift) % CaesarEncryption.ALPHABET_SIZE) + alphabetStart;
      result += String.fromCharCode(shiftedCharCode);
    }

    return result;
  }

  public static decrypt(str: string, shift: number): string {
    if (shift <= 0 || shift >= 26) {
      throw new createError.NotAcceptable(
        'The caesar encryption algorithm shift option must be greater than 0 and less than 26'
      );
    }

    shift %= CaesarEncryption.ALPHABET_SIZE;
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      const charCode = str.charCodeAt(i);

      if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
        result += char;
        continue;
      }

      const alphabetStart = charCode >= 97 ? 97 : 65;
      const shiftedCharCode =
        ((charCode - alphabetStart - shift + CaesarEncryption.ALPHABET_SIZE) %
          CaesarEncryption.ALPHABET_SIZE) +
        alphabetStart;
      result += String.fromCharCode(shiftedCharCode);
    }

    return result;
  }
}
