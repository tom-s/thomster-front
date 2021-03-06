import React from 'react'
import Socket from '../utils/socket.js'

// Components
import Confirmation from './confirmation.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'
import Query from './query.jsx'
import Response from './response.jsx'
import TabBar from './tabBar.jsx'
import SidePage from './sidePage.jsx'
import TopBar from './topBar.jsx'
import Modal from './modal.jsx'

// Streams
import VolumeStream from '../streams/volumeStream.js'
    
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidePageType: null
        }
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="Home">
                {/* Header */}
                <TopBar />

                <div className="Content clearfix slider">
                    <div className="slide-group">
                        <div className="slide MainContent">
                            <div className="Microphone-wrapper">
                                <Microphone/>
                            </div>
                            <div className="Query-wrapper">
                                <Query/>
                            </div>
                            <div id="ResponseWrapper" className="Response-wrapper">
                                <Response wrapperId="ResponseWrapper"/>
                            </div>
                        </div>
                        <div className="slide SideContent">
                            <SidePage type={this.state.sidePageType} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <TabBar />

                {/* Confirmation ripple */}
                <Confirmation />
                
                {/* Modal */}
                <Modal/>

            </div>
        );
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;