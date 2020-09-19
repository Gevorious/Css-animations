import helmetedHornbill from './animals/helmeted-hormbill'
import vaquita from './animals/vaquita'
import goldenLionTamarin from './animals/golden-lion-tamarin'

export function getParts() {
    return (
        [
            [...helmetedHornbill().parts],
            [...vaquita().parts],
            [...goldenLionTamarin().parts]
        ]
    )
}

export function getShadows() {
    return (
        [
            [...helmetedHornbill().shadows],
            [...vaquita().shadows],
            [...goldenLionTamarin().shadows]
        ]
    )
}

export function getBackground() {
    return (
        [
            helmetedHornbill().background,
            vaquita().background,
            goldenLionTamarin().background
        ]
    )
}
export function getName() {
    return (
        [
            helmetedHornbill().name,
            vaquita().name,
            goldenLionTamarin().name
        ]
    )
}
