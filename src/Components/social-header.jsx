import React  from 'react'

export default class SOCIAL_CONTAINER extends React.Component {

    constructor(props) {
        super(props);
        this.github = 'https://github.com/PotatoBaron89'
        //this.state = {date: new Date()};
    }

    render() {
        return (
            <div className={"main-social-container"}>
                <div className="social-container">
                    <div className="social-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://www.linkedin.com/in//" target="">PotatoBaron89</a>
                                </h3>
                                <p>This is where I network and build my professional protfolio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href="https://twitter.com/" target="_blank">@PotatoBaron89</a>
                                </h3>
                                <p>This is where I read news and network with different social groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <a href={this.github} target="">PotatoBaron89</a>
                                </h3>
                                <p>Have a look at my current public projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

