import {sellerRoutes} from "./sellerRoutes";
import {adminRoutes} from "./adminRoutes";

export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes
]
