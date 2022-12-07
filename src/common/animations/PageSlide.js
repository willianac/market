import { useLocation } from "react-router-dom";
import {useTransition, animated} from "react-spring"

export default function PageSlide({ children }) {
    const location = useLocation()
    const transitions = useTransition(location.pathname, {
        from : {opacity : 0, transform : 'translate(100%, 0)'},
        enter : {opacity : 1, transform : 'translate(0%, 0)'},
        leave : {opacity : 0, transform : 'translate(-90%, 0)', position : 'absolute'},
      })
      return transitions((style, items) => (
        <animated.div style={style}>{children}</animated.div>
      ))
}