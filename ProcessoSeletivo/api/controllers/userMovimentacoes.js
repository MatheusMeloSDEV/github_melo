import { db } from "../db.js";

export const getUsersMov = (_, res) => {
    const q = "SELECT * FROM movimentacoes";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
    });
};

export const addUserMov = (req, res) => {
    const q =
      "INSERT INTO movimentacoes(`tipomovimentacao`, `datahorainicio`, `datahorafim`) VALUES(?)";
  
    const values = [
      req.body.tipomovimentacao,
      req.body.datahorainicio,
      req.body.datahorafim,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
};
  
export const updateUserMov = (req, res) => {
    const q =
      "UPDATE movimentacoes SET `tipomovimentacao` = ?, `datahorainicio` = ?, `datahorafim` = ? WHERE `id` = ?";
  
    const values = [
      req.body.tipomovimentacao,
      req.body.datahorainicio,
      req.body.datahorafim,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUserMov = (req, res) => {
    const q = "DELETE FROM movimentacoes WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };
  
  
