import { useRoutes } from "react-router-dom";
import { routeList } from "@/router/routeList";

const Routers = () => {
    const element = useRoutes(routeList);
    return element
}
export default Routers