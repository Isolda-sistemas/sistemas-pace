# Sistema de Gestão PACE

Plataforma web responsiva desenvolvida para o cadastro de beneficiários, registro e controle de entregas de kits, acompanhamento da participação em atividades e geração de relatórios gerenciais para o Programa PACE.

## 👥 Integrantes do Grupo (Grupo 01 - Curimatá)
* Edinilva Guimarães de Oliveira
* Gessirlane Pereira Castro
* Ruth Costa e Silva
* Ilane Rodrigues Dias
* Isolda Guerra Nogueira
* Diana Paula Alves dos Santo

## 🎯 Escopo do MVP (Requisitos Funcionais)
* **RF-01 | Cadastro de Beneficiários:** Inclusão, edição, consulta e exclusão lógica de crianças, adolescentes e seus responsáveis.
* **RF-02 | Registro de Entrega:** Registro do fornecimento de kits e materiais vinculados ao beneficiário e data.
* **RF-03 | Registro de Presença:** Controle diário de frequência nas atividades socioeducativas por grupo/turma.
* **RF-04 | Geração de Relatórios:** Emissão de relatórios consolidados por período com exportação em PDF e CSV.
* **RF-05 | Gestão de Acesso:** Controle de permissões distintas entre os perfis Coordenador e Voluntário.

## 🗄️ Banco de Dados (Estrutura Básica)
* `TB_USUARIO`: Controle de acesso e autenticação.
* `TB_RESPONSAVEL`: Dados dos pais e responsáveis legais.
* `TB_BENEFICIARIO`: Registro das crianças e adolescentes atendidos.
* `TB_ATIVIDADE`: Cadastro das oficinas e eventos.
* `TB_PRESENCA`: Histórico de frequência por beneficiário e atividade.
* `TB_ENTREGA`: Histórico de entregas de kits e materiais.

## 📌 Escopo Futuro (Fora do MVP)
* Upload e anexo de documentos digitais.
* Envio automático de mensagens (WhatsApp / SMS).
* Dashboards e gráficos analíticos interativos.
## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3, JavaScript
* **Back-end:** Node.js / Python 
* **Banco de Dados:** PostgreSQL / MySQL 
* **Versionamento:** Git e GitHub

---

## 💾 Banco de Dados (Estrutura Básica)

* `TB_USUARIO` — Controle de acesso e autenticação (Coordenador / Voluntário).
* `TB_BENEFICIARIO` — Dados das crianças, adolescentes e responsáveis.
* `TB_ENTREGA` — Registro do fornecimento de kits e materiais.
* `TB_PRESENCA` — Frequência diária nas atividades socioeducativas.

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Isolda-sistemas/sistemas-pace.git]
