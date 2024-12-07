import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <div className="div-projetos">
      <div style={{ display: "flex", height: "100%" }}>
        <aside className="aside-projetos">
          <h3 className="h3-candidatuas">Filtrar</h3>
          <div style={{ marginBottom: "20px" }}>
            <p className="p-projetos">Status</p>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              Idealização
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              Andamento
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              Finalizado
            </label>
          </div>
          <div>
            <p className="p-projetos">Tecnologia</p>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              React
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              MySQL
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              Java
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              HTML
            </label>
            <label className="label-projetos">
              <input type="checkbox" className="checkbox-projetos" />
              CSS
            </label>
          </div>
        </aside>
        <main style={{ flex: 1, padding: "20px" }}>
          <div className="div-projetos2">
            <input
              type="text"
              placeholder="Pesquisar"
              className="input-projetos"
            />
            <button
              className="button-projetos-pesquisar"
              style={{ marginLeft: "10px" }}
            >
              Pesquisar
            </button>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Cartão de Projeto */}
            <div className="cartao-projetos">
              <h4 style={{ margin: "0 0 10px" }}>
                Desenvolvimento de Aplicativo de Fisioterapia
              </h4>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <span className="span-projetos">Flutter</span>
                <span className="span-projetos">Dart</span>
                <span className="span-projetos">MySQL</span>
              </div>
              <p className="p-projetos2">Andamento</p>
              <p style={{ fontSize: "12px", margin: "10px 0" }}>
                Autor: Lucas Veiga - 3A
              </p>
              <p
                style={{
                  fontSize: "12px",
                  marginBottom: "10px",
                  color: "#555",
                }}
              >
                Publicado em: 01/10/2024 | Previsão: 30/12/2024
              </p>
              <button className="button-projetos-editar">Editar</button>
            </div>
            <div className="div-projetos3">
              <span>
                <Link href={"/projetos/create"}>+ Criar Novo Projeto </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
