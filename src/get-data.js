import helmetedHornbill from './animals/helmeted-hormbill'
import vaquita from './animals/vaquita'

export default function getData() {
    return (
        [
            [...helmetedHornbill()],
            [...vaquita()]
        ]
    )
}
