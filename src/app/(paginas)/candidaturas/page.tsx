import React from "react";

export default function Projects() {
    return (
        <div className="container">
            <br />
            <div
                className="input-group me-4"
                style={{maxWidth: "300px", backgroundColor: "#f5f5f5", borderRadius: "20px", marginBottom: "15px"}}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar projetos"
                    aria-label="Pesquisar projetos"
                    style={{
                        border: "none",
                        backgroundColor: "transparent",
                        borderRadius: "20px 0 0 20px",
                        paddingLeft: "15px",
                    }}
                />
                <button
                    className="btn btn-outline-success"
                    type="button"
                    style={{
                        border: "none",
                        borderRadius: "0 20px 20px 0",
                    }}
                >
                    🔍
                </button>
            </div>

            <div className="row">

                <aside className="col-md-3 mb-4">
                    <div className="card p-3" style={{borderRadius: "15px", backgroundColor: "#F9F9F9"}}>
                        <h5 className="mb-3">Filtrar</h5>
                        <div className="mb-4">
                            <h6>Status</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="status1"/>
                                <label className="form-check-label" htmlFor="status1">
                                    Ideia
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="status2"/>
                                <label className="form-check-label" htmlFor="status2">
                                    Andamento
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="status3"/>
                                <label className="form-check-label" htmlFor="status3">
                                    Finalizado
                                </label>
                            </div>
                        </div>
                        <div>
                            <h6>Tecnologia</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tech1"/>
                                <label className="form-check-label" htmlFor="tech1">
                                    React
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tech2"/>
                                <label className="form-check-label" htmlFor="tech2">
                                    MySQL
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tech3"/>
                                <label className="form-check-label" htmlFor="tech3">
                                    Java
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tech4"/>
                                <label className="form-check-label" htmlFor="tech4">
                                    HTML
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="tech5"/>
                                <label className="form-check-label" htmlFor="tech5">
                                    CSS
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Lista de projetos */}
                <section className="col-md-9">
                    <div className="row g-4">
                        {/* Cartão de Projeto */}
                        {[
                            {
                                title: "Sistema de Gerenciamento de Tarefas",
                                status: "Andamento",
                                tags: ["Java", "Spring Boot", "MySQL"],
                                author: "Anna Maria - 2A",
                                published: "05/10/2024",
                                due: "20/12/2024",
                                badgeColor: "yellow",
                                approval: "Aprovado",
                            },
                            {
                                title: "Reformulação do Site Institucional",
                                status: "Finalizado",
                                tags: ["HTML", "CSS", "JavaScript"],
                                author: "Pedro Borba - 4A",
                                published: "15/09/2024",
                                due: "01/10/2024",
                                badgeColor: "green",
                                approval: "Rejeitado",
                            },
                            {
                                title: "Plataforma de Cursos Online",
                                status: "Ideia",
                                tags: ["PHP", "Laravel", "MySQL"],
                                author: "João Miguel - 3A",
                                published: "20/09/2024",
                                due: "15/01/2025",
                                badgeColor: "blue",
                                approval: "Análise",
                            },
                        ].map((project, index) => (
                            <div className="col-md-6" key={index}>
                                <div
                                    className="card p-3"
                                    style={{
                                        borderRadius: "15px",
                                        height: 280,
                                        overflowY: "auto",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h5 className="card-title mb-2">{project.title}</h5>
                                            <div className="mb-3">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="badge bg-secondary me-2"
                                                        style={{fontSize: "0.85rem"}}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span
                                                className={`badge text-dark bg-${project.badgeColor}`}
                                                style={{fontSize: "0.85rem"}}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                        <span
                                            className="badge bg-success"
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#fff",
                                                padding: "5px 10px",
                                                borderRadius: "8px",
                                            }}
                                        >
                                            {project.approval}
                                        </span>
                                    </div>
                                    <p className="mt-3 mb-1 text-muted" style={{fontSize: "0.9rem"}}>
                                        Autor: {project.author}
                                    </p>
                                    <p className="text-muted" style={{fontSize: "0.9rem"}}>
                                        Publicado em: {project.published} | Previsão: {project.due}
                                    </p>
                                    <button className="btn btn-outline-success w-100">Saiba Mais</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>

    );
}