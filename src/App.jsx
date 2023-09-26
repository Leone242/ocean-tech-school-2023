
import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Sea Of Thieves',
    imagemUrl: 'https://nosnerds.com.br/wp-content/uploads/2018/01/seaofthieves-capa.jpg'
  }
  const item2 = {
    nome: 'Horizon Zero Dawn',
    imagemUrl: 'https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/5f2d7abba3f8b1504db991fd/sharing_images/gun8ktxiiozx4vmleg1t.jpg'
  }

  const itens = [item1, item2];
  return (
    <>
      {itens.map(function(item){
        return <Card item = {item}/>
      })}
    </>
  )
}

export default App
