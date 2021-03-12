import './App.css';
import {
  Search,
  Button,
  CategoryButton,
  Card,
} from './components/StyledComponents';
import Pic from './pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHistory } from '@fortawesome/free-solid-svg-icons';

function App() {
  const categories = ['Red', 'white', 'Rose', 'Sparkling', 'Dessert'];
  const products = [
    {
      name: 'Casa Castillo Monastrell',
      price: '$20',
      country: 'Spain',
      bottleSize: '750ml',
    },
    {
      name: 'Littlebury Road',
      price: '$16',
      country: 'USA',
      bottleSize: '750ml',
    },
    {
      name: 'Neleman Monastrell',
      price: '$16',
      country: 'Italy',
      bottleSize: '750ml',
    },
    {
      name: 'Scantianum Toscana',
      price: '$32',
      country: 'Italy',
      bottleSize: '750ml',
    },
    {
      name: 'Marques de Tomares',
      price: '$18',
      country: 'Spain',
      bottleSize: '750ml',
    },
    {
      name: 'Beaujolais de lantigne',
      price: '$24',
      country: 'France',
      bottleSize: '750ml',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="Left">
          <nav>
            <div className="title">
              <h1>Wine & Spirits Team</h1>
              <p className="small">Location: Yaounde</p>
            </div>
            <div className="icons">
              <FontAwesomeIcon
                icon={faHistory}
                size="3x"
                style={{
                  backgroundColor: 'rgb(174, 245, 245)',
                  padding: '0.5rem',
                  borderRadius: '12px',
                  fontSize: '1em',
                }}
              />
              <FontAwesomeIcon
                icon={faBell}
                size="3x"
                outlined
                style={{
                  backgroundColor: 'rgb(174, 245, 245)',
                  padding: '0.5rem',
                  borderRadius: '12px',
                  fontSize: '1em',
                }}
              />
            </div>
            <div className="user">
              <img src={Pic} alt="profile" />
              <p>Cody Fisher</p>
            </div>
          </nav>
          <div className="search">
            <Search placeholder="Find products by name or code" />
          </div>

          <div className="categories">
            {categories.map((category) => (
              <CategoryButton ative>{category}</CategoryButton>
            ))}
          </div>

          <div className="products">
            {products.map((product) => (
              <Card>
                <div className="innerCard">
                  <div className="cardImg"></div>
                  <div className="cardDetails">
                    {' '}
                    <h4>{product.name}</h4>
                    <p className="small">
                      Country:{product.country} Bottle size:{product.bottleSize}
                    </p>
                    <h4 className="price">{product.price}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="Right">
          <div className="head">
            <h1>Cart</h1>
            <div className="sub">
              <Button>Clear</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/* <FontAwesomeIcon
icon={faSearch}
size="3x"
outlined
style={{
  backgroundColor: 'rgb(174, 245, 245)',
  padding: '0.5rem',
  borderRadius: '12px',
  fontSize: '1em',
}}
/> */
