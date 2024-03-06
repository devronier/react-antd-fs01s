
import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import {Button} from "antd"

function CidadeDetalhe() {

    const params = useParams()

    const [cidade, setCidade] = useState([])

    async function buscarCidade() {
        const resposta = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${params.cidadeId}`)

        setCidade(resposta.data)
    }

    useEffect(() => {
        buscarCidade()
    }, [])

    return (
    <div>
        <h1>{cidade.nome}</h1>
        <Link to="/cidades">
            <Button type="primary" danger>Ir para Cidades</Button>
        </Link>
    </div>
    )
}

export default CidadeDetalhe