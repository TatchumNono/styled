import "./App.css";
import {
  Search,
  Button,
  CategoryButton,
  Card,
  CardImg,
  CartCard,
} from "./components/StyledComponents";
import Pic from "./pic.jpg";
import Wine7 from "./wine7.png";
import Wine8 from "./wine8.png";
import Wine5 from "./wine5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHistory,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  //const categories = ['Red', 'white', 'Rose', 'Sparkling', 'Dessert'];
  const products = [
    {
      name: "Casa Castillo Monastrell",
      price: "$20",
      country: "Spain",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Littlebury Road",
      price: "$16",
      country: "USA",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Neleman Monastrell",
      price: "$16",
      country: "Italy",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Scantianum Toscana",
      price: "$32",
      country: "Italy",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Marques de Tomares",
      price: "$18",
      country: "Spain",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Beaujolais de lantigne",
      price: "$24",
      country: "France",
      bottleSize: "750ml",
      pic: Wine5,
    },
  ];

  const cart = [
    {
      name: "Casa Castillo Monastrell",
      price: "$20",
      country: "Spain",
      bottleSize: "750ml",
      pic: Wine5,
    },
    {
      name: "Littlebury Road",
      price: "$16",
      country: "USA",
      bottleSize: "750ml",
      pic: Wine7,
    },
    {
      name: "Neleman Monastrell",
      price: "$16",
      country: "Italy",
      bottleSize: "750ml",
      pic: Wine8,
    },
  ];

  return (
    <div className='App'>
      <div className='container'>
        <div className='Left'>
          <nav>
            <div className='title'>
              <h1>Wine & Spirits Team</h1>
              <div className='location'>
                <p className='small'>Location: Yaounde</p>
              </div>
            </div>
            <div className='icons'>
              <FontAwesomeIcon
                icon={faHistory}
                size='3x'
                style={{
                  margin: "0.5rem",
                  backgroundColor: "rgb(174, 245, 245)",
                  padding: "0.5rem",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                }}
              />
              <FontAwesomeIcon
                icon={faBell}
                size='3x'
                style={{
                  margin: "0.5rem",
                  backgroundColor: "rgb(174, 245, 245)",
                  padding: "0.5rem",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                }}
              />
            </div>
            <div className='user'>
              <img src={Pic} alt='profile' />
              <div className='info'>
                <p>Cody Fisher</p>
                <div className='position'>
                  <p className='small'>Employee</p>
                </div>
              </div>
            </div>
          </nav>
          <div className='search'>
            <Search placeholder='Find products by name or code' />
          </div>

          <div className='categories'>
            <CategoryButton primary>Red</CategoryButton>
            <CategoryButton>White</CategoryButton>
            <CategoryButton>Rose</CategoryButton>
            <CategoryButton>Sparkling</CategoryButton>
            <CategoryButton>Dessert</CategoryButton>
          </div>

          <div className='products'>
            {products.map((product) => (
              <Card>
                <div className='innerCard'>
                  <CardImg img={product.pic}></CardImg>
                  <div className='cardDetails'>
                    {" "}
                    <h4 className='name'>{product.name}</h4>
                    <p className='small'>
                      {`Country : ${product.country} • Bottle size : ${product.bottleSize}`}
                    </p>
                    <h4 className='price'>{product.price}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className='Right'>
          <div className='head'>
            <h1>Cart</h1>
            <div className='sub'>
              <Button>Clear</Button>
            </div>
          </div>
          <div className='cart'>
            {cart.map((item) => (
              <>
                <CartCard img={item.pic}></CartCard>
                <div className='cardDetails'>
                  <h4 className='name'>{item.name}</h4>
                  <p className='small'>{`Bottle size : ${item.bottleSize}`}</p>
                  <h4 className='price'>{item.price}</h4>
                </div>
                <div className='cardControls'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    size='1x'
                    fill
                    style={{
                      backgroundColor: "rgb(174, 245, 245)",
                      padding: "0.4rem",
                      borderRadius: "10px",
                      fontSize: "0.6em",
                    }}
                  />

                  <h4>2</h4>

                  <FontAwesomeIcon
                    icon={faMinus}
                    size='1x'
                    fill
                    style={{
                      backgroundColor: "rgb(174, 245, 245)",
                      padding: "0.4rem",
                      borderRadius: "10px",
                      fontSize: "0.6em",
                    }}
                  />
                </div>
              </>
            ))}
          </div>
          <div>
            <button>Charge</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
