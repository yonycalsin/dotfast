interface More {
   [key: string]: any;
}
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param obj More
 * @param path string
 * @param defaultVal any | undefined
 */
const dotfast = (obj: More, path: string, defaultVal?: any) => {
   let names: any[];
   names = path.split('.').reverse();
   while (names.length && obj !== undefined && obj !== null) {
      obj = obj[names.pop()];
   }

   return obj || defaultVal;
};

export default dotfast;

export { dotfast as dtf, dotfast };
