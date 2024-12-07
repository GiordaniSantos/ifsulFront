'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Profile() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [matricula, setMatricula] = useState("");
    const router = useRouter();

    const salvarPerfil = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/usuarios/perfil", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, sobrenome, dataNascimento, email, matricula }),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Perfil salvo com sucesso!",
                    icon: "success",
                });
                router.push("/projetos");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Não foi possível salvar o perfil.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Ocorreu um erro inesperado.",
            });
        }
    };

    const redirecionarParaEditarCurriculo = () => {
        router.push("/editar-curriculo");
    };

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
            <div className="card" style={{ width: "50%", padding: "20px", borderRadius: "15px", backgroundColor: "#f5f5f5", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
                <div className="text-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="74px" viewBox="0 -960 960 960" width="74px" fill="#434343">
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                </div>
                <form onSubmit={salvarPerfil}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome *</label>
                        <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" id="nome" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome *</label>
                        <input type="text" required value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} className="form-control" id="sobrenome" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento *</label>
                        <input type="date" required value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="form-control" id="dataNascimento" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail *</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="matricula" className="form-label">Matrícula *</label>
                        <input type="text" required value={matricula} onChange={(e) => setMatricula(e.target.value)} className="form-control" id="matricula" />
                    </div>
                    <button type="button" className="btn btn-success mb-3" style={{ width: "100%" }} onClick={redirecionarParaEditarCurriculo}>
                        Editar Currículo
                    </button>
                    <button type="submit" className="btn btn-success" style={{ width: "100%" }}>Salvar</button>
                </form>
            </div>
        </div>
    );
}