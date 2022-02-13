export interface Router {
    pathname:       string;
    route:          string;
    query:          Events;
    asPath:         string;
    components:     Components;
    isFallback:     boolean;
    basePath:       string;
    isReady:        boolean;
    isPreview:      boolean;
    isLocaleDomain: boolean;
    events:         Events;
}

export interface Components {
    "/":          Empty;
    "/_app":      App;
    "/dashboard": Empty;
}

export interface Empty {
    styleSheets: any[];
    __N_RSC:     boolean;
    props:       Props;
}

export interface Props {
    pageProps: Events;
}

export interface Events {
}

export interface App {
    styleSheets: any[];
}