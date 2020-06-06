import React, { Component } from 'react';

import { Button } from 'antd'

const testHOC = (WrappedComponent) =>  {
    return class HOCComponent extends Component {
        render() {
            return ( 
                <>
                    <WrappedComponent />
                    <div> test hoc </div>
                </>
            )
        }
    }
}
@testHOC  // 2
class App extends Component {
    render() {
        return (
            <div>
                App <Button type="primary"> Click me </Button>
            </div>
        );
    }
}

// export default testHOC(App);  //1
export default App;  // 2