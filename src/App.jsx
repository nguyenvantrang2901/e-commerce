import './App.css'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'

function App() {

  return (
    <div className="App">
      <Layout>
        <Header/>
          Content body
        <Footer/>
      </Layout>
    </div>
  )
}

export default App
