'use client';

import Link from "next/link";
import api from "@/Services/api";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";

export default function Projeto({params,}: {params: { id: BigInteger };}) {
    console.log(params.id)
    const router = useRouter();
    //const parametro = router.query.id
    //console.log(parametro)

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
            <div className="row">
                <div className="card" style={{ width: 1000, padding:20, borderRadius: 20, backgroundColor: '#DCDCDC', border: 'none', marginTop: "-130px", boxShadow: "1px 2px" }}>
                    <div className="card-header" style={{ backgroundColor: '#DCDCDC'}}>
                        <h3>Plataforma de Cursos Online <span className="badge bg-secondary">Idealização</span></h3>
                    </div>
                    <div className="row g-0">
                        <p>O projeto consiste no desenvolvimento de uma plataforma de cursos online voltada para fornecer aprendizado acessível e diversificado para um público amplo. A plataforma será desenvolvida com foco em usabilidade e acessibilidade, utilizando tecnologias modernas e uma arquitetura robusta para garantir uma experiência de navegação intuitiva e rápida.</p>
                        <h4>Funcionalidades Planejadas</h4>
                        <p>
                            <ul>
                                <li>Cadastro de Usuários e Login</li>
                            </ul>
                        </p>
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