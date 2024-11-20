import Link from "next/link";

export default function Login() {
    return (
        <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", height: "85vh"}}>
            <div className="row">
                <div className="card" style={{width: 850, borderRadius: 25, backgroundColor: '#DCDCDC', border: 'none', marginTop: "-130px", boxShadow: "1px 2px"}}>
                    <div className="row g-0">
                        <div className="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src="/logo.png" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-6" style={{padding: "20px 55px"}}>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Login</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senha" className="form-label">Senha:</label>
                                        <input type="password" className="form-control" id="senha"/>
                                    </div>
                                    <button type="submit" className="btn btn-success mb-3"
                                            style={{width: '100%'}}>Entrar
                                    </button>
                                    <Link href="/" style={{color: "#347B3E", textDecoration: "none"}}>
                                        Esqueceu ou deseja alterar sua senha?
                                    </Link>
                                    <div className="container-text-center">
                                        <div className="linha"></div>
                                        <span>ou</span>
                                        <div className="linha"></div>
                                    </div>
                                    Não possui uma conta?
                                    <Link href="/register" style={{marginLeft: "5px", color: "#198754", fontWeight: "bold", textDecoration: "none"}}>
                                        Cadastre-se
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}