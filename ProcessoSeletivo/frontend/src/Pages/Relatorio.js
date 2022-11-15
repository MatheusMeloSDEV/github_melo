import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../styles/Pages";

const Relatorio = ({ users, getUsers }) => {

  getUsers();
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Cliente</Th>
          <Th>Tipo Movimentação</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="50%">{item.cliente}</Td>
            <Td width="50%">{item.tipomovimentacao}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
export default Relatorio;
