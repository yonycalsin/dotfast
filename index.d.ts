interface More {
    [key: string]: any;
}
declare const dotfast: <T = any>(data: More, paths: string | More | string[], defaultVal?: any) => T;
export default dotfast;
export { dotfast as dtf, dotfast };
