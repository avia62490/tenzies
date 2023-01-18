export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="die" style={styles} onClick={props.holdDie}>
            <h1>{props.value}</h1>
        </div>
    )
}