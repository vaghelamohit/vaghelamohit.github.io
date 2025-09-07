export interface ProjectLink {
    name: string;
    url: string;
}

export default class ProjectData {
    id: string;
    baseUrl: string;
    name: string;
    iconUrl: string; // used as thumnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar 
    shortDescription?: string;
    fullDescription?: string;
    links?: ProjectLink[];
    videos?: string[];
    images?: string[];
    preloadImages?: string[];

    constructor(id: string,baseUrl: string, name: string, iconUrl: string, accentColor = "#000000", isHigh = false, isWide = false){
        this.id = id;
        this.baseUrl = baseUrl;
        this.name = name;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
    }
}
