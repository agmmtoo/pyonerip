import { rip } from '../ripper/index.js'

export default async function rips({ name, url }) {
    return `ripped ${name} from ${url}`
}