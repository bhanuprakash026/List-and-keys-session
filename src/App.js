import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Bhanu',
    role: 'Software developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/dkmpwjbyo/image/upload/v1663160550/IMG_20220914_183047_uhgbgl.jpg',
    name: 'Prakash',
    role: 'Software developer',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://res.cloudinary.com/dkmpwjbyo/image/upload/v1663160550/IMG_20220914_183047_uhgbgl.jpg',
    name: 'Girish Akash',
    role: 'Software developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Rahul Attuluri',
    role: 'Software developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Details</h1>
    <div>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetailsList={eachItem} key={eachItem.uniqueNo} />
      ))}
    </div>
  </div>
)

export default App
