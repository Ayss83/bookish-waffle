export class Recipe {
    public title: string;
    public description: string;
    public imageUrl: string;

    constructor(title: string, desc: string, imageUrl: string) {
        this.title = title;
        this.description = desc;
        this.imageUrl = imageUrl;
    }
}