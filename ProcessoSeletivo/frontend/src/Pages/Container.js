import axios from "axios";
import React, { useEffect, useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import  {toast}  from "react-toastify";
import { Button, FormContainer, Input, InputArea, Label, Table, Tbody, Td, Th, Thead, Tr, } from "../styles/Pages.js";

const Container = ({ getUsers, onEdit, setOnEdit, setUsers, users }) => {
    const ref = useRef();

    useEffect(() => {
      if (onEdit) {
        const user = ref.current;

        user.cliente.value = onEdit.cliente;
        user.ncontainer.value = onEdit.ncontainer;
        user.tipo.value = onEdit.tipo;
        user.status.value = onEdit.status;
        user.categoria.value = onEdit.categoria;
      }
    }, [onEdit]);

    const handleEdit = (item) => {
      setOnEdit(item);
    };
  
    const handleDelete = async (id) => {
      await axios
        .delete("http://localhost:8801/container" + id)
        .then(({ data }) => {
          const newArray = users.filter((user) => user.id !== id);
  
          setUsers(newArray);
          toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
  
      setOnEdit(null);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const user = ref.current;

      if (
        !user.cliente.value ||
        !user.ncontainer.value ||
        !user.tipo.value ||
        !user.status.value ||
        !user.categoria.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }

      if (onEdit) {
        await axios
          .put("http://localhost:8801/container" + onEdit.id, {
            cliente: user.cliente.value,
            ncontainer: user.ncontainer.value,
            tipo: user.tipo.value,
            status: user.status.value,
            categoria: user.categoria.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8801/container", {
            cliente: user.cliente.value,
            ncontainer: user.ncontainer.value,
            tipo: user.tipo.value,
            status: user.status.value,
            categoria: user.categoria.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }

      user.cliente.value = "";
      user.ncontainer.value = "";
      user.tipo.value = "";
      user.status.value = "";
      user.categoria.value = "";

      setOnEdit(null);
      getUsers();
    };

    return (
    <div>
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Cliente</Label>
          <Input name="cliente" />
        </InputArea>

        <InputArea>
          <Label>NContainer</Label>
          <Input name="ncontainer" />
        </InputArea>

        <InputArea>
          <Label>Tipo</Label>
          <Input name="tipo" />
        </InputArea>

        <InputArea>
          <Label>Status</Label>
          <Input name="status" />
        </InputArea>

        <InputArea>
          <Label>Categoria</Label>
          <Input name="categoria" />
        </InputArea>

        <Button type="submit">SALVAR</Button>
      </FormContainer>
      <Table>
      <Thead>
        <Tr>
          <Th>Cliente</Th>
          <Th>NContainer</Th>
          <Th>Tipo</Th>
          <Th>Status</Th>
          <Th>Categoria</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="10%">{item.cliente}</Td>
            <Td width="15%">{item.ncontainer}</Td>
            <Td width="10%">{item.tipo}</Td>
            <Td width="10%">{item.status}</Td>
            <Td width="10%">{item.categoria}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </div>
    );
};

export default Container;
