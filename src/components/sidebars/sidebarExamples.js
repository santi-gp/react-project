import { Link } from 'react-router-dom';
const dataExamples = [
    {
        header: 'Álgebra',
        content:
            <ul>
                <li><Link to="calculators">Calculadoras</Link></li>
            </ul>
    },
    {
        header: 'Métodos Númericos',
        content:
            <ul>
                <li><Link to='interLagrange'>Interpolación</Link></li>
            </ul>
    }
    
]

export default dataExamples;

