export type DemoApp = {
    id: string;
    name: string;
    url: string;
    description?: string;
    icon?: string;
    image?: string;
    tags: string[];
};
export declare const defaultApps: DemoApp[];
