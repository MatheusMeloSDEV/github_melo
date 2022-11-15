import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch} from "react-router-dom";
import {toast} from "react-toastify";
import Container from "../Pages/Container.js";
import Movimentacao from "../Pages/Movimentacao.js";
import Relatorio from "../Pages/Relatorio.js";


const Content = props => {
    const [usersCon, setUsersCon] = useState([]);
    const [usersMov, setUsersMov] = useState([]);
    const [usersRelatorio, setUsersRelatorio] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsersCon = async () => {
      try {
        const res = await axios.get("http://localhost:8801/container");
        setUsersCon(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };

    const getUsersMov = async () => {
        try {
          const res = await axios.get("http://localhost:8801/movimentacoes");
          setUsersMov(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
          toast.error(error);
        }
    };

    const getUsersRelatorio = async () => {
        try {
          const res = await axios.get("http://localhost:8801/Relatorio");
          setUsersRelatorio(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
          toast.error(error);
        }
    };
  
    useEffect(() => {
      getUsersCon();
    }, [setUsersCon]);

    useEffect(() => {
        getUsersMov();
      }, [setUsersMov]);

    useEffect(() => {
        getUsersRelatorio();
    }, [setUsersRelatorio])


    return(
        <main className="Content">
            <Switch>
                <Route exact path="/" >
                    <Container onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsersCon} users={usersCon} setUsers={setUsersCon}/>
                </Route>
                <Route exact path="/Movimentacoes" >
                    <Movimentacao onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsersMov} users={usersMov} setUsers={setUsersMov}/>
                </Route>
                <Route exact path="/Relatorio" >
                    <Relatorio onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsersRelatorio} users={usersRelatorio} setUsers={setUsersRelatorio}/>
                </Route>
            </Switch>
        </main>
    )
}

export default Content;