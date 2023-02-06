export declare class CreateProductDto {
    readonly title: string;
    readonly price: number;
    readonly description: string;
    readonly category: string;
    readonly image: string;
    readonly rating: {
        rate: number;
        count: number;
    };
}
