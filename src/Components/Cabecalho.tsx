import Link from "next/link";
import Image from 'next/image'

export default function Cabecalho() {

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
                                            <Link className="nav-link" href="/">
                                                Meus Projetos
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/">
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
                                <li>
                                    <Link className="dropdown-item" href="/login">
                                        Logar
                                    </Link>
                                </li>
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Sair</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}