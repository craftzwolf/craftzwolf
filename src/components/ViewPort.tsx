import { Viewport, Animate, Routers } from './styled'
import AniBox from './layout/anim/AniBox';
import RouterFunc from '../pages/Router';



const ViewPort: React.FC = () => {
    return (
        <Viewport>
            <Animate><AniBox /></Animate>
            <Routers><RouterFunc /></Routers>
        </Viewport>
    )
}

export default ViewPort;