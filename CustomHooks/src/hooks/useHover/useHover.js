import {useEffect, useRef, useState} from 'react';

export default function useHover() {

    const ref = useRef();
    const [isHovering,setIsHovering] = useState(false);

    const setYes = () => setIsHovering(true);
    const setNo = () => setIsHovering(false);
    useEffect(() => {
        // setIsHovering(false)
        const element = ref.current;

        if(!element) return;

        element.addEventListener('mouseenter',setYes);
        element.addEventListener('mouseleave',setNo);

        return () => {
            element.removeEventListener('mouseenter',setYes);
            element.removeEventListener('mouseleave',setNo);
        }
    },[ref.current]);

    return [ref,isHovering];
}