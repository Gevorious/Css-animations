import helmetedHornbill from './animals/helmeted-hormbill'
import vaquita from './animals/vaquita'

export function getParts() {
    return (
        [
            [...helmetedHornbill().parts],
            [...vaquita().parts]
        ]
    )
}

export function getShadows() {
    return (
        [
            [...helmetedHornbill().shadows],
            [...vaquita().shadows]
        ]
    )
}

export function getBackground() {
    return (
        [
            helmetedHornbill().background,
            vaquita().background
        ]
    )
}
export function getName() {
    return (
        [
            helmetedHornbill().name,
            vaquita().name
        ]
    )
}
