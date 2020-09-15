import helmetedHornbill from './animals/helmeted-hormbill'
import vaquita from './animals/vaquita'

export default function getShadows() {
    return (
        [
            [...helmetedHornbill().shadows],
            [...vaquita().shadows]
        ]
    )
}
