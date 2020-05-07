import { isObj, isObject } from 'is-all-utils';

interface More {
   [key: string]: any;
}

/**!
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param obj More
 * @param paths string
 * @param defaultVal any | undefined
 */
const dotfast = <T = any>(
   data: More,
   paths: string | string[] | More,
   defaultVal?: any,
): T => {
   // If is an object or array
   if (isObj(paths)) {
      const payload = isObject(paths) ? {} : [];
      for (const [pathKey, path] of Object.entries(paths)) {
         payload[pathKey] = dotfast(data, path);
      }
      return payload as T;
   }

   let obj = data;
   let names: any[];
   names = (paths as string).split('.').reverse();
   while (names.length && obj !== undefined && obj !== null) {
      obj = obj[names.pop()];
   }

   return obj || defaultVal;
};

export default dotfast;
export { dotfast as dtf, dotfast };
