import { Document } from 'mongoose';
export interface IProduct extends Document {
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly category: string;
    readonly image: string;
    readonly rating: {
        rate: number;
        count: number;
    };
}
