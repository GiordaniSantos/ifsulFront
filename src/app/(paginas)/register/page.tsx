'use client';

import { FormEvent, useState } from "react";
import Link from "next/link";
import api from "@/Services/api";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";

export default function Register() {
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const router = useRouter();

    const registrar = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if(confirmarSenha != senha){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Os campos Confirmar Senha e Senha não coincidem!"
            });
            return
        }

        try {
            const response = await api.post("/usuarios", {
                nome: nome,
                matricula: matricula,
                email: email,
                senha: senha,
            });

            Swal.fire({
                title: "Conta criada sucesso!",
                text: "Agora você pode acessar a plataforma.",
                icon: "success"
            });

            router.push("/login"); 
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Erro ao criar conta: " + error
            });
        }
    };

    return (
        <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", height: "85vh"}}>
            <div className="row">
                <div className="card" style={{width: 900, borderRadius: 25, backgroundColor: '#DCDCDC', border: 'none', boxShadow: "1px 2px"}}>
                    <div className="row g-0">
                        <div className="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src="/logo.png" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-6" style={{padding: "20px 55px"}}>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Criar uma conta</h5>
                                <form onSubmit={registrar}>
                                    <div className="mb-3">
                                        <label htmlFor="nome" className="form-label">Nome:</label>
                                        <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" id="nome"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="matricula" className="form-label">Matrícula:</label>
                                        <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} className="form-control" id="matricula"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senha" className="form-label">Senha:</label>
                                        <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)}  className="form-control" id="senha"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senhaConfirmation" className="form-label">Confirme sua senha:</label>
                                        <input type="password" required value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} className="form-control" id="senhaConfirmation"/>
                                    </div>
                                    <button type="submit" className="btn btn-success mb-3" style={{width: '100%'}}>
                                        Cadastrar
                                    </button>
                                    <div className="container-text-center">
                                        <div className="linha"></div>
                                        <span>ou</span>
                                        <div className="linha"></div>
                                    </div>
                                    <div className="text-center">
                                        Já possui uma conta?
                                        <Link href="/login" style={{
                                            marginLeft: "5px",
                                            color: "#198754",
                                            fontWeight: "bold",
                                            textDecoration: "none"
                                        }}>
                                            Entre
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}