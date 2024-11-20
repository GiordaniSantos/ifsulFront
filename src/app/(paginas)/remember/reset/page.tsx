import Link from "next/link";

export default function Reset() {
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
                                <h5 className="card-title mb-3">Escolha um nova senha</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="senha" className="form-label">Senha:</label>
                                        <input type="password" className="form-control" id="senha"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senhaConfirmation" className="form-label">Confirmar nova
                                            senha:</label>
                                        <input type="password" className="form-control" id="senhaConfirmation"/>
                                    </div>
                                    <button type="submit" className="btn btn-success mb-3" style={{width: '100%'}}>
                                        Próximo
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}