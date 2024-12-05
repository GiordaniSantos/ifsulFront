"use client";
import { useState } from "react";

export default function Register() {
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [novaHabilidade, setNovaHabilidade] = useState<string>("");
  const [formacoes, setFormacoes] = useState<any[]>([]);
  const [formacaoAtual, setFormacaoAtual] = useState<{
    formacao: string;
    grau: string;
    status: string;
    curso: string;
    instituicao: string;
    inicio: string;
    fim: string;
  }>({
    formacao: "",
    grau: "",
    status: "",
    curso: "",
    instituicao: "",
    inicio: "",
    fim: "",
  });

  const adicionarHabilidade = () => {
    if (novaHabilidade.trim()) {
      setHabilidades([...habilidades, novaHabilidade.trim()]);
      setNovaHabilidade("");
    }
  };

  const removerHabilidade = (index: number) => {
    setHabilidades(habilidades.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      adicionarHabilidade();
    }
  };

  const adicionarFormacao = () => {
    if (Object.values(formacaoAtual).every((field) => field.trim() !== "")) {
      setFormacoes([...formacoes, formacaoAtual]);
      setFormacaoAtual({
        formacao: "",
        grau: "",
        status: "",
        curso: "",
        instituicao: "",
        inicio: "",
        fim: "",
      });
    }
  };

  const removerFormacao = (index: number) => {
    setFormacoes(formacoes.filter((_, i) => i !== index));
  };

  return (
    <div className="container-curriculo">
      <div className="row">
        <div className="card-curriculo">
          <h2 style={{ textAlign: "initial", marginBottom: "20px" }}>
            Meu currículo
          </h2>

          {/* Experiência acadêmica */}
          <div style={{ marginBottom: "15px" }}>
            <h4>
              Experiência acadêmica
              </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              <div>
                <label style={{ fontWeight: "bold" }}>Formação *</label>
                <select
                  className="div-curriculo"
                  value={formacaoAtual.formacao}
                  onChange={(e) =>
                    setFormacaoAtual({
                      ...formacaoAtual,
                      formacao: e.target.value,
                    })
                  }
                >
                  <option value="">Selecione</option>
                  <option>Técnico</option>
                  <option>Superior</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: "bold" }}>Grau *</label>
                <select
                  className="div-curriculo"
                  value={formacaoAtual.grau}
                  onChange={(e) =>
                    setFormacaoAtual({ ...formacaoAtual, grau: e.target.value })
                  }
                >
                  <option value="">Selecione</option>
                  <option>Técnico</option>
                  <option>Tecnólogo</option>
                  <option>Bacharelado</option>
                  <option>Licenciatura</option>
                  <option>Especialização</option>
                  <option>Mestrado</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: "bold" }}>Status *</label>
                <select
                  className="div-curriculo"
                  value={formacaoAtual.status}
                  onChange={(e) =>
                    setFormacaoAtual({
                      ...formacaoAtual,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="">Selecione</option>
                  <option>Em andamento</option>
                  <option>Concluído</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: "bold" }}>Curso *</label>
                <input
                  type="text"
                  className="div-curriculo"
                  value={formacaoAtual.curso}
                  onChange={(e) =>
                    setFormacaoAtual({ ...formacaoAtual, curso: e.target.value })
                  }
                />
              </div>
              <div>
                <label style={{ fontWeight: "bold" }}>Instituição *</label>
                <input
                  type="text"
                  className="div-curriculo"
                  value={formacaoAtual.instituicao}
                  onChange={(e) =>
                    setFormacaoAtual({
                      ...formacaoAtual,
                      instituicao: e.target.value,
                    })
                  }
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <div>
                  <label style={{ fontWeight: "bold" }}>Início *</label>
                  <input
                    type="date"
                    className="div-curriculo"
                    value={formacaoAtual.inicio}
                    onChange={(e) =>
                      setFormacaoAtual({
                        ...formacaoAtual,
                        inicio: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label style={{ fontWeight: "bold" }}>Fim *</label>
                  <input
                    type="date"
                    className="div-curriculo"
                    value={formacaoAtual.fim}
                    onChange={(e) =>
                      setFormacaoAtual({ ...formacaoAtual, fim: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button
              onClick={adicionarFormacao}
              className="button-curriculo-add"
            >
              + Adicionar formação
            </button>
            <div style={{ marginTop: "15px" }}>
              {formacoes.map((formacao, index) => (
                <div
                  key={index}
                  className="div-curriculo2"
                >
                  <p>
                    <strong>Formação:</strong> {formacao.formacao}
                  </p>
                  <p>
                    <strong>Grau:</strong> {formacao.grau}
                  </p>
                  <p>
                    <strong>Status:</strong> {formacao.status}
                  </p>
                  <p>
                    <strong>Curso:</strong> {formacao.curso}
                  </p>
                  <p>
                    <strong>Instituição:</strong> {formacao.instituicao}
                  </p>
                  <p>
                    <strong>Período:</strong> {formacao.inicio} - {formacao.fim}
                  </p>
                  <button
                    onClick={() => removerFormacao(index)}
                    className="button-curriculo-excluir"
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div style={{ marginBottom: "15 px" }}>
            <h4>Habilidades</h4>
            <p>
              As habilidades envolvem desde conhecimentos técnicos até o modo
              como você se relaciona com as pessoas.
            </p>
            <div
              className="div-curriculo-habilidades"
            >
              <input
                type="text"
                placeholder="Escreva e selecione uma habilidade"
                value={novaHabilidade}
                onChange={(e) => setNovaHabilidade(e.target.value)}
                onKeyDown={handleKeyPress}
                className="input-curriculo"
              />
              <button
                onClick={adicionarHabilidade}
                className="button-curriculo-addHabilidade"
              >
                Adicionar
              </button>
            </div>
            <div
              className="div-curriculo3"
            >
              {habilidades.map((habilidade, index) => (
                <span
                  key={index}
                  className="span-curriculo"
                >
                  {habilidade}
                  <button
                    onClick={() => removerHabilidade(index)}
                    className="button-curriculo-removeHabilidade"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="button-curriculo-salvar">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

