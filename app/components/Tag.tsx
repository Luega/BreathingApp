type Props = {
    name: string
}

const Tag = ({ name }: Props) => {
    return (
        <div>{name}</div>
    )
}

export default Tag