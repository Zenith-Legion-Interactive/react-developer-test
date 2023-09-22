import { ObjectFlat, BeautifyObject } from "../types";

export const flattenObject = (obj: ObjectFlat, prefix = ''): ObjectFlat => {
    return Object.keys(obj).reduce((acc: {[key: string]: any}, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && obj[k] !== null && !(obj[k] instanceof Date)) {
        Object.assign(acc, flattenObject(obj[k], pre + k));
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
}
  

export const beautifyJSON = (jsonObj: BeautifyObject) => {
    let beautifiedString = '';
    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
        const formattedKey = key.replace('_', ' ');
        const value = typeof jsonObj[key] === 'string' ? jsonObj[key] : jsonObj[key][0];
        beautifiedString += `${formattedKey} : ${value}\n`;
        }
    }
    return beautifiedString.trim();
}