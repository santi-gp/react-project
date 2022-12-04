import { Link } from 'react-router-dom';
const dataHooks = [
    {
        header: 'Formularios',
        content:
            <ul>
                <li><Link to="reactForm">React Form</Link></li>
                <li><Link to='reactFormik'>React Formik</Link></li>
                <li><Link to='hookForm'>React Hook Form</Link></li>
                <li><Link to='validateForm'>Form Validate </Link></li>
            </ul>
    },
    {
        header: 'API RESTful',
        content: 
            <ul>
                <li><Link to="githubUsers">Obtener Datos</Link></li>
            </ul>
    },
    {
        header: 'Ejemplos',
        content:
            <ul>
                <li><Link to="postBlog">Publicaciones</Link></li>
                <li><Link to="rating">Clasificación</Link></li>
                <li><Link to="changeColour">Cambiar color</Link></li>
            </ul>
    },
    
]

export default dataHooks;
/*export function getAllLinks(){
    return dataMenu;
}*/

