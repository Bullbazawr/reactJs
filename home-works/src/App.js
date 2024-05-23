import './App.css'
import Message from './components/FirstHomeWork/Message'
import CommentList from './components/SecondHomeWork/CommentsList'

function App() {
  return (
    <div className="App">
      <Message 
        message={'Wellcome'}
      />
      <CommentList />
    </div>
  )
}

export default App;
