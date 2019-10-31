export class ProductModel {

    constructor(
        // tslint:disable-next-line:variable-name
        public _id: string,
        public title: string,
        public category: string,
        public description: string,
        public price: number,
        public images: string[]) {

    }
}
