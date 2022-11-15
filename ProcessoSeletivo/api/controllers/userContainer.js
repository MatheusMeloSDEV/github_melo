import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM container";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO container(`cliente`, `ncontainer`, `tipo`, `status`, `categoria`) VALUES(?)";

  const values = [
    req.body.cliente,
    req.body.ncontainer,
    req.body.tipo,
    req.body.status,
    req.body.categoria,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE container SET `cliente` = ?, `ncontainer` = ?, `tipo` = ?, `status` = ?, `categoria` = ? WHERE `id` = ?";

  const values = [
    req.body.cliente,
    req.body.ncontainer,
    req.body.tipo,
    req.body.status,
    req.body.categoria,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM container WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
