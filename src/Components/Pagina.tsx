"use client";

import Cabecalho from "@/Components/Cabecalho";
import Rodape from "@/Components/Rodape";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Head from "next/head";

export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Cabecalho />
                    <main>
                        {props.children}
                    </main>
                <Rodape/>
            </div>
        </div>
    )
}