import React, { Component } from 'react';

const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

const Source = () => <>&nbsp;|&nbsp;<a className='footer-link' href='https://github.com/aboelkassem/LandingPage'>Source</a></>

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <p className='footer-text' aria-label='Designed and built by aboelkassem'>Designed and built by&nbsp;
                    <a className='footer-link' href='https://www.aboelkassem.com/'>aboelkassem</a>
                    {isMobileDevice ? '' : <Source />}
                </p>
            </div>
        )
    }
}

export default Footer;
