interface Props {
    txt: string
    length?: number
}

export function ShortTxt({ txt, length = 100 }: Props) {
    let displayTxt = txt

    if (txt.length > length) {
        displayTxt = txt.substring(0, length) + '...'
    }

    const lines = displayTxt.split('\n')

    return (
        <>
            {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </>
    )
}
