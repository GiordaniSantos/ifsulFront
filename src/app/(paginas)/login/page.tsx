'use client';

import { FormEvent, useState } from "react";
import Link from "next/link";
import api from "@/Services/api";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";
import { AppDispatch } from "@/store";
import { actions } from "@/store/auth/auth-slice";
import { useDispatch } from "react-redux";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        try {
            const response = await api.post("/login", {
                email: email,
                senha: senha,
            });

            dispatch(actions.login({
                user: {
                    email: response.data.userDetails.email,
                    fotoDePerfilUrl: response.data.userDetails.fotoDePerfilUrl,
                    id: response.data.userDetails.id,
                    matricula: response.data.userDetails.matricula,
                    nome: response.data.userDetails.nome,
                    usuarioTipo: response.data.userDetails.usuarioTipo
                },
                token: response.data.token
            }))

            Swal.fire({
                icon: "success",
                title: "Login efetuado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });

            router.push("/"); 
        } catch (error: any) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Erro ao fazer login: " + error.response.data
            });
        }
    };

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
            <div className="row">
                <div className="card" style={{ width: 850, borderRadius: 25, backgroundColor: '#DCDCDC', border: 'none', marginTop: "-130px", boxShadow: "1px 2px" }}>
                    <div className="row g-0">
                        <div className="col-md-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="/logo.png" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6" style={{ padding: "20px 55px" }}>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Login</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senha" className="form-label">Senha:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="senha"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success mb-3" style={{ width: '100%' }}>Entrar</button>
                                    <Link href="/remember" style={{ color: "#347B3E", textDecoration: "none" }}>
                                        Esqueceu ou deseja alterar sua senha?
                                    </Link>
                                    <div className="container-text-center">
                                        <div className="linha"></div>
                                        <span>ou</span>
                                        <div className="linha"></div>
                                    </div>
                                    Não possui uma conta?
                                    <Link href="/register" style={{ marginLeft: "5px", color: "#198754", fontWeight: "bold", textDecoration: "none" }}>
                                        Cadastre-se
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}