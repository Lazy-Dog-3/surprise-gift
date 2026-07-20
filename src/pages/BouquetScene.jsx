import { useEffect } from "react";

import Bouquet from "../components/Bouquet/Bouquet";

function BouquetScene({ next }) {

    useEffect(() => {

        const timer = setTimeout(() => {

            next();

        }, 13000);

        return () => clearTimeout(timer);

    }, [next]);

    return (

        <Bouquet />

    );

}

export default BouquetScene;