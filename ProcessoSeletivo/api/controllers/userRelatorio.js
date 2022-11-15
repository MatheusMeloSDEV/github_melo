import { db } from "../db.js";

export const getUsersRelatorio = (_, res) => {
  const q = "SELECT cliente, tipomovimentacao FROM container INNER JOIN movimentacoes ON container.ID = movimentacoes.container_id;";
  
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};


