'use client';

import Link from "next/link";
import Image from 'next/image'
import { AppDispatch, useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "@/store/auth/auth-slice";

export default function Cabecalho() {
    const dispatch = useDispatch<AppDispatch>();

    const authData = useAppSelector((state) => state.auth);

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        dispatch(actions.verifyUserLogged());
    }, []);

    function logout() {
        dispatch(actions.logout());
    }

    return (
        <div style={{backgroundColor: '#D9D9D9'}}>
            <div className="container container-header">
                <div className="row container-header-interna">
                    <div className="col-4">
                        <Link className="nav-link" href="/">
                            <Image src="/logo.png" width={210} height={80} alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-7">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className={`nav-link`} href="/">
                                                Início
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/projetos">
                                                Meus Projetos
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/candidaturas">
                                                Minhas Candidaturas
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-1">
                        <span className="nav-item dropdown user-dropdown">
                            <a className="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/user-icon.png" width={60} height={60} alt="Logo"/>
                            </a>
                            <ul className="dropdown-menu">
                                { authData.user.id ?  
                                    (
                                        <>
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalSair" >Sair</a></li> 
                                        </>
                                    )
                                    : 
                                    (
                                        <>
                                            <li>
                                                <Link className="dropdown-item" href="/login">
                                                    Logar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/register">
                                                    Cadastrar
                                                </Link>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalSair" aria-labelledby="modalSairLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalSairLabel">Pronto para sair?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Selecione "Sair" abaixo se estiver pronto para encerrar sua sessão atual.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={logout} style={{color: '#FFF'}}>Sair</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}