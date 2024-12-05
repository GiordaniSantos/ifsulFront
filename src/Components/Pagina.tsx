"use client";

import Cabecalho from "@/Components/Cabecalho";
import Rodape from "@/Components/Rodape";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Head from "next/head";
import { StoreWrapper } from "@/store/StoreWrapper";

export interface PaginaProps {
    children: React.ReactNode
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
                <StoreWrapper>
                    <Cabecalho />
                        <main>
                            {props.children}
                        </main>
                    <Rodape/>
                </StoreWrapper>
            </div>
        </div>
    )
}