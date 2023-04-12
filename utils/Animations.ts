import {MotionProps} from 'framer-motion'

export const fadeUp: MotionProps = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity:1,
        transition: {
            ease: [ 0.6, 0.01, 0.05, 0.95],
            duration : 0.7
        }
    },
} 

export const slideDown: MotionProps = {
    initial: {
        y: -100,
        opacity:0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [ 0.6, 0.01, 0.05, 0.95],
            duration : 0.7
        }
    },
    exit: {
        opacity:0,
        y: -100,
        transition: {
            ease: [ 0.6, 0.01, 0.05, 0.95],
            duration : 0.7
        }
    }
}

export const slideFromLeft: MotionProps = {
    initial: {
        x: -200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity:1,
        transition: {
            duration: 0.5
        }
    },
} 

export const slideFromRight: MotionProps = {
    initial: {
        x: 200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity:1,
        transition: {
            duration: 0.5,
        }
    },
}

export const fadeIn: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity:1,
        transition: {
            duration: 0.5,
        }
    },
}



    