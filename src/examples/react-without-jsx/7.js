// Core
import { render } from 'react-dom';

const node1 = 'Welcome in ';
const node2 = new Date().getFullYear(); // Текущий год
const node3 = '!';

render([node1, node2, node3], document.getElementById('root'));

// render(
//     <section>
//         <>
//             {node1}
//             {node2}
//             {node3}
//         </>
//     </section>,
//     document.getElementById('root'),
// );
