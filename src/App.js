import Header from "./components/Header";
import Places from "./components/Places";
import Tab from "./components/Tab";


import {PLACES, MEMORIES} from "./data";
import {useState} from "react";

function App() {
    const places = PLACES.map(place => <Places key={place.title} {...place}/>);
    function handleTabClick(tabName){
        setClickedTab(tabName);
    }
    const [clickedTab, setClickedTab] = useState('balatonmariafurdo');
    let {date:memoryDate, images:memoryImgs} = MEMORIES[clickedTab];
    let images = memoryImgs.map(image => {
        return <img src={image} width={200} height={150}/>
    })

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Places we've already been together</h2>
                    <ul>
                        {places}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Memories</h2>
                    <menu>
                        <Tab title="Balatonmáriafürdő" onClick={()=>{handleTabClick('balatonmariafurdo')}} isSelected={clickedTab ==='balatonmariafurdo'}/>
                        <Tab title="Sárospatak" onClick={()=>{handleTabClick('sarospatak')}} isSelected={clickedTab ==='sarospatak'}/>
                        <Tab title="Eger" onClick={()=>{handleTabClick('eger')}} isSelected={clickedTab ==='eger'}/>
                        <Tab title="Fonyód" onClick={()=>{handleTabClick('fonyod')}} isSelected={clickedTab ==='fonyod'}/>
                        <Tab title="Szilvásvárad" onClick={()=>{handleTabClick('szilvasvarad')}} isSelected={clickedTab ==='szilvasvarad'}/>
                    </menu>
                    <div id="tab-content">
                        <h2>
                            <time>{memoryDate}</time>
                        </h2>
                        <ul id="memoryImages">
                            {images}
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default App;