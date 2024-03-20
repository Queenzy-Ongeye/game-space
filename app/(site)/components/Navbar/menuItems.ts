export type MenuTag = {
    name: string;
    route: string;
    margin?: boolean;
}
export const menuItems: MenuTag[] = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Shop",
        route: "/shop",
    },
    {
        name: "Cart",
        route: "/cart",
    },
    {
        name: "Login",
        route: "/signIn",
    },
]