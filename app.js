import { animate, stagger, inView } from 'motion'

inView('.projects-section', ({target}) => {
    animate(
        target.querySelectorAll(".project-card"), {
            y: ["-100px", "0"],
            opacity: ["0", "100"],
        },
        { duration: .6, delay: stagger(0.4, {start: .75}), easing: "ease-out"}
    )
    animate(
        target.querySelectorAll(["h1", "p"]), {
            y: ["-50px", "0"],
            opacity: ["0", "100"],
        },
        { duration: .5, delay: stagger(0.25, {start: .25}), easing: "ease-out"}
    )
})

inView('.about-section', ({target}) => {
    animate(
        target.querySelectorAll("img"), {
            x: ["-100px", "0"],
            opacity: ["0", "100"],
        },
        { duration: 1, delay: stagger(0.5, {start: .5}), easing: "ease-out"}
    )
    animate(
        target.querySelectorAll(["h1", "p"]), {
            x: ["50px", "0"],
            opacity: ["0", "100"],
        },
        { duration: .5, delay: stagger(0.5, {start: 0}), easing: "ease-out"}
    )
})

inView('.header', ({target}) => {
    animate(
        target.querySelectorAll(["h1", "p"]), {
            y: ["-50px", "0"],
            opacity: ["0", "100"],
        },
        { duration: .4, delay: stagger(0.3, {start: .2}), easing: "ease-out"}
    )
    animate(
        target.querySelectorAll("img"), {
            y: ["100px", "0"],
            opacity: ["0", "100"]
        },
        { duration: .75, delay: stagger(0.4, {start: .1}), easing: "ease"}
    )
    animate(
        target.querySelector(".animated-text"), {
            x: ["-50px", "0"],
            opacity: ["0", "100"]
        },
        { duration: .75, delay: .1, easing: "ease"}
    )
})