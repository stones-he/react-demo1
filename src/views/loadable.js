import React, {
    Component
} from 'react';

const Loadable = ({
    loader,
    loading: Loading
}) => {
    return class LoadableComponent extends Component {
        state = {
            loadedComponent: null
        }
        componentDidMount() {
            // 等价于 import('./Dashboard')
            loader().then(resp => {
                this.setState({
                    loadedComponent: resp.default
                })
            })
        }
        render() {
            return (
                this.state.loadedComponent ?
                <this.state.loadedComponent />
                :
                <Loading />
            );
        }
    }
}
export default Loadable;