import { useParams } from "react-router-dom";

const data = [
    {id: 1, info: "He protects his sisters reputation even as his own is being maligned. He has every reason in the world to dislike Wickham. The man tried to seduce his much younger sister and continually lies about Darcy. Yet Darcy stays silent." },
    {id: 2, info: "He is a rescuer and doesnt boast about it. On hearing from Elizabeth that Wickham has seduced Lydia, Darcy joins Elizabeth s uncle in hunting for them. He bribes Wickham by settling his debts and paying for his colours a commission in the army. But he also tells them not to reveal this." },
    {id: 3, info: "He can admit when he is wrong. He is willing to admit, even if only to himself that he was wrong, and to change. When Elizabeth comments that she only grew better at playing the piano by practise, Darcy begins to practise talking to people and working on his social skills." }
]

const ParamPage = () => {
    const param = useParams();

    const fact = data.find(fact => fact.id == param.id)
    if(!fact){
        return <div className="error">Fact NOT FOUND... Try Again!</div>
    }
    return(
        <div>
            <h1>Fact N{fact.id}</h1>
            <p>{fact.info}</p>
            <h2>Param Route</h2>
        </div>
    )
}

export default ParamPage;