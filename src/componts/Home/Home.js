import React, {Component} from 'react';
import './Home.css';
let self = null;
class App extends Component {
    constructor(props) {
        super(props);
        self = this;
        this.state = {
            name: "wuzhibin",
            list:["wuzhibin",2,3,4,5,6]
        };
    }

    getImf(e){
        this.setState({
            name:e
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.name}
                <ul>
                    {this.state.list.map(function (v, k) {
                        return(<li key={k} onClick={()=>{
                            self.getImf(v)
                        }}>{v}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
