"use client";

import React, { useState } from "react";

export default function CriarProjeto() {
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [membros, setMembros] = useState<string[]>([]);
  const [tecnologiaInput, setTecnologiaInput] = useState("");
  const [membroInput, setMembroInput] = useState("");

  const adicionarTecnologia = () => {
    if (tecnologiaInput && !tecnologias.includes(tecnologiaInput)) {
      setTecnologias([...tecnologias, tecnologiaInput]);
      setTecnologiaInput("");
    }
  };

  const adicionarMembro = () => {
    if (membroInput && !membros.includes(membroInput)) {
      setMembros([...membros, membroInput]);
      setMembroInput("");
    }
  };

  const excluirTecnologia = (index: number) => {
    setTecnologias(tecnologias.filter((_, i) => i !== index));
  };

  const excluirMembro = (index: number) => {
    setMembros(membros.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#dcdcdc",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      {/* Coluna da Esquerda */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            textAlign: "center",
            borderBottom: "1px solid #ddd",
            marginBottom: "20px",
            paddingBottom: "10px",
          }}
        >
          <h2 style={{ fontWeight: 600 }}>Criar Novo Projeto</h2>
        </header>

        <div style={{ flex: 1 }}>
          <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
            Informações Básicas
          </h4>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="titulo" style={{ fontWeight: "bold" }}>
              Título do projeto
            </label>
            <input
              type="text"
              id="titulo"
              className="form-control"
              placeholder="Ex: Sistema de Gerenciamento"
              style={{ backgroundColor: "#dcdcdc", border: "2px solid #181C1C" }} 
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="descricao" style={{ fontWeight: "bold" }}>
              Descrição Geral
            </label>
            <textarea
              id="descricao"
              className="form-control"
              rows={5}
              placeholder="Descreva o projeto..."
              style={{ backgroundColor: "#dcdcdc", border: "2px solid #181C1C" }} 
            ></textarea>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="detalhes" style={{ fontWeight: "bold" }}>
              Detalhes do Projeto
            </label>
            <textarea
              id="detalhes"
              className="form-control"
              rows={5}
              placeholder="Detalhe o que será feito..."
              style={{ backgroundColor: "#dcdcdc", border: "2px solid #181C1C" }} 
            ></textarea>
          </div>
           {/* Tecnologias */}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="tecnologias" style={{ fontWeight: "bold" }}>
              Tecnologias Utilizadas
            </label>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                id="tecnologias"
                className="form-control"
                value={tecnologiaInput}
                onChange={(e) => setTecnologiaInput(e.target.value)}
                placeholder="Adicione uma tecnologia"
                style={{ backgroundColor: "#dcdcdc", border: "2px solid #181C1C" }} 
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={adicionarTecnologia}
              >
                Adicionar
              </button>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {tecnologias.map((tec, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ddd",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    position: "relative", 
                    border: "1px solid #181C1C"
                  }}
                >
                  {tec}{" "}
                  <button
                    onClick={() => excluirTecnologia(index)}
                    style={{
                      marginLeft: "10px",
                      color: "#f00",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#434343"
                    >
                      <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Membros */}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="membros" style={{ fontWeight: "bold" }}>
              Adicionar Membros
            </label>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                id="membros"
                className="form-control"
                value={membroInput}
                onChange={(e) => setMembroInput(e.target.value)}
                placeholder="Adicione um membro"
                style={{ backgroundColor: "#dcdcdc", border: "2px solid #181C1C" }} 
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={adicionarMembro}
              >
                Adicionar
              </button>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {membros.map((membro, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ddd",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    position: "relative", 
                    border: "1px solid #181C1C"
                  }}
                >
                  {membro}{" "}
                  <button
                    onClick={() => excluirMembro(index)}
                    style={{
                      marginLeft: "10px",
                      color: "#f00",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#434343"
                    >
                      <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coluna da Direita */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h4
          style={{
            marginTop: "75px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          Configurações de Andamento
        </h4>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="funcionalidades" style={{ fontWeight: "bold" }}>
            Funcionalidades Planejadas
          </label>
          <textarea
            id="funcionalidades"
            className="form-control"
            rows={5}
            placeholder="Liste as funcionalidades planejadas para o projeto..."
            style={{
              backgroundColor: "#dcdcdc", 
              color: "#333",
              padding: "10px", 
              borderRadius: "5px",
              border: "2px solid #181C1C" 
              
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="status" style={{ fontWeight: "bold" }}>
            Status
          </label>
          <select
            id="status"
            className="form-select"
            style={{
              border: "2px solid #181C1C",
              backgroundColor: "#dcdcdc",
              color: "#333",
            }}
          >
            <option value="idealizacao">Idealização</option>
            <option value="andamento">Andamento</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="curso" style={{ fontWeight: "bold" }}>
            Curso
          </label>
          <select
            id="curso"
            className="form-select"
            style={{
              backgroundColor: "#dcdcdc",
              color: "#333",
              border: "2px solid #181C1C"
            }}
          >
            <option value="analise">
              Análise e Desenvolvimento de Sistemas
            </option>
            <option value="tecnico">
              Técnico em Desenvolvimento de Sistemas
            </option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <div>
            <label htmlFor="inicio" style={{ fontWeight: "bold" }}>
              Data de Início
            </label>
            <input
              type="date"
              id="inicio"
              className="form-control"
              style={{ backgroundColor: "#dcdcdc", width: "300px", border: "2px solid #181C1C" }} 
            />
          </div>
          <div>
            <label htmlFor="conclusao" style={{ fontWeight: "bold" }}>
              Previsão de Conclusão
            </label>
            <input
              type="date"
              id="conclusao"
              className="form-control"
              style={{ backgroundColor: "#dcdcdc", width: "300px", border: "2px solid #181C1C"  }} 
            />
          </div>
        </div>
        {/* Publicar*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
          }}
        >
          <button
            type="button"
            className="btn btn-success"
            style={{
              marginTop: "30px",
              padding: "8px 10px",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Publicar
          </button>

          <p style={{ fontSize: "14px", marginTop: "10px", color: "#888" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#434343"
            >
              <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>{" "}
            Certifique-se de revisar todas as informações antes de publicar.
          </p>
        </div>
      </div>
    </div>
  );
}
