import { Viewport, Animate, Routers } from './styled'
import AniBox from './layout/anim/AniBox';
import RouterFunc from '../pages/Router';
import FooBar from './layout/bars/FooBar';



const ViewPort: React.FC = () => {
    return (
        <Viewport>
            <Animate><AniBox /></Animate>
            <Routers><RouterFunc /></Routers>
            <FooBar />
        </Viewport>
    )
}

export default ViewPort;