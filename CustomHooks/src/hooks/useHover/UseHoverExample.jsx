import useHover from './useHover'

export default function UseHoverExample() {
    const [ref,isHovering] = useHover();

     return (
         <>
         <button ref={ref}>{isHovering ? "Hovered":"Click me"}</button>
         </>
     )
}