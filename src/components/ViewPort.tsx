import { Viewport, Animate, Routers } from './styled'
import AniBox from './layout/anim/AniBox';



const ViewPort: React.FC = () => {
    return (
        <Viewport>
            <Animate><AniBox /></Animate>
            <Routers></Routers>
        </Viewport>
    )
}

export default ViewPort;
