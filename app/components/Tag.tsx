import classes from '../style/tag.module.css'

type Props = {
    name: string
}

const Tag = ({ name }: Props) => {
    return (
        <div className={`${classes.tag}`}>{name}</div>
    )
}

export default Tag