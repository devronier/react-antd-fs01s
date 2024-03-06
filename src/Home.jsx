import {Button} from "antd"
import { Link } from "react-router-dom"

function Home() {
    return <div>
        <h1>Home</h1>
        <Link to="/cidades">
            <Button type="primary" danger>Ir para Cidades</Button>
        </Link>
        
    </div>
}

export default Home