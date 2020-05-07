interface More {
    [key: string]: any;
}
declare const dotfast: (obj: More, path: string, defaultVal?: any) => any;
export default dotfast;
export { dotfast as dtf, dotfast };
