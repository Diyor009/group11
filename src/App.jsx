
import { useState } from 'react'
import './App.css'
import AddForm from './components/add-form/AddForm'
import AppInfo from './components/app-info/AppInfo'
import AppFilter from './components/filter/AppFilter'
import AppList from './components/list/AppList'
import SearchPanel from './components/search-panel/SearchPanel'

function App() {
  const [data, setData] = useState([
    {name: "Alex Fergusson", salary:1212, promotion:false, id:1},
    {name: "Xosep Gvardiolla", salary:1712, promotion:false, id:2},
    {name: "Yurgin Klop", salary:1612, promotion:false , id:3},
  ])



  return(

      <div className='app'>
        <AppInfo/>
        <div className="filter">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <AppList data={data} setData={setData}/>
        <AddForm/>
        <div className=""></div>
      </div>
    

  )
}

export default App
