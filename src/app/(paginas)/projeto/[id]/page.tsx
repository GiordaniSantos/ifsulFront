'use client';

import Link from "next/link";
import api from "@/Services/api";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function Projeto({params,}: {params: { id: BigInteger };}) {
    
    const router = useRouter();

    const [projeto, setProjeto] = useState<any>([]);

    const buscarProjeto = async () => {
        try {
            
            const resposta = await api.get(`/projetos/${params.id}`);
            
            setProjeto(resposta.data);
        } catch (error:any) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data
            });
        }
    };
    
    useEffect(() => {
        buscarProjeto();
    }, []);
    
    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
            <div className="row">
                <div className="card" style={{ width: 1000, padding:20, borderRadius: 20, backgroundColor: '#DCDCDC', border: 'none', marginTop: "-130px", boxShadow: "1px 2px" }}>
                    <div className="card-header" style={{ backgroundColor: '#DCDCDC'}}>
                        <h3>{projeto.nome} <span className="badge bg-secondary">Idealização</span></h3>
                    </div>
                    <div className="row g-0">
                        <br />
                        <p>{projeto.descricao}</p>
                        <h4>Funcionalidades Planejadas</h4>
                        <div>
                            <ul>
                                <li>Cadastro de Usuários e Login</li>
                            </ul>
                        </div>
                        <h4>Tecnologias Utilizadas</h4>
                        <p>
                            <span className="badge bg-secondary me-2">PHP</span>
                            <span className="badge bg-secondary me-2">Laravel</span>
                            <span className="badge bg-secondary me-2">MYSQL</span>
                        </p>
                    </div>
                    <div className="card-footer text-center" style={{ backgroundColor: '#DCDCDC'}}>
                        <a href="#" className="btn btn-success">Candidatar-se</a>
                    </div>
                </div>
            </div>
        </div>
    );
}