declare class Throttler {
    constructor(config: any);
    loop(api_rate_limit_group: any): Promise<void>;
    throttle(cost?: any, config?: any): Promise<unknown>;
}
export { Throttler, };
