import React from 'react';
import { Nav } from 'react-bootstrap';

function Nave() {
  return (
    <nav>
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link href="/irmaodojorelapp">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/irmaodojorelapp/episode">Episódios</Nav.Link>
        </Nav.Item>
          <Nav.Link href="/irmaodojorelapp/about">Sobre</Nav.Link>
        <Nav.Item>
        </Nav.Item>
      </Nav>
    </nav>
  );
}

export default Nave;
