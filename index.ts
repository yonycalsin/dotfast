import { isObj, isObject, isNil } from 'is-all-utils';

interface More {
   [key: string]: any;
}

/**!
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param data More
 * @param paths string | string[] | More
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

   let names: any[] = (paths as string)
      .split(/[,[\].]+?/)
      .filter(Boolean)
      .reverse();

   while (names.length && !isNil(data)) {
      data = data[names.pop()];
   }

   return data || defaultVal;
};

export default dotfast;
export { dotfast as d, dotfast };
