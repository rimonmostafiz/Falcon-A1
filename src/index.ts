function formatString(input: string, toUpper?: boolean): string {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    arrays.forEach(item => result.push(...item));
    return result;
}

class Vehicle {
    private make: string;
    public year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `"Make: ${this.make}, Year: ${this.year}"`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `"Model: ${this.model}"`;
    }
}

function processValue(value: string | number): number {
    return typeof value === "number" ? value * 2 : value.length;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        return products.reduce((maxProduct: Product, currentProduct: Product) => {
            return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
        })
    }
}

