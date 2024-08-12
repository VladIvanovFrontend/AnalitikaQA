import { useState } from 'react';

const useClickColor = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleColor = () => {
        setIsClicked(prevState => !prevState);
    };

    return { isClicked, toggleColor };
};

export default useClickColor;