export const textUpFade = {
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

export const slideDown = {
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
    }
}

export const typingContainer = {
    initial: {
        opacity: 0,
        y: -10
    },
    animate: {
        y: 0,
        opacity:1,
        transition: {
            staggerChildren: 0.2,
            ease: 'easeIn'
        }
    }
}

export const typingText = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity:1,
        transition: {
            ease: 'easeIn'
        }
    }
}