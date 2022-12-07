import { useTrail, animated, config } from "react-spring";

function TrailAnimation({ children, extStyles }) {
    const trails = useTrail(children.length, {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config : config.slow
    })
  
    return (
      <div style={extStyles}>
        {trails.map((props, index) => (
          <animated.div key={index} style={props}>{children[index]}</animated.div>
        ))}
      </div>
    )
}

export default TrailAnimation;