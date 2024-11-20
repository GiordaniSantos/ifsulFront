import Link from "next/link";

export default function Token() {
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
                                <h5 className="card-title mb-3">Insira o código de segurança</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="token" className="form-label">Código:</label>
                                        <input type="text" className="form-control" id="token"/>
                                    </div>
                                    <button type="submit" className="btn btn-success mb-3" style={{width: '100%'}}>
                                        Redefinir
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