import { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const salvar = async () => {
    setMensagem('Salvando...');
    
    // Aguarda 3 segundos antes de começar a processar
    setTimeout(async () => {
      const dados = {
        id,
        nome,
        telefone,
      };

      const apiMysql = 'http://localhost:8081/usuarios'; // API MySQL
      const apiMongo = 'http://localhost:8080/usuarios'; // API MongoDB (ajuste se necessário)

      let sucessoMysql = false;
      let sucessoMongo = false;
      let erroMysql = '';
      let erroMongo = '';

      try {
        const res = await fetch("http://localhost:8081/usuarios", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });

        if (res.ok) {
          sucessoMysql = true;
        } else {
          erroMysql = `MySQL retornou status ${res.status}`;
        }
      } catch (err) {
        erroMysql = `Erro ao salvar no MySQL: ${err.message}`;
      }

      try {
        const res = await fetch("http://localhost:8080/usuarios", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });

        if (res.ok) {
          sucessoMongo = true;
        } else {
          erroMongo = `MongoDB retornou status ${res.status}`;
        }
      } catch (err) {
        erroMongo = `Erro ao salvar no MongoDB: ${err.message}`;
      }

      if (sucessoMysql && sucessoMongo) {
        setMensagem('✅ Dados salvos com sucesso nas duas APIs!');
      } else {
        let msg = '❌ Falha ao salvar:\n';
        if (!sucessoMysql) msg += `- MySQL: ${erroMysql}\n`;
        if (!sucessoMongo) msg += `- MongoDB: ${erroMongo}\n`;
        setMensagem(msg);
      }
    }, 3000); // Espera 3 segundos antes de processar as APIs
  };

  return (
    <div className="container">
      <div className="header">CADASTRO</div>
      <div className="form">
        <label>ID :</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label>Nome :</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>Telefone :</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <button onClick={salvar}>Salvar</button>
        {mensagem && (
          <p style={{ color: 'black', whiteSpace: 'pre-wrap', marginTop: '10px' }}>
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
