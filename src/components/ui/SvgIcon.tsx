import { svgService } from '../../services/svg.service'

interface SvgIconProps {
    iconName: string
}

export function SvgIcon({ iconName }: SvgIconProps) {
    const svg = svgService.getSvg(iconName)
    return <i dangerouslySetInnerHTML={{ __html: svg }}></i>
}
