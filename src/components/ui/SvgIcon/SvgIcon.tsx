import { svgService } from '../../../services/svg.service'

interface Props {
    iconName: string
}

export function SvgIcon({ iconName }: Props) {
    const svg = svgService.getSvg(iconName)
    return <i dangerouslySetInnerHTML={{ __html: svg }}></i>
}
