export default class Config {
    constructor(props?: Partial<Config>) {
        Object.assign(this, props);
    }

    buttonDependsOnCheckbox: boolean = false;
    showButton: boolean = true;
    buttonText: string = "";
    showCheckbox: boolean = false;
    checkboxText: string = "";
    checkboxChecked: boolean = false;
    showImage: boolean = true;
    imageHeight: string = "200px";
    imageUrl: string = "";
    infoText: string = "";
    title: string = "Welcome";
}
