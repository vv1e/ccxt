declare class Throttler {
    constructor(config: any);
    loop(): Promise<void>;
    throttle(cost?: any, config?: any): Promise<unknown>;
}
export { Throttler, };
