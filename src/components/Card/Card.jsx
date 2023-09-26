import "./Card.css"

export default function Card(props){
    console.log(props);
    const item = props.item;
    return  <div className="card">
    <h2>{item.nome}</h2>
    <div className="tags">
      <spam className="tag">Aventura</spam>
      <spam className="tag">Multiplayer</spam>
      <spam className="tag">Mundo Aberto</spam>
    </div>
    <img src={item.imagemUrl}></img>
  </div>
}