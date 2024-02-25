import bithumbRest from '../bithumb.js';
import type { Int, OrderBook, Trade, Ticker } from '../base/types.js';
import Client from '../base/ws/Client.js';
export default class bithumb extends bithumbRest {
    describe(): any;
    watchPublic(symbol: string, channel: any, params?: {}): Promise<any>;
    watchTicker(symbol: string, params?: {}): Promise<Ticker>;
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    handleTicker(client: Client, message: any): void;
    handleOrderBook(client: Client, message: any): void;
    handleOrderBookSnapshot(client: Client, message: any, orderbook: any): void;
    handleDelta(bookside: any, delta: any): void;
    handleDeltas(bookside: any, deltas: any): void;
    handleOrderBookMessage(client: Client, message: any, orderbook: any): any;
    handleTrades(client: Client, message: any): void;
    handleStatus(client: Client, message: any): void;
    handleMessage(client: Client, message: any): void;
    parseTrade(trade: any, symbol: any): Trade;
}
