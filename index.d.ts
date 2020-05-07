interface More {
    [key: string]: any;
}
declare const dotfast: <T = any>(data: More, paths: string | string[] | More, defaultVal?: any) => T;
export default dotfast;
export { dotfast as dtf, dotfast };
