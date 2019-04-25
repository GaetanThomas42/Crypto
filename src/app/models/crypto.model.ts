import { Market } from './market.model';

export interface Cryptom {
    base: string;
    target: string;
    price: string;
    volume: string;
    change: string;
    markets: Market[];
}
