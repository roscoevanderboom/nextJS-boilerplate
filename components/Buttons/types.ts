
interface Route {
    text: string,
    href: string
}

interface Classes {
    listItems: string
}

export interface TopnavButtonProps {
    route: Route,
    classes: Classes
}