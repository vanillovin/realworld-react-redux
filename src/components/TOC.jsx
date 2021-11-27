import React, { Component } from "react";

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                {this.props.data.map(content => <li>
                            <a href={content.id +".html"}>
                                {content.title}
                            </a>
                        </li>)}
                </ul>
            </nav>
        );
    }
}

export default TOC;