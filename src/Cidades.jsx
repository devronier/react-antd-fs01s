import axios from "axios"
import { useEffect, useState } from "react"
import {Table} from "antd"
import { Link } from "react-router-dom"

function Cidades() {

  const [cidades, setCidades] = useState([])

  async function buscarCidades() {
    const resposta = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/municipios/")

    setCidades(resposta.data)
  }

  useEffect(() => {
    buscarCidades()
  }, [])


  const colunas = [
    {
      title: "Id",
      dataIndex: "id",
      render: (id) => <Link to={`/cidades/${id}`}>{id}</Link>
    },
    {
      title: "Nome",
      dataIndex: "nome"
    },
     
  ]

  return  <Table  dataSource={cidades} columns={colunas} bordered/>
}

export default Cidades
