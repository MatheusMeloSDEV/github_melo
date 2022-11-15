import axios from "axios";
import { useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import  {toast}  from "react-toastify";
import {
  Button,
  FormContainer,
  Input,
  InputArea,
  Label,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../styles/Pages";


const Movimentacao = ({ getUsers, onEdit, setOnEdit, setUsers, users }) => {

  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.tipomovimentacoes.value = onEdit.tipomovimentacoes;
      user.datahorainicio.value = onEdit.datahorainicio;
      user.datahorafim.value = onEdit.datahorafim;
    }
  }, [onEdit]);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8801/movimentacoes" + id)
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
      !user.tipomovimentacoes.value ||
      !user.datahorainicio.value ||
      !user.datahorafim.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8801/movimentacoes" + onEdit.id, {
          tipomovimentacoes: user.tipomovimentacoes.value,
          datahorainicio: user.datahorainicio.value,
          datahorafim: user.datahorafim.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8801/movimentacoes", {
          tipomovimentacoes: user.tipomovimentacoes.value,
          datahorainicio: user.datahorainicio.value,
          datahorafim: user.datahorafim.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.tipomovimentacoes.value = "";
    user.datahorainicio.value = "";
    user.datahorafim.value = "";

    setOnEdit(null);
    getUsers();
  };
  return (
    <div>
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Tipo Movimentação</Label>
          <Input name="tipomovimentacoes" />
        </InputArea>

        <InputArea>
          <Label>Data Hora Início</Label>
          <Input name="datahorainicio" />
        </InputArea>

        <InputArea>
          <Label>Data Hora Fim</Label>
          <Input name="datahorafim" />
        </InputArea>

        <Button type="submit">SALVAR</Button>
      </FormContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Tipo Movimentação</Th>
            <Th>Data Hora Início</Th>
            <Th>Data Hora Fim</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((item, i) => (
            <Tr key={i}>
              <Td width="25%">{item.tipomovimentacao}</Td>
              <Td width="30%">{item.datahorainicio}</Td>
              <Td width="35%">{item.datahorafim}</Td>
              <Td alignCenter width="10%">
                <FaTrash onClick={() => handleDelete(item.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Movimentacao;
