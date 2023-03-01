
export default function workoutCards({ item: id, title, body, image }) {
    return (
        <div>
            <div>
                <h1> {title}</h1>
                <p> {body}</p>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}