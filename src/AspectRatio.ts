export default class AspectRatio {
    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
    width:number;
    height:number;

    isEqual(ratio:AspectRatio):boolean {
        return this.width == ratio.width && this.height == ratio.height;
    }

    toString():string {
        return this.width + ":" + this.height;
    }

    static CommonAspectRatios:AspectRatio[] = [
        new AspectRatio(4, 3),
        new AspectRatio(5, 4),
        new AspectRatio(16, 9)
    ];

    isCommonAspectRatio():AspectRatio|boolean {
        const ratio = calculateAspectRatio(this);
        return AspectRatio.CommonAspectRatios.find((value) => ratio.isEqual(value)) ? ratio : false;
    }
};

// Find the greatest common divisor
function gcd(a:number, b:number):number {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

export function calculateAspectRatio(ratio:AspectRatio):AspectRatio {
    const divisor = gcd(ratio.width, ratio.height);

    return new AspectRatio(ratio.width / divisor, ratio.height / divisor);
}
