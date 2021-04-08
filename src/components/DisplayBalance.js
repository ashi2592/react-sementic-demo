import { Statistic } from "semantic-ui-react"

const DisplayBalance = ({color,size,style, title, value}) =>(
    <Statistic color={color} size={size}>
        <Statistic.Label style={style}>{title}</Statistic.Label>
        <Statistic.Value>$ {value}</Statistic.Value>
    </Statistic>
)

export default DisplayBalance;