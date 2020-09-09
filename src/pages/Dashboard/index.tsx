import React from 'react';
import { FiChevronRight } from "react-icons/fi";

import logoImg from '../../assets/gitLogo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Git Repo"/>
      <Title>Repositório GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/47873144?s=460&u=41faac1601380224a78bf4f8b027237e07812b22&v=4" alt="avatar"/>
          <div>
            <strong>August_Souz/reactJS</strong>
            <p>Testando o ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
