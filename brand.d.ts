export declare const brand: {
    readonly name: "ERNI Showcase";
    readonly tagline: "Discover our innovative demo applications";
    readonly logo: "/ERNIShowcaseApp/assets/ERNI_logo_color-2048x532.png" | "/assets/ERNI_logo_color-2048x532.png";
    readonly favicon: "/ERNIShowcaseApp/assets/favicon.png" | "/assets/favicon.png";
    readonly colors: {
        readonly primary: "#0070f3";
        readonly secondary: "#1a1a1a";
        readonly accent: "#00d2ff";
        readonly neutral: "#f5f5f5";
        readonly success: "#10b981";
        readonly warning: "#f59e0b";
        readonly error: "#ef4444";
        readonly white: "#ffffff";
        readonly black: "#000000";
    };
    readonly fonts: {
        readonly primary: "'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif";
        readonly heading: "'Inter', 'Segoe UI', 'Roboto', sans-serif";
    };
    readonly layout: {
        readonly maxWidth: "1200px";
        readonly gridGap: "1.5rem";
        readonly borderRadius: "0.75rem";
    };
    readonly initialApps: DemoApp[];
};
export type DemoApp = {
    id: string;
    name: string;
    url: string;
    description?: string;
    icon?: string;
};
export declare const applyCSSVariables: () => void;
