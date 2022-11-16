export default function SecondMain() {
    return (
        <div>
            <h1>This is the second page, which is inside 'pages' directory</h1>
            <SecondComponent />
        </div>
    )
}

export function SecondComponent() {
    return (
        <div>
            <h1>This is the second component, which is inside 'pages' directory</h1>
        </div>
    )
}